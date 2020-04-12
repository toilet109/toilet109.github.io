const ProjectView = {
    template: 
    `
        <div>
            <!--載入背景-->
            <div id="MainBackground"></div>

            <!--載入返回鍵-->
            <div id="UpBtn">
                <a href="javascript:void(0);" @click="ChangeBeforePage()">
                    <img height="2.5%" width="2.5%" src="./Source/IMG/UpBTN.png" />
                </a>
            </div>

            <div class="ProjectTypeBTNGroup container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="PackagingDesignBTN">
                            <a href="javascript:void(0);" @click="ChangeNextPage('PackagingDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/PackagingDesign.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="ThreeDimensionalModelingBTN">
                            <a href="javascript:void(0);" @click="ChangeNextPage('ThreeDimensionalModeling')">
                                <img height="100%" width="100%" src="./Source/IMG/ThreeDimensionalModeling.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="GraphicDesignBTN">
                            <a href="javascript:void(0);" @click="ChangeNextPage('GraphicDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/GraphicDesign.png" />
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
                            <a href="javascript:void(0);" @click="ChangeNextPage('PictureBooks')">
                                <img height="100%" width="100%" src="./Source/IMG/PictureBooks.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="AlbumBTN">
                            <a href="javascript:void(0);" @click="ChangeNextPage('Album')">
                                <img height="100%" width="100%" src="./Source/IMG/Album.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="AnimationBTN">
                            <a href="javascript:void(0);" @click="ChangeNextPage('Animation')">
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
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeInDown delay-800ms";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeInUp   delay-500ms";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeInUp   delay-500ms";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInUp   delay-500ms";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeInUp   delay-500ms";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeInUp   delay-500ms";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeInUp   delay-500ms";
        }else{
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeInDown delay-1500ms";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeInDown delay-500ms";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeInDown delay-500ms";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInDown delay-500ms";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeInDown delay-500ms";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeInDown delay-500ms";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeInDown delay-500ms";
        }
    },
    methods: {
        /* 切換到上一頁(首頁) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").MainBackground.className               = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeOutUp   delay-0s";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeOutDown delay-500ms";
            
            app.DelayRoutePush("/",2000);
        },
        /* 切換到下一頁(作品專欄) */
        ChangeNextPage:function(ProjectType) {
            document.getElementsByTagName("div").UpBtn.className                        = "animated fadeOutUp delay-0s";
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeOutUp delay-500ms";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeOutUp delay-500ms";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeOutUp delay-500ms";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeOutUp delay-500ms";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeOutUp delay-500ms";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeOutUp delay-500ms";
            
            app.DelayRoutePush("/Project/"+ProjectType,1000);
        }
    },
};