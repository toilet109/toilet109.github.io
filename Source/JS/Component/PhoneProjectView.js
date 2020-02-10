
var PhoneProjectView = {
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

            <div id="PhoneBackBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/BackBTN.svg" />
                </a>
            </div>

            <div class="PhoneProgectTypeBTNGroup container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="PhonePackagingDesignBTN">
                            <a @click="ChangeNextPage('PackagingDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/PackagingDesign.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhoneThreeDimensionalModelingBTN">
                            <a @click="ChangeNextPage('ThreeDimensionalModeling')">
                                <img height="100%" width="100%" src="./Source/IMG/ThreeDimensionalModeling.svg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <br>
                </div>

                <div class="row">
                    <div class="col">
                        <div id="PhoneGraphicDesignBTN">
                            <a @click="ChangeNextPage('GraphicDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/GraphicDesign.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhonePictureBooksBTN">
                            <a @click="ChangeNextPage('PictureBooks')">
                                <img height="100%" width="100%" src="./Source/IMG/PictureBooks.svg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <br>
                </div>

                <div class="row">
                    <div class="col">
                        <div id="PhoneAlbumBTN">
                            <a @click="ChangeNextPage('Album')">
                                <img height="100%" width="100%" src="./Source/IMG/Album.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PhoneAnimationBTN">
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
            IsReMount:false
        }
    },
    async mounted() {
        try {
            this.IsReMount = await(app.ProjectViewIsGoBack);
        } catch (error) {
            this.IsReMount = false;
        }

        if(!this.IsReMount){
            document.getElementsByTagName("div").PhoneProjectViewBackground.className        = "animated slideInRight delay-0s";
            document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className    = "animated fadeInDown   delay-1s";
            document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className         = "animated fadeInDown   delay-2s";
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "animated fadeInRight  delay-2s";
                
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeInRight delay-3s";
        }else{
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeInLeft delay-0s";
        }

    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").PhoneProjectViewBackground.className        = "animated slideOutRight delay-3s";
            document.getElementsByTagName("div").PhoneProjecTitleViewBackground.className    = "animated fadeOutUp     delay-2s";
            document.getElementsByTagName("div").PhoneProjecTitleViewTitle.className         = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "animated fadeOutRight  delay-1s";       
               
            document.getElementsByTagName("div").PhonePackagingDesignBTN.className           = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneThreeDimensionalModelingBTN.className  = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneGraphicDesignBTN.className             = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhonePictureBooksBTN.className              = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneAlbumBTN.className                     = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PhoneAnimationBTN.className                 = "animated fadeOutRight delay-0s";
            
            app.DelayRoutePush("/phoneAbout",4000);
        },
        ChangeNextPage:function(ProjectType) {
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
