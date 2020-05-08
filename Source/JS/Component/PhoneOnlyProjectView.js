const PhoneOnlyProjectView = {
    template: 
    `
        <div>
            <div id="PhoneProjectViewBackground"></div>
                
            <div id="PhoneProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="PhoneProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="ProjecTitleTitleGroups" class="container-fluid">
                <div class="row">
                    <div class="col">
                        <a v-bind:href="WhyCall" target="Web_WhyCall">
                            <div id="ProjecTitleTitleButton2">
                                <img height="100%" width="100%" src="./Source/IMG/button-2.png" />
                            </div>
                        </a>
                    </div>
                    <div class="col">
                        <br>
                    </div>
                </div>
            </div>

            <div id="PhoneBackBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/PhoneBack.png" />
                </a>
            </div>

            <div id="PhoneCtlMask" @click="CloseCtlMask()">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <h2><br>左右滑動切換作品</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img height="50%" width="50%" src="./Source/IMG/LeftBTN.svg" />
                        </div>
                        <div class="col">
                            <img height="50%" width="50%" src="./Source/IMG/RightBTN.svg" />
                        </div>
                    </div>
                </div>
            </div>          

            <div id="PhoneCtlMaskBlock"></div>

            <div id="PhoneProjectViewProjectImageBackgroundBlock"></div>

            <div id="PhoneProjectViewProjectImageBlock" @click="ChangeImageView()">
                <img width="100%" height="100%" v-bind:src="ImagePhotoPath" />
            </div>

            <div id="PhoneProjectViewMetaTextBlock">
                <p>{{ProjectMeta}}</p>
            </div>
            

            <div id="PhoneProjectViewBottomBTNMaskBlock">
                <div @click="SetProjectAboutView(true)"  class="PhoneProjectBTNMask"><br></div>
                <div @click="SetProjectMumberView(true)" class="PhoneProjectBTNMask"><br></div>
                <div class="PhoneFaceBookBTNMask"><a v-bind:href="Link" target="Web_FB"><img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewFacebookIcon.svg" /></a></div>
            </div>

            <div id="PhoneProjectViewBottomBTNBlock">
                <div class="PhoneProjectBTN"><a>作品介紹</a></div>
                <div class="PhoneProjectBTN"><a>製作成員</a></div>
                <div id="PhoneProjectViewFaceBookBTN">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewFacebookIcon.svg" />
                </div>
            </div>

            <div v-if="IsProjectAboutView || IsProjectMumberView" class="PhoneProjectViewMask"></div>
                
            <div v-if="IsProjectAboutView" id="PhoneProjectAboutView" class="animated slideInUp">
                <a class="PhoneCloseBTN" @click="SetProjectAboutView(false)">[X]</a>
                <p><br><br></p>

                <div id="PhoneAboutTitle">

                    <h3>作品介紹<hr></h3>
                    <p>{{ProjectMeta}}<br><br></p>

                    <h3>作品影音<hr></h3>
                    <div v-for="(item,index) in ProjectMoviePath">
                        <video id="PhoneVideoView" width="100%" height="100%" loop="loop" controls="controls">
                            <source v-bind:src="item" type="video/mp4">
                            <p>錯誤！瀏覽器不支援Video播放器</p>
                        </video>
                        <br><br>
                    </div>

                    <div v-for="(item,index) in ProjectPhotoPath">
                        <img width="100%" height="100%" v-bind:src="item" />
                        <br><br>
                    </div>
                    
                </div>
            </div>

            <div v-if="IsProjectMumberView" id="PhoneProjectMumberView" class="animated slideInUp">
                <a class="PhoneCloseBTN" @click="SetProjectMumberView(false)">[X]</a>
                <p><br><br></p>
                
                <div id="PhoneMumberTitle">
                    <h3>製作成員<hr></h3>
                    <img width="100%" height="100%" v-bind:src="ImagePhotoPath" />
                    <br><br><p>{{About}}</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            ShowImage           : false                           , //是否完整顯示印象圖
            IsProjectAboutView  : false                           , //是否檢視作品說明界面
            IsProjectMumberView : false                           , //是否檢視參與成員資料界面
            WhichIs             : StudentGroups.data.WhichIs      , //'放視大賞'連結
            WhyCall             : StudentGroups.data.WhyCall      , //'聯絡資訊'連結
            Link                : StudentGroups.data.FaceBookLink , //載入FB連結
            NowSelectGroupID    : 0                               , //目前選擇的作品ID(Array索引值)
            ProjectMovieList    : []                              , //作品影片列表
            ProjectPhotoList    : []                              , //作品照片列表
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

        /* 執行載入顯示元件動畫 */
        document.getElementsByTagName("div").PhoneProjectViewProjectImageBlock.className = "animated fadeInUp    delay-500ms";
        document.getElementsByTagName("div").PhoneCtlMask.className                      = "animated fadeInUp    delay-500ms";
        document.getElementsByTagName("div").PhoneProjectViewMetaTextBlock.className     = "animated fadeInUp    delay-500ms";
        document.getElementsByTagName("div").PhoneProjectViewBottomBTNBlock.className    = "animated fadeInUp    delay-0s";

        /* 初始化化動監控事件 */
        this.SetSwipe();

        /* 固定每500ms更新索引值 */
        setInterval(() => {
            this.NowSelectGroupID = StudentGroups.event.GetNowSelectID();
        },500);
    },
    methods: {
        /* 切換到上一頁(手機版作品專欄) */
        ChangeBeforePage:function() {
            /* 執行收起元件動畫 */
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "RollBackBTN";

            setTimeout(() => {
                document.getElementsByTagName("div").PhoneProjectViewProjectImageBlock.className = "animated fadeOutDown   delay-500ms";
                document.getElementsByTagName("div").PhoneCtlMask.className                      = "animated fadeOutDown   delay-500ms";
                document.getElementsByTagName("div").PhoneProjectViewMetaTextBlock.className     = "animated fadeOutDown   delay-500ms";
                document.getElementsByTagName("div").PhoneProjectViewBottomBTNBlock.className    = "animated fadeOutDown   delay-1s";
            },500);
                
            app.DelayRouteBack(2000);
        },
        /* 設定是否要檢視作品說明界面 */
        SetProjectAboutView:function(NextToShow) {
            /* 載入偽浮動視窗移出的動畫(預設以綁定移入) */
            if(!NextToShow){
                document.getElementsByTagName("div").PhoneProjectAboutView.className = "animated fadeOutDown";
            }

            app.IsLockView = NextToShow;

            /* 等待動畫跑完後執行關閉視窗檢視 */
            setTimeout(() => {
                this.IsProjectAboutView = NextToShow;
            },500);
        },
        /* 設定是否要檢視參與成員資料界面 */
        SetProjectMumberView:function(NextToShow) {
            /* 載入偽浮動視窗移出的動畫(預設以綁定移入) */
            if(!NextToShow){
                document.getElementsByTagName("div").PhoneProjectMumberView.className = "animated fadeOutDown";
            }

            app.IsLockView = NextToShow;
        
            /* 等待動畫跑完後執行關閉視窗檢視 */
            setTimeout(() => {
                this.IsProjectMumberView = NextToShow;
            },500);
        },
        /* 初始化化動監控事件 */
        SetSwipe:function() {
            /* 當左右滑動時更新索引ID */
            $("#PhoneCtlMaskBlock").swipe( {
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    if(direction == "right"){
                        StudentGroups.event.GetBeforeGroup();
                    }else if(direction == "left"){
                        StudentGroups.event.GetNextGroup();
                    }else if(direction == "up"){
                        document.getElementsByTagName("div").PhoneProjectViewMetaTextBlock.scrollTop += distance;
                    }else if(direction == "down"){
                        document.getElementsByTagName("div").PhoneProjectViewMetaTextBlock.scrollTop += -distance;
                    }
                },
                threshold:0
            });
        },
        /* 提示用界面點擊關閉功能 */
        CloseCtlMask:function() {
            document.getElementsByTagName("div").PhoneCtlMask.style.display = "none";
        },

        ChangeImageView:function(){
            if(!this.ShowImage){
                document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className = "animated fadeOutUp delay-500ms";
                document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className      = "animated fadeOutUp";
                document.getElementsByTagName("div").ProjecTitleTitleGroups.className         = "animated fadeOutUp container-fluid";
                document.getElementsByTagName("div").PhoneBackBtn.className                   = "animated fadeOutUp";
            }else{
                document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className = "animated fadeInDown";
                document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className      = "animated fadeInDown delay-500ms";
                document.getElementsByTagName("div").ProjecTitleTitleGroups.className         = "animated fadeInDown delay-500ms container-fluid";
                document.getElementsByTagName("div").PhoneBackBtn.className                   = "animated fadeInDown delay-500ms";
            }
            
            this.ShowImage = !this.ShowImage;
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
        ProjectMoviePath:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath;
        },
        /* 載入作品照片路徑 */
        ProjectPhotoPath:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectPhotoPath;
        }
    },
};