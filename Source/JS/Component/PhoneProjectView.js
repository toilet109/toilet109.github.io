const PhoneProjectView = {
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

            <div id="ProjecTitleTitleButton1">
                <a v-bind:href="WhereIs" target="Web_WhereIs">
                    <img height="100%" width="100%" src="./Source/IMG/button-1.png" />
                </a>
            </div>

            <div id="ProjecTitleTitleButton2">
                <a v-bind:href="WhichIs" target="Web_WhichIs">
                    <img height="100%" width="100%" src="./Source/IMG/button-2.png" />
                </a>
            </div>

            <div id="ProjecTitleTitleButton3">
                <a v-bind:href="WhyCall" target="Web_WhyCall">
                    <img height="100%" width="100%" src="./Source/IMG/button-3.png" />
                </a>
            </div>

            <div id="PhoneBackBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/BackBTN.png" />
                </a>
            </div>

            <div class="PhoneProjectTypeBTNGroup container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="PhonePackagingDesignBTN">
                            <a @click="ChangeNextPage('PackagingDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/PackagingDesign.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhoneThreeDimensionalModelingBTN">
                            <a @click="ChangeNextPage('ThreeDimensionalModeling')">
                                <img height="100%" width="100%" src="./Source/IMG/ThreeDimensionalModeling.png" />
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
                        <div id="PhoneGraphicDesignBTN">
                            <a @click="ChangeNextPage('GraphicDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/GraphicDesign.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhonePictureBooksBTN">
                            <a @click="ChangeNextPage('PictureBooks')">
                                <img height="100%" width="100%" src="./Source/IMG/PictureBooks.png" />
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
                        <div id="PhoneAlbumBTN">
                            <a @click="ChangeNextPage('Album')">
                                <img height="100%" width="100%" src="./Source/IMG/Album.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhoneAnimationBTN">
                            <a @click="ChangeNextPage('Animation')">
                                <img height="100%" width="100%" src="./Source/IMG/Animation.png" />
                            </a>
                        </div>
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
            WhereIs  : StudentGroups.data.WhereIs , //'新一代設計展'連結
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
            document.getElementsByTagName("div").PhoneProjectViewBackground.className        = "animated slideInRight delay-0s";
            document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className    = "animated fadeInDown   delay-1s";
            document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className         = "animated fadeInDown   delay-1500ms";
            document.getElementsByTagName("div").ProjecTitleTitleButton1.className           = "animated fadeInDown   delay-1500ms";
            document.getElementsByTagName("div").ProjecTitleTitleButton2.className           = "animated fadeInDown   delay-1500ms";
            document.getElementsByTagName("div").ProjecTitleTitleButton3.className           = "animated fadeInDown   delay-1500ms";
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "animated fadeInRight  delay-2s";
            
            /* 載入上方連結欄提示動畫 */
            setTimeout(() => { 
                document.getElementsByTagName("div").ProjecTitleTitleButton1.className       = "animated pulse        delay-500ms";
                document.getElementsByTagName("div").ProjecTitleTitleButton2.className       = "animated pulse        delay-1s";
                document.getElementsByTagName("div").ProjecTitleTitleButton3.className       = "animated pulse        delay-1500ms";
            },3000);
           
            /* 由右向左載入主題分類的分組動畫 */
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeInRight delay-3s";
        }else{
            /* 由左向右載入主題分類的分組動畫 */
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeInLeft delay-0s";
        }

    },
    methods: {
        /* 切換到上一頁(手機版首頁介紹) */
        ChangeBeforePage:function() {
            /* 移出上方控制欄位動畫 */
            document.getElementsByTagName("div").PhoneProjectViewBackground.className        = "animated slideOutRight delay-3s";
            document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className    = "animated fadeOutUp     delay-2s";
            document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className         = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").ProjecTitleTitleButton1.className           = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").ProjecTitleTitleButton2.className           = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").ProjecTitleTitleButton3.className           = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "animated fadeOutRight  delay-1s";       
               
            /* 由左向右切出主題分類的分組動畫 */
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeOutRight delay-0s";
            
            app.DelayRoutePush("/phoneAbout",4000);
        },
        /* 切換到下一頁(手機版作品專欄) */
        ChangeNextPage:function(ProjectType) {
            /* 由右向左切出主題分類的分組動畫 */
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeOutLeft delay-0s"; 
            
            app.DelayRoutePush("/phoneProject/"+ProjectType,1000);
        }
    },
};
