var PhoneProjectTypeView = {
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

            <div id="BackBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/BackBTN.svg" />
                </a>
            </div>

            <div class="ProgectTypeBTNGroup container-fluid">
                <div class="row">
                    <div class="col">
                        <div id="ThreeDimensionalModelingBTN">
                            <a @click="ChangeNextPage(0)">
                            <img height="100%" width="100%" src="./Source/IMG/PhoneMenuViewFacebookIcon.svg" />
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
                            <a @click="ChangeNextPage(1)">
                                <img height="100%" width="100%" src="./Source/IMG/PhoneMenuViewFacebookIcon.svg" />
                            </a>
                        </div>
                    </div>
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
            this.IsReMount = await(app.ProjectTypeViewIsGoBack);
        } catch (error) {
            this.IsReMount = false;
        }

        if(!this.IsReMount){
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className           = "animated fadeInRight delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInRight delay-0s";
        }else{
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className           = "animated fadeInLeft delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className             = "animated fadeInLeft delay-0s";
        }
    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className           = "animated fadeOutRight delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className                       = "animated fadeOutRight delay-0s";
            app.DelayRouteBack(1000);
        },
        ChangeNextPage:function(ProjectID) {
            document.getElementsByTagName("div").ThreeDimensionalModelingBTN.className           = "animated fadeOutLeft delay-0s";
            document.getElementsByTagName("div").GraphicDesignBTN.className                       = "animated fadeOutLeft delay-0s";
            
            app.NowSelectID = ProjectID;
            app.DelayRoutePush("/phoneProjectView",1000);
        }
    },
};