Search.setIndex({docnames:["basics","beta","cli","components","components/base","components/distributed","components/hpo","components/serve","components/utils","configure","examples_apps/datapreproc/datapreproc","examples_apps/index","examples_apps/lightning_classy_vision/component","examples_apps/lightning_classy_vision/data","examples_apps/lightning_classy_vision/interpret","examples_apps/lightning_classy_vision/model","examples_apps/lightning_classy_vision/train","examples_pipelines/index","examples_pipelines/kfp/kfp_pipeline","index","pipelines","pipelines/kfp","quickstart","runner","schedulers","schedulers/kubernetes","schedulers/local","schedulers/slurm","specs"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["basics.rst","beta.rst","cli.rst","components.rst","components/base.rst","components/distributed.rst","components/hpo.rst","components/serve.rst","components/utils.rst","configure.rst","examples_apps/datapreproc/datapreproc.rst","examples_apps/index.rst","examples_apps/lightning_classy_vision/component.rst","examples_apps/lightning_classy_vision/data.rst","examples_apps/lightning_classy_vision/interpret.rst","examples_apps/lightning_classy_vision/model.rst","examples_apps/lightning_classy_vision/train.rst","examples_pipelines/index.rst","examples_pipelines/kfp/kfp_pipeline.rst","index.rst","pipelines.rst","pipelines/kfp.rst","quickstart.rst","runner.rst","schedulers.rst","schedulers/kubernetes.rst","schedulers/local.rst","schedulers/slurm.rst","specs.rst"],objects:{"torchx.components":{base:[4,0,0,"-"],dist:[5,0,0,"-"],hpo:[6,0,0,"-"],serve:[7,0,0,"-"],utils:[8,0,0,"-"]},"torchx.components.base":{binary_component:[4,0,0,"-"],roles:[4,0,0,"-"]},"torchx.components.base.binary_component":{binary_component:[4,1,1,""]},"torchx.components.base.roles":{create_torch_dist_role:[4,1,1,""]},"torchx.components.dist":{ddp:[5,1,1,""]},"torchx.components.serve":{torchserve:[7,1,1,""]},"torchx.components.utils":{echo:[8,1,1,""],touch:[8,1,1,""]},"torchx.pipelines":{kfp:[20,0,0,"-"]},"torchx.pipelines.kfp.adapter":{ContainerFactory:[20,2,1,""],component_from_app:[20,1,1,""],component_spec_from_app:[20,1,1,""]},"torchx.runner":{Runner:[23,2,1,""],get_runner:[23,1,1,""]},"torchx.runner.Runner":{describe:[23,3,1,""],dryrun:[23,3,1,""],list:[23,3,1,""],log_lines:[23,3,1,""],run:[23,3,1,""],run_from_path:[23,3,1,""],run_opts:[23,3,1,""],schedule:[23,3,1,""],scheduler_backends:[23,3,1,""],status:[23,3,1,""],stop:[23,3,1,""],wait:[23,3,1,""]},"torchx.schedulers":{Scheduler:[24,2,1,""],get_schedulers:[24,1,1,""],local_scheduler:[26,0,0,"-"]},"torchx.schedulers.Scheduler":{cancel:[24,3,1,""],describe:[24,3,1,""],exists:[24,3,1,""],log_iter:[24,3,1,""],run_opts:[24,3,1,""],schedule:[24,3,1,""],submit:[24,3,1,""],submit_dryrun:[24,3,1,""]},"torchx.schedulers.local_scheduler":{ImageProvider:[26,2,1,""],LocalDirectoryImageProvider:[26,2,1,""],LocalScheduler:[26,2,1,""]},"torchx.schedulers.local_scheduler.ImageProvider":{fetch:[26,3,1,""],get_command:[26,3,1,""]},"torchx.schedulers.local_scheduler.LocalDirectoryImageProvider":{fetch:[26,3,1,""],get_command:[26,3,1,""]},"torchx.schedulers.local_scheduler.LocalScheduler":{describe:[26,3,1,""],log_iter:[26,3,1,""],run_opts:[26,3,1,""],schedule:[26,3,1,""]},"torchx.specs":{AppDef:[28,2,1,""],AppState:[28,2,1,""],AppStatus:[28,2,1,""],ReplicaState:[28,4,1,""],Resource:[28,2,1,""],RetryPolicy:[28,2,1,""],Role:[28,2,1,""],RunConfig:[28,2,1,""],get_named_resources:[28,1,1,""],macros:[28,2,1,""],runopts:[28,2,1,""]},"torchx.specs.AppDef":{add_metadata:[28,3,1,""]},"torchx.specs.Resource":{copy:[28,3,1,""]},"torchx.specs.Role":{pre_proc:[28,3,1,""]},"torchx.specs.macros":{Values:[28,2,1,""]},"torchx.specs.macros.Values":{apply:[28,3,1,""],substitute:[28,3,1,""]},"torchx.specs.runopts":{add:[28,3,1,""],is_type:[28,3,1,""],resolve:[28,3,1,""]},torchx:{cli:[2,0,0,"-"],components:[3,0,0,"-"],pipelines:[20,0,0,"-"],runner:[23,0,0,"-"],schedulers:[24,0,0,"-"],specs:[28,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":[0,2,4,7,10,12,13,14,15,16,18,22,23,24,26,28],"000":[10,12,13,14,15,16,18],"02":15,"1":[0,2,4,5,7,9,10,12,13,14,15,16,18,20,22,23,24,26,28],"10":[23,28],"100":[2,23,26],"1000":13,"1024":[0,12,28],"122":9,"13":13,"14":15,"16":[9,13],"16xlarg":9,"2":[2,4,9,14,22,28],"200":10,"244":9,"3":[2,4,14,16,22,24,26,28],"32":[9,16],"4":[0,4,9,22,28],"4096":15,"488":9,"488gb":9,"5":[4,10,14,28],"50":[24,26],"500":28,"50th":[24,26],"6":13,"61":9,"64":[9,14,15,28],"8":[4,9],"8080":28,"8081":[7,18,28],"9":23,"90528d7ca1a48142e341f4ef8d21d0d":10,"9090":28,"abstract":[0,18,24,26],"break":23,"case":[0,2],"class":[4,9,13,15,20,23,24,26,28],"default":[2,4,10,16,18,22,23,28],"do":[0,2,9,15,23,26,28],"export":[15,16,18],"final":[18,23,24,26,28],"float":[3,28],"function":[0,2,3,9,15,20,23,24,28],"import":[0,2,3,4,7,9,10,12,13,14,15,16,18,20,22,28],"int":[0,2,3,4,5,13,15,16,22,23,24,26,28],"long":[2,23],"new":[0,3,24,26,28],"return":[0,3,4,5,7,9,10,12,13,14,15,16,18,20,22,23,24,26,28],"short":23,"static":[18,28],"super":[13,15],"true":[4,10,14,15,16,18,23,24,26,28],"try":[0,22],"while":[0,23,24,26,28],A:[0,4,9,23,28],And:[0,9],As:0,BE:4,But:[0,22],For:[0,4,9,13,16,18,22,23,24,26,28],If:[0,2,18,22,23,24,26,28],In:[0,2,22],Is:[24,26],It:[2,4,9,13,14,15,19,22,23,24,26],NOT:[0,2,23,28],Not:[3,19,24,26,28],One:[0,22],THE:22,TO:22,That:[2,4,22],The:[0,2,3,4,7,9,14,18,19,20,22,23,24,26,28],There:[0,2],These:[4,7,8,18,20,22,28],To:[0,2,13,22,24],With:[0,22],_:[10,13,15],__file__:18,__getitem__:[24,26],__init__:[13,15],__main__:[10,14,16],__name__:[10,14,16],_field_typ:4,_missing_typ:4,abc:24,about:[0,4],abov:[0,3],absolut:[22,23,26],abstractmethod:24,abus:23,accept:[3,28],access:[0,2,24,26],accessor:28,accordingli:3,accur:0,accuraci:23,achiev:0,across:[0,13],act:23,action:23,actual:[0,5,18,23,24,26,28],ad:0,adam:15,adapt:[18,20,21],add:[10,22,28],add_argu:[10,14,16,18],add_metadata:28,addit:[3,22,28],admitt:28,advanc:0,advantag:0,after:[9,14,18],against:28,agent:4,agnost:[0,16],ahead:18,ai:14,aim:7,aka:2,alia:28,all:[2,3,11,14,17,18,22,23,24,26,28],alloc:[18,28],allow:[0,2,4,13,18,20,28],along:2,alreadi:[0,2,19,22,23,28],also:[0,2,15,22,28],alwai:[2,23,24,26],an:[0,4,14,15,16,18,19,22,23,24,26,28],analysi:14,analyz:14,ani:[4,9,23,24,26,28],annot:[3,24],anoth:3,another_arg:4,anti:23,anymor:23,anyth:26,anywher:0,api:[0,2,4,5,7,8,12,18,20,23,24,26,28],app:[0,3,9,11,12,15,18,19,20,22,23,24,26,28],app_arg:[3,22,23],app_def:20,app_handl:[2,23,28],app_id:[24,26,28],app_spec:0,app_statu:23,appdef:[2,3,4,5,7,8,9,12,18,20,22,23,24,26],appdryruninfo:[23,24,26,28],append:[10,18],appli:[2,4,20,28],applic:[0,2,4,5,7,19,22,23,24,26,28],appnotrerunnableexcept:23,appspec:0,appstat:28,appstatu:[23,28],ar:[0,2,3,4,5,8,9,18,19,20,22,23,24,26,28],arbitrari:[3,24,26,28],archiv:[2,7,15],arcnam:10,arg:[0,2,4,10,12,14,16,18,20,22,26,28],argpars:[10,14,16,18,22],argument:[0,2,3,4,5,22,28],argumentpars:[10,14,16,18],argv:[10,14,16,18],around:[2,18,28],arr:14,arrai:14,artifact:28,assembl:20,assert:[10,13,15],assign:28,associ:22,assum:[18,22],assumpt:[0,24,26],attach:23,attempt:2,attr:14,attr_ig:14,attribut:[13,14],author:[0,2,9,22],automat:4,avail:[3,24,26,28],aw:[0,9],awai:18,axi:14,back:[23,26],backend:[0,23,24],bad_typ:28,ball:28,bar:[0,2,4,12,22,23],base:[0,5,9,12,18,19,23,24,26,28],base_imag:[4,5,28],base_img_root:28,baselin:14,basenam:10,basic:[19,22,24,26],batch:[15,16],batch_nb:15,batch_siz:[13,14,16],batchsize_per_replica:13,becaus:[0,2,28],been:[23,24,26,28],befor:[0,2,18,22,28],begin:23,behalf:[2,26],behav:[24,26],behavior:[4,20,24,26,28],belong:3,below:[0,2,9,22],best:[0,2,9,23],between:[0,4,8,13,19,23],bin:[0,8,22],binari:[0,4,5,8,22,26],binary_compon:[4,12,18],bind:28,blended_heat_map:14,blob:18,block:[2,23,24,26],bool:[23,24,26,28],both:[2,22,23],boto3:0,box:[3,8],breviti:[0,2,22],brows:[0,2,3,22],bucket:[0,7],build:[0,4,28],built:[2,18,22,28],builtin:[0,3,9,18,19,23],bundl:28,byo:22,cache_s:26,call:[0,8,18,19,20,22,23,24,26],callabl:13,callback:16,caller:[24,26],can:[0,2,3,9,13,15,18,19,20,22,23,24,26,28],cancel:[23,24,28],cannot:[4,26],canon:0,capabl:[4,28],captum:14,cat:2,categori:3,caus:14,caveat:28,certain:[23,26],cfg:[23,24,26,28],cfg_kei:28,chanc:19,chang:28,cheap:0,check:[2,15,24,26,28],checkout:22,checkpoint:[12,14,16,18],checkpoint_callback:16,checkpoint_path:[14,16],chose:2,cifar_torchvision_interpret:14,ckpt:18,classi:[13,16],classy_dataset:13,classy_vis:13,classydataset:13,classyvis:16,cli:[0,3,9,19,22],click:[10,12,13,14,15,16,18],client:[0,2,18],cloud:[13,18],cluster:[0,9,18,19,26,28],cluster_id:28,cmd:28,code:[0,10,11,12,13,14,15,16,17,18,28],cognit:2,collect:[3,22],com:[18,22],come:[6,19,25,27],comma:28,command:[2,26,28],commandlin:[2,28],common:[0,19,28],compar:4,comparison:28,compat:0,compil:18,complet:[0,23,28],complex:[20,22],complianc:23,compon:[4,5,7,8,11,13,20,23],component_from_app:[18,20],component_path:23,component_spec_from_app:20,compos:[10,13],composit:0,compris:9,concept:[19,22,28],config:[2,22,23],configur:[4,19,23,24,26,28],configure_optim:15,configvalu:28,confus:22,conjunct:26,consid:[2,24,26],consist:[3,28],constitut:[24,26],construct:[4,23,28],consum:[14,23],contain:[0,3,4,5,7,9,18,20,22,23,26,28],containerfactori:[18,20],containerop:[0,20],context:22,continu:[10,14,20],control:[0,4,24,26],conveni:[0,2,4,23],convert:[0,14,20],convert_to_rgb:14,coordin:[0,28],copi:[4,22,28],core:28,cost:28,could:28,count:26,count_nonzero:14,cp:8,cpu:[0,4,9,12,28],crash:[14,28],creat:[0,3,4,8,15,19,22,28],create_schedul:9,create_torch_dist_rol:4,cross_entropi:15,cs231n:10,current:[3,18,20],cursor:[23,24,26],custom:[18,19,22,24,26],custom_compon:9,data:[5,12,13,14,16,18,28],data_dir:[13,14,16],data_path:[12,13,14,16,18],dataclass:[0,4],dataload:[13,14],datapreproc:[4,10,14,18],datapreproc_app:18,datapreproc_comp:18,dataset:[10,11,15],datetim:[23,24,26],ddp:[3,5,23],deal:[2,18,28],deep:9,def:[0,2,9,10,12,13,14,15,16,18,22,28],default_factori:4,defin:[0,2,3,5,9,13,18,19,28],definit:[0,3,7,9,12,19,22,24,26,28],delimit:[22,28],delta:14,demand:28,departur:28,depend:[0,2,16,18,23,24,28],deploi:7,deploy:[20,26],describ:[9,21,23,24,26],describe_job:2,describeapprespons:[24,26],descript:[2,3,10,14,16,18,20,24,26],design:20,detail:2,determin:3,dev1:7,dev:28,develop:3,diagram:[0,3],dict:[3,4,5,7,23,24,26,28],dictat:28,did:22,differ:[0,2,3,13,26],dim:14,dir:[2,22,26],direct:23,directli:[2,18,23,24,26],directori:[3,22,26,28],dirnam:18,dirpath:16,disambigu:0,discourag:23,dist:5,distribut:[0,3,4,9,19,23,28],distributed_test:3,doc:[0,3,4,22],docker:[18,22,28],dockerfil:28,document:[22,23,24,26,28],doe:[0,2,22,23,24,26,28],doesn:[18,20],don:0,done:[9,22],doubt:2,down:2,download:[10,11,12,13,14,15,16,17,18,26],download_and_extract_arch:10,download_data:[13,14,16],download_fil:0,downstream:23,driver:28,dry:[23,24],dryrun:23,dryrun_info:[23,24,26,28],dsl:[0,20],due:14,durat:23,dure:[15,23,28],duti:28,dynam:0,e:[0,3,8,12,22,23,24,26,28],each:[2,3,4,5,18,28],easi:[0,13,18],easier:7,easiest:22,echo:[0,2,8,22],echo_ecd30f74:2,echo_torchx:[0,22],edu:10,effect:[4,23],effort:0,either:[2,3,18,24,26],elast:4,elastic_train:4,els:12,empti:[23,24,26],en:3,encod:[0,28],encount:28,encourag:[24,26],end:[23,24,26],endpoint:[7,9,18],enforc:26,ensur:[4,24],entir:[0,28],entri:[9,23],entry_point:9,entrypoint:[0,4,5,9,12,18,22,23,28],enumer:[9,14],env:[4,5,28],env_var:[26,28],environ:[16,28],ep_group_nam:9,ep_nam:9,epoch:16,equival:[20,24,26],error:28,especi:0,essenti:[0,2],even:[0,2],eventu:[24,26],everyth:[0,2],evict:28,exact:[0,2,24,26],exactli:0,exampl:[0,4,15,22,26,28],example_googl:3,examples_apps_jupyt:11,examples_apps_python:11,examples_imag:18,examples_pipelines_jupyt:17,examples_pipelines_python:17,except:[2,24,26,28],execut:[4,8,9,18],exhaust:[24,26],exist:[0,23,24,26,28],exit:[2,22,28],expect:[0,24,26],experi:23,experiment_nam:23,explanatori:2,export_inference_model:[15,16],expos:23,extens:4,extent:[2,23],extract:13,extractal:13,f:[0,10,13,14,15,16,22,24,26],factor:2,factori:[0,3,4,20,28],fail:[4,23,28],failur:28,fals:[13,23,24,26,28],familiar:[19,22],far:22,fashion:0,featur:[0,22,23],fetch:[23,24,26],fetcher:2,few:[0,2],field:[0,2,4,24,26,28],fig:14,figur:22,file:[0,2,3,7,8,9,12,13,15,18,22,23,24,26],file_lint:3,file_path:23,filesystem:[0,18],filter:[2,23],find:[0,2,19,22],finish:2,first:[14,18,19,22,23],fit:[0,2,16,19],fix:[0,9],fixm:[13,14,15],flexibl:0,flow:0,fname:10,folder:[10,15],follow:[0,3,4,9,22,23,24,26,28],foo:[0,2,4,12,20,22,23,28],foobar:[9,12,22,26,28],form:2,format:[3,23],forward:15,found:[2,22],framework:0,from:[0,2,3,4,7,9,10,12,13,14,15,16,18,20,22,23,24,26,28],fs:[0,10,13,15],fsspec:[0,7,10,13,14,15,16,18],full:[2,10,12,13,14,15,16,18,20],fulli:[18,24,26],function_nam:23,g:[0,3,8,12,22,23,24,26,28],galleri:[10,11,12,13,14,15,16,17,18],gang:0,gb:9,gener:[0,10,11,12,13,14,15,16,17,18,20,23],get:[2,13,19,22,23,24,26,28],get_app_spec:0,get_command:26,get_filesystem:0,get_fs_token_path:[10,13,15],get_log:2,get_named_resourc:28,get_runn:[0,3,23],get_schedul:24,get_spec:2,ghcr:7,github:18,give:28,given:[0,2,7,9,23,26,28],glue:8,go:23,good:[0,22],gpu:[0,4,9,12,28],gpu_x_1:[9,28],gpu_x_2:9,gpu_x_4:9,gpu_x_8:9,gradient:[14,18],granular:0,grayscal:13,group:[5,23],guarante:[23,24,26,28],gz:[10,13,28],h:[2,22],ha:[0,4,9,14,16,18,22,23,24,26,28],had:22,handl:[2,15,23],handler:15,happen:0,hardcod:0,hardwar:28,hash:4,have:[0,2,3,9,10,13,15,18,22,23,24,26,28],haven:22,heatmap:14,hello:[0,2,8,22],hello_world:28,help:[2,10,14,16,18,22,24,26,28],henc:28,here:[2,10,12,13,14,15,16,18],high:23,highli:23,hold:28,home:[0,23],homogen:0,honor:[23,24,26],hood:0,hook:4,host:[2,23,26,28],how:[0,2,18,22,23,28],howev:[0,24,28],hpo:[0,19],html:[3,7],http:[3,7,9,10,14,18,22,23],hyper:28,i:[14,22],id:[2,22,23,24,28],ideal:0,idempot:24,identifi:[2,22,24,28],ig:14,ig_:14,ignor:[2,24,26],illeg:28,illustr:3,imag:[0,2,4,5,7,10,12,14,15,18,20,28],image_fetch:[2,9],image_fil:10,image_typ:22,imagefold:13,imagenet:[10,11,13],imageprovid:26,img:14,img_root:[10,28],img_transform:13,implement:[9,18,22,23,24,26,28],implementor:[24,26],implicit:0,includ:[0,2,4,28],inclus:4,incur:[2,28],indefinit:23,indic:22,individu:23,infer:[7,15,16,18],info:[14,18,23],inform:[0,4,28],infra:0,infrastructur:[0,9],init:[4,14,16],initi:[13,16,28],initial_work:18,inlin:0,input:[0,14],input_md5:10,input_path:[0,10],input_url:0,instal:[22,28],instanc:[0,9,18,22,24,26,28],instead:[2,23],instruct:[22,23],integ:4,integr:[14,18],integratedgradi:14,intend:[0,23,28],interact:7,interest:22,interfac:[0,9,24],interpret:[11,12,15,18,26,28],interpret_app:18,interpret_comp:18,interrupt:23,introduc:0,invalid:[4,28],invers:2,invok:[4,22,28],io:[0,3,7],ipynb:[10,12,13,14,15,16,18],is_image_fil:10,is_termin:23,is_typ:28,isinst:28,islic:14,iter:[2,23,24,26],itertool:14,its:[0,2,22,23],itself:[22,28],j:22,jit:15,jit_path:15,jite:15,job:[0,3,5,19,22,23,24,26,28],job_id:2,jobdefinit:0,jobnam:0,join:[0,10,13,14,15,18],json:28,judgment:2,jupyt:[10,11,12,13,14,15,16,17,18],just:[15,18,19,22],k1:22,k2:22,k:[23,24,26],keep:2,kei:[0,28],kfp:[0,18,21],kfp_pipelin:18,kill:[24,26],know:[18,28],known:[2,8],kubeflow:[0,19,20],kubernet:[0,9,18,19],kwarg:[4,9,20],l1:15,l:28,label:14,lambda:13,languag:19,larg:2,last:[18,23],later:13,latest:[3,4,12,20,22,28],launch:[0,2,4,18,20,22,28],launch_kwarg:4,layer:0,layout:5,lead:23,learn:[0,2,9,19,22],least:28,left:23,len:[10,13,15],let:[2,18,22],level:[0,23],leverag:18,librari:[0,3,4,13,16],lightn:[0,13,16],lightning_classy_vis:[12,15,18],lightning_log:16,lightningdatamodul:13,lightningmodul:15,like:[0,18,24,26],limit:26,line:[2,23,24,26],linear:15,lingo:0,list:[0,3,4,10,14,16,22,23,26,28],live:[24,26],ll:[0,2,18,22],load:[0,12,13,14,16,18],load_component_from_:20,load_from_checkpoint:[14,16],load_path:[12,14,16,18],loader:13,local:[2,3,9,13,18,22,23,26,28],local_runopt:23,local_schedul:26,localdirectoryimageprovid:26,localhost:19,localhostschedul:26,localschedul:26,locat:3,log:[12,16,18,23,24,26],log_dir:[2,22],log_it:[23,24,26],log_lin:23,log_pat:12,log_path:[12,16,18],logger:16,logic:[0,2,22,23],look:[19,22,23],loss:15,lost:[24,26],low:23,lr:15,m:[4,28],macro:22,made:28,mai:[0,2,9,23,24,26],main:[0,5,10,14,16,28],mainstream:19,maintain:0,make:[0,7,9,16,18,22,28],manag:[7,18,26],management_api:[7,18],mani:[0,4,5,23],manner:9,manual:[2,24,26],map:[0,4,23,28],mappingproxi:4,mar:[15,18],mar_path:15,master:18,matches_regex:23,materi:8,matter:22,matur:0,max:[4,28],max_epoch:16,max_restart:4,max_retri:[4,28],maximum:4,mb:28,md5:10,md:18,mean:[0,2,5,14,22,23],meaning:8,meant:[4,8],mechan:28,membership:28,memmb:[0,4,9,12,28],messag:[2,8,22,28],metadata:[4,28],method:[0,3,4,14,20,23,24,26,28],metric:23,mini:0,minut:[10,12,13,14,15,16,18],miss:28,ml:[0,19,22,28],mode:[10,13,23],model:[7,11,12,16,18,26],model_accuraci:23,model_jit:15,model_nam:[15,18],model_path:[7,18],modelcheckpoint:16,modifi:[18,22,28],modul:[0,2,3,9,13,14,16,20,23,28],monitor:16,more:[0,4,14,18,20,22,24,26,28],most:[0,2,9,18,22,28],move:28,msg:[2,8,22,28],much:23,multi:5,multipl:[0,2,4,24,28],must:[3,4,10,13,14,15,20,23,26,28],mutat:28,my:9,my_app:22,my_compon:[9,23],my_imag:28,my_modul:[9,28],my_train:28,my_train_script:4,my_trainer_spec:2,myschedul:9,n:[2,22],name:[0,2,4,5,7,12,15,16,18,20,22,23,26,28],named_resourc:[9,12,28],namespac:[10,14,16,18],napoleon:3,ndarrai:14,necessari:28,need:[0,2,13,18,19,22,23,24,26,28],neither:28,net:15,never:[2,13],never_set:28,next:18,nn:15,nnode:[0,4,5],node:[0,2,4,5,20,23,28],non:[0,28],none:[2,4,5,7,10,12,13,14,15,16,18,23,24,26,28],nor:28,normal:10,not_exist:26,notabl:20,note:[2,4,23,26,28],notebook:[10,11,12,13,14,15,16,17,18],noth:23,notic:22,notimplementederror:[24,26],now:[0,2,18,22],np:14,nproc_per_nod:[4,5],null_resourc:4,num_replica:[0,4,22,28],num_restart:28,num_sampl:13,number:[4,5,16,22,28],numer:2,numpi:14,obj:28,object:[0,4,7,13,23,24,28],obtain:2,occur:28,omit:[0,2,22],onc:[9,18,19],one:[0,2,3,5,18,19,22,23,28],onli:[0,2,3,9,16,18,20,23,24,26,28],onto:[0,2],open:[0,10,13,14],oper:8,opt:28,optim:15,option:[2,3,4,5,7,12,13,18,22,23,24,26,28],order:[23,28],org:[7,9,23],organ:[3,9],origin:28,os:[10,13,14,15,18],oss:[0,16],other:[0,2,4,13,18,23,24,26],otherwis:[14,23,24,26,28],our:[3,13,14,16,18,19,22],ourselv:22,out:[2,3,8,10,22,23,28],out_path:[14,15],output:[10,12,14,16,18,23,24,26],output_path:[10,12,14,16,18],over:[0,4,23,24,26],overhead:2,overlai:[4,14,28],overlap:22,overrid:23,overwrit:[23,28],own:[0,2,18],p3:9,pack:10,packag:[9,18,22,23],package_path:18,page:3,parallel:[5,18,22,28],param1:3,param2:3,param:[7,18],paramet:[0,2,4,5,7,8,15,22,23,24,26,28],parameter:0,parent:23,pars:[23,28],parse_accuraci:23,parse_arg:[10,14,16,18],parser:[10,14,16,18],part:[20,28],partial:23,particular:28,particularli:9,partit:28,pass:[0,2,13,23,28],past:[22,23],path:[0,2,7,10,12,13,14,15,16,18,22,23,26,28],pattern:[2,23],pend:28,per:5,perform:28,perman:0,persist:23,pick:22,pil:10,pip:22,pipelin:[2,22],pipeline_func:18,pl:[13,15,16],place:[2,13,14,16,18],plan:22,platform:[0,19,22],pleas:[2,24,28],plug:0,plugin:9,png:14,point:[0,4,9,22,23,24,26],pointer:0,polici:[4,26,28],popenrequest:26,popul:28,port:[4,28],port_map:[4,20,28],portabl:0,possibl:[0,9,23,24,26,28],practic:22,pre:22,pre_proc:28,predefin:[0,9],preemptibl:28,preemption:28,prefer:26,prefix:[2,22],preprocess:14,preprocessor:18,present:28,pretrain:12,pretti:[3,23],previou:[18,22,28],pri:23,primit:[3,28],primitive_kei:3,primitive_valu:3,print:[2,10,13,14,15,16,23,28],prior:[24,26],prioriti:[22,28],proceed:22,process:[4,5,14,23,24,26],prod:28,produc:[18,20,24,26],product:26,programmat:0,progress:[24,26,28],project:9,proper:0,properli:2,properti:[3,26],protip:0,protocol:20,provid:[0,2,4,7,18,20,22,23,28],proxi:4,ps:28,pt:[7,15],pull:[2,26,28],pure:0,purg:[23,24,26],purpos:[0,3,14,18],put:[2,10,15],py:[0,2,3,4,9,10,12,13,14,15,16,18,22,23,28],pyre:[13,15],python3:4,python:[0,2,4,9,10,11,12,13,14,15,16,17,18,22,23],pytorch:[0,4,7,13,16,18,19,28],pytorch_lightn:[0,13,15,16],qualifi:[24,26],quick:22,quickli:[2,20],quickstart:[4,19],r:13,rais:[23,24,26],ram:28,rang:[24,26],rank:[2,23],rather:[0,2,22,23,24,26],raw:23,rb:0,re:[18,23,28],reach:[24,26,28],read:[13,22,24,26,28],readi:[0,8],readm:18,readthedoc:3,real:[22,26],reason:23,rebuild:18,recent:28,recommend:[0,23],reconstruct:23,record:[23,24,26],recreat:2,refer:[0,2,3,9,22,24,26,28],referenc:22,regard:24,regex:[2,23,24,26],regist:[5,7,23,28],registr:28,regress:15,regular:22,rel:[22,23],relat:19,relev:[9,26],reli:2,relu:15,remot:[10,13,18,22],remote_path:[13,15],remov:23,repetit:0,replac:28,replica:[2,4,5,20,22,23,24,26,28],replica_id:[2,22,28],replicast:28,report:23,repr:4,repres:[0,3,19,20,23,28],represent:[0,9],request:[4,23,24,28],requir:[0,5,10,14,16,18,22,26,28],resolut:23,resolv:[23,28],resourc:[0,4,5,12,20,26],respons:[4,18,28],rest:0,restart:[4,28],result:[2,4,14,18],retain:2,retent:[2,24,26],retri:[4,26,28],retriev:[23,28],retry_polici:[4,28],retrypolici:[4,28],return_convergence_delta:14,reupload:10,reus:13,rewritten:0,role:[0,2,4,5,9,20,22,23,24,26],role_nam:[2,23,24,26],rolestatu:28,root:[7,10,28],root_dir:9,rpath:[10,13,15],run:[0,3,4,5,9,10,12,13,14,15,16,18,19,20,23,24,26],run_as_us:28,run_config:2,run_config_opt:28,run_from_path:[3,23],run_opt:[2,23,24,26],runconfig:[23,24,26,28],runner:[2,3,19,20,22],runopt:[2,22,23,24,26,28],runtim:[16,20,28],s3:[0,7,18,28],s3_input_path:0,s:[2,3,4,9,13,15,16,18,19,22,23,24,26,28],safe:24,same:[2,15,18,24,26,28],save:[10,12,14,15,16,28],save_dir:16,save_last:16,savefig:14,scale:4,sched_nam:[2,9,22],schedul:[3,4,18,20,23,26,28],scheduler_arg:[2,9,22],scheduler_backend:23,scheduler_nam:2,scheduler_param:[23,24],scratch:0,script:[4,5,10,12,13,14,15,16,18],script_arg:[0,4,5],sdk:[3,19],second:[10,12,13,14,15,16,18],section:[0,5,22,28],see:[0,2,4,7,9,14,18,22,23],seek:[24,26],seen:2,select:28,self:[2,13,15,24,26],semant:[0,23,24],separ:18,seri:14,serial:[15,28],serv:[18,19],serve_app:18,serve_comp:18,server:[2,23,28],servic:[18,23,24],session:[0,23,26,28],session_nam:[9,24,26],set:[2,4,5,9,18,22,26,28],set_tti:18,setup:[2,9,13,14,16,18,22],setuptool:9,sever:19,shirt:9,should:[0,2,3,9,18,23,24,26,28],should_tail:[23,24,26],show:[2,22],show_colorbar:14,shown:[2,22],shuffl:13,side:2,sign:14,signatur:9,similar:[0,3,28],simpl:[0,2,10,15,18,22,28],simple_exampl:2,simpli:[0,2,3,5,8,22],sinc:[0,2,4,20,22,23,24,26,28],singl:[0,4,10,13,15,20,28],single_gpu:0,size:[9,14,15,16,28],skip:[0,14],sleep:23,slurm:19,so:[2,13,18,19,20,22,24,26],softwar:28,some:[0,2,10,18,24,26],someth:[18,20],sometim:14,soon:[6,19,23,25,27],sourc:[4,5,7,8,10,11,12,13,14,15,16,17,18,20,23,24,26,28],sparingli:[23,26],spec:[0,2,3,4,5,7,8,9,12,18,19,20,22,23,24,26],specif:[0,2,9,20,22,23,24,26,28],specifi:[0,2,9,13,18,22,23,24,26,28],sphinx:[10,11,12,13,14,15,16,17,18],sphinxcontrib:3,split:0,splitext:10,spot:[2,28],squeez:14,stack:14,stage:[0,8,13,19],standalon:[0,15,19,23],standard:[16,18,19],stanford:10,start:[19,22,23,28],stat:14,state:[23,24,26,28],statu:23,status:28,stderr:[2,24,26],stdout:[2,8,22,24,26],step:[3,18,28],still:2,stock:13,stop:[23,28],stopiter:[24,26],storag:[0,2,13,18],store:[0,18],str:[0,2,3,4,5,7,8,9,10,12,13,14,15,16,18,20,22,23,24,26,28],straightforward:3,string:[2,9,22,28],struct:[0,19],structur:3,structured_error_msg:28,stuck:[24,26],style:[4,5],sub:[0,23],subcommand:[2,22],submit:[0,2,23,24,26,28],submit_dryrun:[24,26,28],subprocess:15,substitut:28,succeed:28,successfulli:[23,26,28],support:[0,3,4,9,20,22,23,24,26,28],sure:18,surviv:28,svc:18,sy:[10,14,16,18],system:0,t:[0,9,15,18,20,22],tail:[2,24,26],take:[0,2,5,18,19,20,22,24,26],tar:[10,13,28],tar_path:[10,13],tarfil:[10,13],target:[0,14],tax:2,tcp_store:28,team:9,teardown:13,technic:2,tempfil:[10,14,16],templat:28,templet:[0,3],temporarydirectori:[10,14,16],tensor:[14,15],tensorboard:[12,16,18,28],tensorboardlogg:16,term:23,termin:[23,24,26,28],test:[3,9,13,14,22],test_app:9,test_d:13,test_dataload:[13,14],test_nam:5,text:28,th:[23,24,26],than:[0,22,23,24,26,28],thei:[0,5,9,24,26,28],them:[0,2,3,14,18,20,28],thi:[0,2,3,5,9,10,12,13,14,15,16,18,20,22,23,24,26,28],thing:[2,22],think:[0,3],those:[0,20,24],thread:[24,28],three:2,through:[0,2,9,22,28],thu:28,time:[0,2,4,10,12,13,14,15,16,18,22,24,26],timeout:[24,26],tini:[10,11,13],tiny_image_net:[15,18],tinyimagenetdatamodul:[13,14,16],tinyimagenetdataset:13,tinyimagenetmodel:[14,15,16],titl:14,tmp:[0,2,9,16,18,22,26],tmpdir:[10,13,14,15,16],todo:21,togeth:2,toi:[14,15],tool:[0,2,7,28],top:0,topilimag:10,topolog:[0,5],torch:[0,4,9,13,14,15,28],torch_dist_rol:[9,28],torchelast:4,torchscript:15,torchserv:[7,15,18],torchvis:[10,13],torchx:[0,2,4,5,7,8,9,10,12,14,16,18,22,26],torchx_:2,torchx_imag:18,torchx_kiuk:2,total:[10,12,13,14,15,16,18,23],totensor:[10,13],touch:[0,2,8,22],tp:28,tqdm:10,track:18,train:[9,12,13,14,16,18],train_app:28,train_d:13,train_dataload:13,train_loss:16,trainer:[0,2,4,14,18,20,23,28],trainer_app:18,trainer_comp:18,training_step:15,transform:[10,13,18,20],tri:[0,22],trivial:[24,26,28],tupl:[15,20],tutori:[8,14],twice:[24,26],two:[0,22],txt:28,type:[0,2,3,4,5,7,9,10,12,13,14,15,16,18,22,24,28],type_:28,typic:[0,18,26,28],uber:28,ubuntu:22,ui:18,ui_url:28,uml:0,unblock:23,undefin:[4,24,26],under:[0,2],underli:[24,26],understand:[20,22],understood:[0,2],unextract:13,union:28,uniqu:[24,28],unit:3,unknownappexcept:23,unlik:[0,22],unsubmit:28,unsuccess:28,unsuccessfulli:28,until:[0,23,24,26],untouch:28,up:[0,4,26,28],upload:[10,15,18],upon:[23,28],upstream:0,url:[2,7,28],us:[0,2,3,4,7,8,9,12,13,14,15,16,18,19,20,22,23,24,26,28],usag:[2,21,22,23,28],user:[0,2,4,9,23,26,28],util:[0,2,10,13,19,22],v1:22,v2:22,val:13,val_d:13,val_dataload:13,valid:[3,22,23,28],valu:[22,28],valueerror:[23,26],vari:[0,18],variabl:[4,5,28],varieti:0,variou:0,vcpu:9,ve:22,veri:[2,15],version:[4,15,16,18,22],via:[3,4,9,10,13,18,23,24,26,28],view:15,vision:[13,16],visual:14,visualize_image_attr:14,viz:14,vs:28,w:10,wa:[2,23,24,28],wai:[0,9,22,28],wait:[23,24],wait_interv:23,walk:10,want:[0,9,22,28],wb:14,we:[0,3,13,18,22],weight:14,well:[2,3,8,20],were:[0,2,23],what:[0,2,3,18,22,23,24,26,28],whatev:0,when:[0,2,4,9,20,23,24,26,28],where:[20,22],whether:2,which:[0,2,4,13,16,20,22,24,26,28],who:28,why:20,within:[5,18,23,24,28],without:[2,23,28],work:[26,28],worker:[0,4,5,18],workflow:[0,2,8,19],workspac:23,world:[0,8,22],would:[0,22,23,24],wrapper:2,write:[0,2,3,13,19,28],written:0,x:[13,15],y:15,yaml:[0,18,20],yet:28,you:[0,2,3,9,18,19,20,22],your:[0,2,7,9,15,18,19,23,28],yourself:22,zero:[0,14,28],zero_grad:14,zip:[10,11,17,18]},titles:["Basics","Coming Soon","CLI","torchx.components","Base","Distributed","HPO","Serve","Utils","Configuring","Data Preprocessing App Example","Application Examples","Trainer Component Example","Trainer Datasets Example","Model Interpretability App Example","Tiny ImageNet Model","Trainer App Example","Pipelines Examples","KubeFlow Pipelines Example","TorchX","torchx.pipelines","Kubeflow Pipelines","Quickstart","torchx.runner","torchx.schedulers","Kubernetes","Localhost","Slurm","torchx.specs"],titleterms:{On:22,With:19,adapt:[0,19],an:2,api:19,app:[2,10,14,16],appdef:[0,28],applic:11,argument:18,base:4,basic:0,beta:19,builtin:[2,22],classi:11,cli:2,come:1,compon:[0,2,3,9,12,18,19,22],concept:0,config:28,configur:9,creat:18,custom:9,data:[10,11],dataset:13,defin:22,definit:18,describ:2,distribut:5,document:19,exampl:[10,11,12,13,14,16,17,18,19],experiment:19,featur:19,hpo:6,imag:[22,26],imagenet:15,input:18,interpret:14,job:2,kfp:20,kubeflow:[17,18,21],kubernet:25,librari:19,lightn:11,list:2,localhost:26,log:2,macro:28,model:[14,15],name:9,next:22,other:22,own:22,pipelin:[0,17,18,19,20,21],preprocess:[10,11],project:0,provid:26,queri:2,quickstart:22,regist:9,resourc:[9,28],role:28,run:[2,22,28],runner:[0,23],runtim:0,schedul:[0,2,9,19,22,24],serv:7,slurm:27,soon:1,spec:28,statu:[2,28],step:22,structur:0,support:2,tini:15,torchx:[3,19,20,23,24,28],trainer:[11,12,13,16],usag:19,util:8,view:2,vision:11,work:19,your:22}})