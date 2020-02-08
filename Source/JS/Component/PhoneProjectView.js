
var PhoneProjectView = {
    template: 
    `
        <div>
            <div id="ProjectViewBackground"></div>
                
            <div id="ProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="ProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="LeftBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/LeftBTN.svg" />
                </a>
            </div>

            <div class="ProgectTypeBTNGroup container-fluid">
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
                </div>

                <div class="row">
                    <br>
                </div>

                <div class="row">
                    <div class="col">
                        <div id="GraphicDesignBTN">
                            <a @click="ChangeNextPage('GraphicDesign')">
                                <img height="100%" width="100%" src="./Source/IMG/GraphicDesign.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div id="PictureBooksBTN">
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
            document.getElementsByTagName("div").ProjectViewBackground.className        = "animated slideInRight delay-0s";
            document.getElementsByTagName("div").ProjecTitleViewBackground.className    = "animated fadeInDown   delay-1s";
            document.getElementsByTagName("div").ProjecTitleViewTitle.className         = "animated fadeInDown   delay-2s";
            document.getElementsByTagName("div").LeftBtn.className                      = "animated fadeInRight  delay-2s";
                
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeInRight delay-3s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeInRight delay-3s";
        }else{
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeInLeft delay-0s";
        }

    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").ProjectViewBackground.className        = "animated slideOutRight delay-3s";
            document.getElementsByTagName("div").ProjecTitleViewBackground.className    = "animated fadeOutUp     delay-2s";
            document.getElementsByTagName("div").ProjecTitleViewTitle.className         = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").LeftBtn.className                      = "animated fadeOutRight  delay-1s";       
               
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeOutRight delay-0s";
            
            app.DelayRoutePush("/phoneAbout",4000);
        },
        ChangeNextPage:function(ProjectType) {
            document.getElementsByTagName("div").PackagingDesignBTN.className           = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className  = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").PictureBooksBTN.className              = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").AlbumBTN.className                     = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").AnimationBTN.className                 = "animated fadeOutLeft delay-0s"; 
            
            app.DelayRoutePush("/phoneProject/"+ProjectType,1000);
        }
    },
};
