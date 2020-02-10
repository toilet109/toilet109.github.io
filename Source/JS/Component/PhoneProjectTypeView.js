var PhoneProjectTypeView = {
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

            <div id="PhoneProgectTypeListGroup" class="container-fluid">
                <div v-for="(item,index) in GroupsDataList" v-if="item.Type === $route.params.ProjectType">
                    <div class="row">
                        <div class="col">
                            <div id="PhoneThreeDimensionalModelingBTN">
                                <a @click="ChangeNextPage(index)">
                                <img height="100%" width="100%" src="./Source/IMG/PhoneMenuViewFacebookIcon.svg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <br>
                    </div>
                </div>
            </div>

        </div>
    `,
    data() {
        return {
            IsReMount:false,
            GroupsDataList:[]
        }
    },
    async mounted() {
        try {
            this.IsReMount = await(app.ProjectTypeViewIsGoBack);
        } catch (error) {
            this.IsReMount = false;
        }

        this.GroupsDataList = StudentGroups.data.GroupsData;

        if(!this.IsReMount){
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeInRight delay-0s";
        }else{
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeInLeft  delay-0s";
        }
    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeOutRight delay-0s";
            app.DelayRouteBack(1000);
        },
        ChangeNextPage:function(ProjectID) {
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeOutLeft  delay-0s";
            
            StudentGroups.event.SetNowSelectID(ProjectID);
            app.NowSelectID = ProjectID;
            app.DelayRoutePush("/phoneProjectView",1000);
        }
    },
};