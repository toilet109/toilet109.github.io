const PhoneProjectView = {
    template: 
    `
        <div>
            <div id="PhoneProjectViewBackground"></div>
                
            <div id="PhoneProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="PhoneCtlProjectViewMaskBlock"></div>

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

            <div class="PhoneProjectTypeBTNGroup container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="PhoneThreeDimensionalModelingBTN">
                            <a @click="ChangeNextPage('ThreeDimensionalModeling')">
                                <img height="100%" width="100%" src="./Source/IMG/ThreeDimensionalModeling.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhonePackagingDesignBTN">
                            <a @click="ChangeNextPage('PackagingDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/PackagingDesign.png" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <br>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div id="PhonePictureBooksBTN">
                            <a @click="ChangeNextPage('PictureBooks')">
                                <img height="100%" width="100%" src="./Source/IMG/PictureBooks.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhoneAlbumBTN">
                            <a @click="ChangeNextPage('Album')">
                                <img height="100%" width="100%" src="./Source/IMG/Album.png" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <br>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div id="PhoneAnimationBTN">
                            <a @click="ChangeNextPage('Animation')">
                                <img height="100%" width="100%" src="./Source/IMG/Animation.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <br>
                    </div>
                </div>

                <div class="row">
                    <br>
                </div>

            </div>

        </div>
    `,
    data() {
        return {
            IsReMount: false                      , //是否有二次載入(反向載入)的情況
            WhichIs  : StudentGroups.data.WhichIs , //'放視大賞'連結
            WhyCall  : StudentGroups.data.WhyCall , //'聯絡資訊'連結
        }
    },
    async mounted() {
        try {
            /* 用同位異步方式與await等待app元件優先載入完成，並讀取此頁面是否發生二次載入(選擇動畫方向用) */
            this.IsReMount = await(app.ProjectViewIsGoBack);
        } catch (error) {
            /* 當路由直接指向此頁時，直接視為初次載入 */
            this.IsReMount = false;
        }

        /* 未進行反向載入由右向左切入，反之由左向右切入*/
        if(!this.IsReMount){
            /* 載入上方控制欄位動畫 */
            //document.getElementsByTagName("div").PhoneProjectViewBackground.className        = "animated slideInRight delay-0s";
            document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className    = "animated fadeInDown   delay-500ms";
            document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className         = "animated fadeInRight  delay-1s";
            document.getElementsByTagName("div").ProjecTitleTitleButton2.className           = "animated fadeInRight  delay-1s";
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "animated fadeInLeft   delay-1s";
            
            /* 載入上方連結欄提示動畫 */
            setTimeout(() => { 
                document.getElementsByTagName("div").ProjecTitleTitleButton2.className       = "animated pulse        delay-500ms";
            },1500);
           
            /* 由右向左載入主題分類的分組動畫 */
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeInRight delay-1500ms";
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className             = "animated fadeInRight delay-1500ms";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeInRight delay-1500ms";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeInRight delay-1500ms";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeInRight delay-1500ms";
        }else{
            /* 由左向右載入主題分類的分組動畫 */
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className             = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeInLeft delay-0s";
        }

        /* 初始化化動監控事件 */
        this.SetSwipe(event);
    },
    methods: {
        /* 初始化化動監控事件 */
        SetSwipe:function(event) {
            /* 底遮罩滑動控制 */
            $("#PhoneCtlProjectViewMaskBlock").swipe( {
                swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
                    PhoneProjectView.methods.ChangeBeforePage();
                },
                threshold:0
            });
            /* 當左右滑動時更新索引ID */
            $("#PhoneProjectTypeBTNGroup").swipe( {
                swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
                    PhoneProjectView.methods.ChangeBeforePage();
                    console.log("!!");
                    
                },
                threshold:0
            });
        },
        /* 切換到上一頁(手機版首頁介紹) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").PhoneBackBtn.className                          = "RollBackBTN";

            setTimeout(() => { 
                /* 移出上方控制欄位動畫 */
                //document.getElementsByTagName("div").PhoneProjectViewBackground.className        = "animated slideOutRight delay-2s";
                document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className    = "animated fadeOutUp     delay-1s";
                document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className         = "animated fadeOutRight  delay-500ms";
                document.getElementsByTagName("div").ProjecTitleTitleButton2.className           = "animated fadeOutRight  delay-500ms";
                document.getElementsByTagName("div").PhoneBackBtn.className                      = "animated fadeOutLeft   delay-500ms";       
                
                /* 由左向右切出主題分類的分組動畫 */
                document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeOutRight delay-0s";
                document.getElementsByTagName("div").PhonePackagingDesignBTN.className             = "animated fadeOutRight delay-0s";
                document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeOutRight delay-0s";
                document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeOutRight delay-0s";
                document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeOutRight delay-0s";
            },1000);

            app.DelayRoutePush("/phoneAbout",3500);
        },
        /* 切換到下一頁(手機版作品專欄) */
        ChangeNextPage:function(ProjectType) {
            /* 由右向左切出主題分類的分組動畫 */
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className             = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeOutLeft delay-0s"; 
            
            app.DelayRoutePush("/phoneProject/"+ProjectType,500);
        }
    },
};
