var OnlyProjectView = {
    template: 
    `
        <div>
            <!--載入背景-->
            <div id="MainBackground"></div>
            <div id="ProjectBackground"></div>
            <div id="ProjectMainViewer"></div>

            <!--載入返回鍵-->
            <div id="ProjectViewUpBtn">
                <a href="javascript:void(0);" @click="ChangeBeforePage()">
                    <img height="5%" width="5%" src="./Source/IMG/ProjectViewUpBTN.svg" />
                </a>
            </div>

            <div id="ProjectViewLeftBtn">
                <a href="javascript:void(0);" @click="ChangeBeforeProject()">
                    <img height="25%" width="25%" src="./Source/IMG/ProjectViewLeftBTN.svg" />
                </a>
            </div>
            
            <div id="ProjectViewRightBtn">
                <a href="javascript:void(0);" @click="ChangeNextProject()">
                    <img height="25%" width="25%" src="./Source/IMG/ProjectViewRightBTN.svg" />
                </a>
            </div>

            <div id="ProjectMetaBlock">
                <div class="container"> 
                    <p>{{ProjectMeta}}</p>
                </div>
            </div>

            <div id="ProjectMainBlock">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <!--div><img height="100%" width="100%" v-bind:src="ImagePhotoPath" /></div-->
                        </div>
                    </div>
                </div>
            </div>

            <div id="ImagePhotoBlock">
                <div class="container">
                    <div><img height="75%" width="75%" v-bind:src="ImagePhotoPath" /></div>
                </div>
            </div>

            <div id="AboutBlock" class="container">
                <div class="container">
                    <p>{{About}}</p>
                </div>
            </div>

            <!--置底-->
            <div id="ProjectViewDownBtn">
                <a href="javascript:void(0);" @click="ChangeMediaView()">
                    <img height="5%" width="5%" src="./Source/IMG/ProjectViewDownBTN.svg" />
                </a>
            </div>
           
            <div id="WaveGroup">
                <div id="Wave1">
                    <img width="100%" src="./Source/IMG/Wave1.svg" />
                </div>
                <div id="Wave2">
                    <img width="100%" src="./Source/IMG/Wave2.svg" />
                </div>
                <div id="Wave3">
                    <img width="100%" src="./Source/IMG/Wave3.svg" />
                </div>
                <div id="Wave4">
                    <img width="100%" src="./Source/IMG/Wave4.svg" />
                </div>
                <div id="Wave5"></div>
            </div>

            <div id="MediaViewBlock">
                <svg width="0" height="0" v-bind:viewBox="GetViewBoxData">
                    <defs>
                        <mask id="my-svg-mask">
                            <image xlink:href="./Source/IMG/ProjectViewMainViewer.svg" width="100%" height="100%"/>
                        </mask>
                    </defs>
                </svg>
                
                <div id="MaskObject">
                    <div v-if="TestMediaIsVideo">
                        <iframe v-bind:height="VideoHeight" v-bind:width="VideoWidth" v-bind:src="ProjectMoviePath" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div v-else>
                        <img width="100%" height="100%" v-bind:src="ProjectPhotoPath">
                    </div>
                </div>
            </div>

            <div id="MediaViewUpBtn">
                <a href="javascript:void(0);" @click="CloseMediaView()">
                    <img height="5%" width="5%" src="./Source/IMG/ProjectViewUpBTN.svg" />
                </a>
            </div>
            
            <div id="CtrlCroupView" class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="CloseMaskViewBtn">
                            <a v-if="MaskIsView" href="javascript:void(0);" @click="CtrlMaskObject()">
                                <h5><img height="20%" width="20%" src="./Source/IMG/MaskUnSetBTN.svg" /></h5>
                            </a>
                            <a v-else href="javascript:void(0);" @click="CtrlMaskObject()">
                                <h5><img height="20%" width="20%" src="./Source/IMG/MaskSetBTN.svg" /></h5>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="MediaViewLeftBtn">
                            <a href="javascript:void(0);" @click="ChangeBeforeMedia()">
                                <h5><img height="20%" width="20%" src="./Source/IMG/MaskLeftBTN.svg" /></h5>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="MediaViewRightBtn">
                            <a href="javascript:void(0);" @click="ChangeNextMedia()">
                                <h5><img height="20%" width="20%" src="./Source/IMG/MaskRightBTN.svg" /></h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            LockAnimateLR       : true                            , //是否檢視作品說明界面
            MaskIsView          : false                           , //遮罩顯示控制
            Link                : StudentGroups.data.FaceBookLink , //載入FB連結
            NowSelectGroupID    : 0                               , //目前選擇的作品ID(Array索引值)
            MediaIndexSum       : 1                               , //計算影音資料總數
            NowMediaIndex       : 0                               , //目前選擇的影音資料
            VideoHeight         : window.outerHeight ,
            VideoWidth          :window.outerWidth ,
        }
    },
    async mounted() {
        try{
            /* 用同位異步方式與await等待app元件優先載入完成，並讀取應該讀取的索引值 */
            this.NowSelectGroupID = await(app.NowSelectID);
        } catch (error) {
            /* 當路由直接指向此頁時，無法獲取有效的ID值定給予初始值索引編號0 */
            this.NowSelectGroupID = 0;
        };

        document.getElementsByTagName("div").MediaViewBlock.style.display    = "none";
        document.getElementsByTagName("div").MediaViewUpBtn.style.display    = "none";
        document.getElementsByTagName("div").CtrlCroupView.style.display     = "none";

        /* 執行載入顯示元件動畫 */
        document.getElementsByTagName("div").ProjectBackground.className    = "animated fadeInDown   delay-500ms";
        document.getElementsByTagName("div").ProjectViewUpBtn.className     = "animated fadeInDown   delay-1s";
        document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated fadeInRight  delay-1s";
        document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated fadeInLeft   delay-1s";
        document.getElementsByTagName("div").ProjectMetaBlock.className     = "animated slideInLeft  delay-500ms";
        document.getElementsByTagName("div").ProjectMainBlock.className     = "animated fadeInUp     delay-500ms";
        document.getElementsByTagName("div").ImagePhotoBlock.className      = "animated fadeInDown   delay-500ms";
        document.getElementsByTagName("div").AboutBlock.className           = "animated slideInRight delay-500ms";
        document.getElementsByTagName("div").ProjectViewDownBtn.className   = "animated fadeInUp     delay-1s";

        setTimeout(() => {
            this.LockAnimateLR = false;
        },1500);

        /* 固定每4s更新搖動一次 */
        setInterval(() => {
            if(!this.LockAnimateLR){
                /* 清除暫存與重置動畫 */
                try{
                    document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "";
                    document.getElementsByTagName("div").ProjectViewRightBtn.className  = "";
                }catch(err){
                    //Not Doing
                }

                setTimeout(() => {
                    document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated heartBeat delay-0s";
                    document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated heartBeat delay-0s";
                },500);
            }
            
        },1000);
    },
    methods: {
        /* 切換到上一頁(手機版作品專欄) */
        ChangeBeforePage:function() {
            this.LockAnimateLR = true;
            
            setTimeout(() => {
                /* 執行收起元件動畫 */
                document.getElementsByTagName("div").ProjectBackground.className    = "animated fadeOutUp     delay-500ms";
                document.getElementsByTagName("div").ProjectViewUpBtn.className     = "animated fadeOutUp     delay-0s";
                document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated fadeOutLeft   delay-0s";
                document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated fadeOutRight  delay-0s";
                document.getElementsByTagName("div").ProjectMetaBlock.className     = "animated fadeOutLeft   delay-500ms";
                document.getElementsByTagName("div").ProjectMainBlock.className     = "animated fadeOutDown   delay-500ms";
                document.getElementsByTagName("div").ImagePhotoBlock.className      = "animated fadeOutUp     delay-500ms";
                document.getElementsByTagName("div").AboutBlock.className           = "animated fadeOutRight  delay-500ms";
                document.getElementsByTagName("div").ProjectViewDownBtn.className   = "animated fadeOutDown   delay-0s";
            },1000);

            app.DelayRouteBack(2000);
        },
        ChangeBeforeProject:function() {
            StudentGroups.event.GetBeforeGroup();
            this.NowSelectGroupID = StudentGroups.event.GetNowSelectID();
        },
        ChangeNextProject:function() {
            StudentGroups.event.GetNextGroup();
            this.NowSelectGroupID = StudentGroups.event.GetNowSelectID();
        },
        ChangeMediaView:function(){
            this.MediaIndexSum      = StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath.length + StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectPhotoPath.length;
            this.NowMediaIndex      = 0;
            this.LockAnimateLR      = true;

            document.getElementsByTagName("div").ProjectBackground.className    = "animated bounceIn      delay-0s";

            document.getElementsByTagName("div").ProjectViewUpBtn.className     = "animated bounceOut     delay-1s";
            document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated bounceOut     delay-1s";
            document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated bounceOut     delay-1s";
            document.getElementsByTagName("div").ProjectViewDownBtn.className   = "animated bounceOut     delay-1s";
            
            setTimeout(() => {
                this.SetWaveAnimate(true);

                document.getElementsByTagName("div").ProjectViewUpBtn.style.display     = "none";
                document.getElementsByTagName("div").ProjectViewLeftBtn.style.display   = "none";
                document.getElementsByTagName("div").ProjectViewRightBtn.style.display  = "none";
                document.getElementsByTagName("div").ProjectViewDownBtn.style.display   = "none";

                document.getElementsByTagName("div").ProjectBackground.className    = "";
                document.getElementsByTagName("div").ProjectViewUpBtn.className     = "";
                document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "";
                document.getElementsByTagName("div").ProjectViewRightBtn.className  = "";
                document.getElementsByTagName("div").ProjectViewDownBtn.className   = "";

            },2000);

            setTimeout(() => {
                document.getElementsByTagName("div").MediaViewBlock.style.display       = "";
                document.getElementsByTagName("div").MediaViewUpBtn.style.display       = "";
                document.getElementsByTagName("div").CtrlCroupView.style.display        = "";

                document.getElementsByTagName("div").MediaViewBlock.className      = "animated slideInDown delay-0s";
                document.getElementsByTagName("div").MediaViewUpBtn.className      = "animated fadeInDown  delay-1s";
                document.getElementsByTagName("div").CtrlCroupView.className       = "animated fadeInUp    delay-1s";

                document.getElementsByTagName("div").ProjectBackground.style.filter = "blur(5px)";
                document.getElementsByTagName("div").ProjectMetaBlock.style.filter  = "blur(5px)";
                document.getElementsByTagName("div").ImagePhotoBlock.style.filter   = "blur(5px)";
                document.getElementsByTagName("div").AboutBlock.style.filter        = "blur(5px)";
            },8000);
        },

        CloseMediaView:function(){
            document.getElementsByTagName("div").MediaViewBlock.className       = "animated slideOutUp  delay-0s";
            document.getElementsByTagName("div").MediaViewUpBtn.className       = "animated fadeOutUp   delay-0s";
            document.getElementsByTagName("div").CtrlCroupView.className        = "animated fadeOutDown delay-0s";

            setTimeout(() => {
                document.getElementsByTagName("div").MediaViewBlock.style.display       = "none";
                document.getElementsByTagName("div").MediaViewUpBtn.style.display       = "none";
                document.getElementsByTagName("div").CtrlCroupView.style.display        = "none";
                
                this.SetWaveAnimate(false);

                document.getElementsByTagName("div").ProjectBackground.style.filter = "";
                document.getElementsByTagName("div").ProjectMetaBlock.style.filter  = "";
                document.getElementsByTagName("div").ImagePhotoBlock.style.filter   = "";
                document.getElementsByTagName("div").AboutBlock.style.filter        = "";
                document.getElementsByTagName("div").ProjectBackground.className    = "";

            },1000);


            setTimeout(() => {
                document.getElementsByTagName("div").ProjectViewUpBtn.style.display     = "";
                document.getElementsByTagName("div").ProjectViewLeftBtn.style.display   = "";
                document.getElementsByTagName("div").ProjectViewRightBtn.style.display  = "";
                document.getElementsByTagName("div").ProjectViewDownBtn.style.display   = "";

                document.getElementsByTagName("div").ProjectBackground.className    = "animated bounceIn     delay-0s";
                document.getElementsByTagName("div").ProjectViewUpBtn.className     = "animated bounceIn     delay-1s";
                document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated bounceIn     delay-1s";
                document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated bounceIn     delay-1s";
                document.getElementsByTagName("div").ProjectViewDownBtn.className   = "animated bounceIn     delay-1s";

                this.LockAnimateLR = false;
            },8000);

        },
        ChangeBeforeMedia:function(){            
            if(this.NowMediaIndex == 0){
                this.NowMediaIndex = this.MediaIndexSum-1;
            }else{
                this.NowMediaIndex -=1;
            }            
        },
        ChangeNextMedia:function(){
            if(this.NowMediaIndex == this.MediaIndexSum-1){
                this.NowMediaIndex = 0;
            }else{
                this.NowMediaIndex +=1;
            }
        },
        CtrlMaskObject:function(){
            if(this.MaskIsView){
                document.getElementsByTagName("div").MaskObject.className = "";
            }else{
                document.getElementsByTagName("div").MaskObject.className = "mask-image";
            }

            this.MaskIsView = !this.MaskIsView;
        },
        SetWaveAnimate:function(IsUpState){
            if(IsUpState){
                document.getElementsByTagName("div").Wave1.className = "Wave1Up";
                document.getElementsByTagName("div").Wave2.className = "Wave2Up";
                document.getElementsByTagName("div").Wave3.className = "Wave3Up";
                document.getElementsByTagName("div").Wave4.className = "Wave4Up";
                document.getElementsByTagName("div").Wave5.className = "Wave5Up";

                document.getElementsByTagName("div").Wave1.style.top = "100%";
                document.getElementsByTagName("div").Wave2.style.top = "120%";
                document.getElementsByTagName("div").Wave3.style.top = "140%";
                document.getElementsByTagName("div").Wave4.style.top = "160%";
                document.getElementsByTagName("div").Wave5.style.top = "180%";
            }else{
                document.getElementsByTagName("div").Wave1.className = "Wave1Down";
                document.getElementsByTagName("div").Wave2.className = "Wave2Down";
                document.getElementsByTagName("div").Wave3.className = "Wave3Down";
                document.getElementsByTagName("div").Wave4.className = "Wave4Down";
                document.getElementsByTagName("div").Wave5.className = "Wave5Down";
                
                document.getElementsByTagName("div").Wave1.style.top = "-125%";
                document.getElementsByTagName("div").Wave2.style.top = "-105%";
                document.getElementsByTagName("div").Wave3.style.top = "-85%";
                document.getElementsByTagName("div").Wave4.style.top = "-65%";
                document.getElementsByTagName("div").Wave5.style.top = "-45%";
            }
        }
    },
    computed: {
        /* 載入形象照路徑 */
        ImagePhotoPath:function() {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ImagePhotoPath;
        },
        /*作品名稱 */
        Name:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].Name;
        },
        /*作品種類 */
        Type:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].Type;
        },
        /* 載入自介 */
        About:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].About;
        },
        /* 載入作品介紹 */
        ProjectMeta:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMeta;
        },
        /* 載入作品影片路徑 */
        ProjectMoviePath:function() {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath[this.NowMediaIndex];
        },
        /* 載入作品照片路徑 */
        ProjectPhotoPath:function() {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectPhotoPath[this.NowMediaIndex-StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath.length];
        },
        /* 測試載入顯示的作品路徑 */
        TestMediaIsVideo:function(){
            return this.NowMediaIndex < StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath.length;
        },
        /* 建立同視窗大小的面板 */
        GetViewBoxData:function(){
            return "0 0 " + screen.availWidth +" " +screen.availHeight;
        },
    },
};