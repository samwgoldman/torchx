#!/usr/bin/env python3
# Copyright (c) Facebook, Inc. and its affiliates.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.

import os
import shutil
import tempfile
import unittest
from datetime import datetime
from io import StringIO
from pathlib import Path
from typing import Iterable, List, Optional
from unittest.mock import patch

from torchx.runner.config import apply, dump, load
from torchx.schedulers import Scheduler, get_schedulers
from torchx.schedulers.api import DescribeAppResponse
from torchx.specs import AppDef, AppDryRunInfo, RunConfig, runopts


class TestScheduler(Scheduler):
    def __init__(self) -> None:
        super().__init__("_", "_")

    def schedule(self, dryrun_info: AppDryRunInfo) -> str:
        raise NotImplementedError()

    def _submit_dryrun(self, app: AppDef, cfg: RunConfig) -> AppDryRunInfo:
        raise NotImplementedError()

    def describe(self, app_id: str) -> Optional[DescribeAppResponse]:
        raise NotImplementedError()

    def _cancel_existing(self, app_id: str) -> None:
        raise NotImplementedError()

    def log_iter(
        self,
        app_id: str,
        role_name: str,
        k: int = 0,
        regex: Optional[str] = None,
        since: Optional[datetime] = None,
        until: Optional[datetime] = None,
        should_tail: bool = False,
    ) -> Iterable[str]:
        raise NotImplementedError()

    def run_opts(self) -> runopts:
        opts = runopts()
        opts.add(
            "i",
            type_=int,
            default=1,
            help="an int option",
        )
        opts.add(
            "f",
            type_=float,
            default=1.2,
            help="a float option",
        )
        opts.add(
            "s",
            type_=str,
            default="foobar",
            help="an str option",
        )
        opts.add(
            "bTrue",
            type_=bool,
            default=True,
            help="an bool_true option",
        )
        opts.add(
            "bFalse",
            type_=bool,
            default=False,
            help="an bool_false option",
        )
        opts.add(
            "l",
            type_=List[str],
            default=["a", "b", "c"],
            help="a list option",
        )
        opts.add(
            "l_none",
            type_=List[str],
            default=None,
            help="a None list option",
        )
        opts.add(
            "empty",
            type_=str,
            default=None,
            help="an empty option",
        )
        return opts


_CONFIG = """[default.scheduler_args.local_cwd]
log_dir = /home/bob/logs
prepend_cwd = True

[test.scheduler_args.local_cwd]
log_dir = None
prepend_cwd = False

[alpha.scheduler_args.local_cwd]
log_dir = /tmp/logs
"""

_CONFIG_INVALID = """[default.scheduler_args.test]
a_run_opt_that = does_not_exist
s = option_that_exists
"""

_TEAM_CONFIG = """[default.scheduler_args.test]
s = team_default
i = 50
f = 1.2
"""

_MY_CONFIG = """[default.scheduler_args.test]
s = my_default
i = 100
"""

PATH_HOME = "torchx.runner.config.Path.home"
PATH_CWD = "torchx.runner.config.Path.cwd"
TORCHX_GET_SCHEDULERS = "torchx.runner.config.get_schedulers"


class ConfigTest(unittest.TestCase):
    def setUp(self) -> None:
        self.test_dir = tempfile.mkdtemp(prefix="torchx_runner_config_test")
        self._write(
            ".torchxconfig",
            _TEAM_CONFIG,
        )
        self._write(
            os.path.join("home", "bob", ".torchxconfig"),
            _MY_CONFIG,
        )

    def tearDown(self) -> None:
        shutil.rmtree(self.test_dir)

    def _write(self, filename: str, content: str) -> Path:
        f = Path(self.test_dir) / filename
        f.parent.mkdir(parents=True, exist_ok=True)
        with open(f, "w") as fp:
            fp.write(content)
        return f

    def test_load(self) -> None:
        runcfg = RunConfig()
        load(
            profile="default", scheduler="local_cwd", f=StringIO(_CONFIG), runcfg=runcfg
        )
        self.assertEqual("/home/bob/logs", runcfg.get("log_dir"))
        self.assertEqual(True, runcfg.get("prepend_cwd"))

        runcfg = RunConfig()
        load(profile="test", scheduler="local_cwd", f=StringIO(_CONFIG), runcfg=runcfg)
        self.assertEqual(None, runcfg.get("log_dir"))
        self.assertEqual(False, runcfg.get("prepend_cwd"))

        runcfg = RunConfig()
        load(profile="alpha", scheduler="local_cwd", f=StringIO(_CONFIG), runcfg=runcfg)
        self.assertEqual("/tmp/logs", runcfg.get("log_dir"))
        self.assertEqual(None, runcfg.get("prepend_cwd"))

    def test_no_override_load(self) -> None:
        runcfg = RunConfig()
        runcfg.set("log_dir", "/foo/bar")
        runcfg.set("debug", 1)

        load(profile="test", scheduler="local_cwd", f=StringIO(_CONFIG), runcfg=runcfg)
        self.assertEqual("/foo/bar", runcfg.get("log_dir"))
        self.assertEqual(1, runcfg.get("debug"))
        self.assertEqual(False, runcfg.get("prepend_cwd"))

    @patch(
        TORCHX_GET_SCHEDULERS,
        return_value={"test": TestScheduler()},
    )
    def test_apply(self, _) -> None:
        with patch(PATH_CWD, return_value=Path(self.test_dir)):
            with patch(PATH_HOME, return_value=Path(self.test_dir) / "home" / "bob"):
                runcfg = RunConfig()
                runcfg.set("s", "runtime_value")

                apply(profile="default", scheduler="test", runcfg=runcfg)

                self.assertEqual("runtime_value", runcfg.get("s"))
                self.assertEqual(100, runcfg.get("i"))
                self.assertEqual(1.2, runcfg.get("f"))

    def test_dump_invalid_scheduler(self) -> None:
        with self.assertRaises(ValueError):
            dump(f=StringIO(), schedulers=["does-not-exist"])

    @patch(
        TORCHX_GET_SCHEDULERS,
        return_value={"test": TestScheduler()},
    )
    def test_dump_only_required(self, _) -> None:
        sfile = StringIO()

        # test scheduler has no required options hence expect empty string
        dump(f=sfile, required_only=True)

        runcfg = RunConfig()
        sfile.seek(0)
        load(profile="default", scheduler="test", f=sfile, runcfg=runcfg)

        self.assertFalse(runcfg.cfgs)

    @patch(
        TORCHX_GET_SCHEDULERS,
        return_value={"test": TestScheduler()},
    )
    def test_load_invalid_runopt(self, _) -> None:
        runcfg = RunConfig()
        load(
            profile="default",
            scheduler="test",
            f=StringIO(_CONFIG_INVALID),
            runcfg=runcfg,
        )
        # options in the config file but not in runopts
        # should be ignored (we shouldn't throw an error since
        # this makes things super hard to guarantee BC - stale config file will fail
        # to run, we don't want that)

        self.assertEquals("option_that_exists", runcfg.get("s"))

    def test_load_no_section(self) -> None:
        runcfg = RunConfig()
        load(
            profile="default",
            scheduler="local_cwd",
            f=StringIO(),
            runcfg=runcfg,
        )
        # is empty
        self.assertFalse(runcfg.cfgs)

        load(
            profile="default",
            scheduler="local_cwd",
            f=StringIO("[default.scheduler_args.local_cwd]\n"),
            runcfg=runcfg,
        )
        # still empty
        self.assertFalse(runcfg.cfgs)

    @patch(
        TORCHX_GET_SCHEDULERS,
        return_value={"test": TestScheduler()},
    )
    def test_dump_and_load_all_runopt_types(self, _) -> None:
        sfile = StringIO()
        dump(sfile)

        sfile.seek(0)

        runcfg = RunConfig()
        load(profile="default", scheduler="test", f=sfile, runcfg=runcfg)

        # all runopts in the TestScheduler have defaults, just check against those
        for opt_name, opt in TestScheduler().run_opts():
            self.assertEqual(runcfg.get(opt_name), opt.default)

    def test_dump_and_load_all_registered_schedulers(self) -> None:
        # dump all the runopts for all registered schedulers
        # load them back as RunConfig()
        # checks that all scheduler run options are accounted for

        sfile = StringIO()
        dump(sfile)

        for sched_name, sched in get_schedulers(session_name="_").items():
            sfile.seek(0)  # reset the file pos
            runcfg = RunConfig()
            load(profile="default", scheduler=sched_name, f=sfile, runcfg=runcfg)

            for opt_name, _ in sched.run_opts():
                self.assertTrue(opt_name in runcfg.cfgs)
