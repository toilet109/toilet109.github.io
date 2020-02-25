var ProjectView = {
    template: 
    `
        <div>
            <!--載入背景-->
            <div id="MainBackground"></div>

            <!--載入返回鍵-->
            <div id="UpBtn">
                <a @click="ChangeBeforePage()">
                    <img height="2.5%" width="2.5%" src="./Source/IMG/UpBTN.svg" />
                </a>
            </div>

            <div class="ProjectTypeBTNGroup container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="PackagingDesignBTN">
                            <a @click="ChangeNextPage('PackagingDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/PackagingDesign.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="ThreeDimensionalModelingBTN">
                            <a @click="ChangeNextPage('ThreeDimensionalModeling')">
                                <img height="100%" width="100%" src="./Source/IMG/ThreeDimensionalModeling.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="GraphicDesignBTN">
                            <a @click="ChangeNextPage('GraphicDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/GraphicDesign.svg" />
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
                        <div id="PictureBooksBTN">
                            <a @click="ChangeNextPage('PictureBooks')">
                                <img height="100%" width="100%" src="./Source/IMG/PictureBooks.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="AlbumBTN">
                            <a @click="ChangeNextPage('Album')">
                                <img height="100%" width="100%" src="./Source/IMG/Album.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="AnimationBTN">
                            <a @click="ChangeNextPage('Animation')">
                                <img height="100%" width="100%" src="./Source/IMG/Animation.svg" />
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
            IsReMount: false , //是否有二次載入(反向載入)的情況
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
        
        /*載入分類主題動畫*/
        if(!this.IsReMount){
            document.getElementsByTagName("div").MainBackground.className               = "animated fadeInUp   delay-0s";
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeInDown delay-1500ms";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeInUp   delay-1s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeInUp   delay-1s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInUp   delay-1s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeInUp   delay-1s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeInUp   delay-1s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeInUp   delay-1s";
        }else{
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeInDown delay-3s";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeInDown delay-1s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeInDown delay-1s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInDown delay-1s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeInDown delay-1s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeInDown delay-1s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeInDown delay-1s";
        }
    },
    methods: {
        /* 切換到上一頁(首頁) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").MainBackground.className               = "animated fadeOutDown delay-2s";
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeOutUp   delay-0s";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeOutDown delay-1s";
            
            app.DelayRoutePush("/",3500);
        },
        /* 切換到下一頁(作品專欄) */
        ChangeNextPage:function(ProjectType) {
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeOutUp delay-0s";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeOutUp delay-1s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeOutUp delay-1s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeOutUp delay-1s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeOutUp delay-1s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeOutUp delay-1s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeOutUp delay-1s";
            
            app.DelayRoutePush("/Project/"+ProjectType,2000);
        }
    },
};