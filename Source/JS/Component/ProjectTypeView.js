var ProjectTypeView = {
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

            <div id="ProgectTypeListGroup" class="container-fluid">
                <div v-for="(item,index) in GroupsDataList" v-if="item.Type === $route.params.ProjectType">
                    <div class="row">
                        <div class="col">
                            <div id="ThreeDimensionalModelingBTN">
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
            IsReMount      : false , //是否有二次載入(反向載入)的情況
            GroupsDataList : []    , //各組別的專題資料
        }
    },
    async mounted() {
        try {
            /* 用同位異步方式與await等待app元件優先載入完成，並讀取此頁面是否發生二次載入(選擇動畫方向用) */
            this.IsReMount = await(app.ProjectTypeViewIsGoBack);
        } catch (error) {
            /* 當路由直接指向此頁時，直接視為初次載入 */
            this.IsReMount = false;
        }
        
        //document.getElementsByTagName("body")[0].style.position = "relative";

        /* 綁定StudentGroups下的GroupsData List */
        this.GroupsDataList = StudentGroups.data.GroupsData;

        /* 依據是否以載入，而作品形象照由對應方向載入 */
        if(!this.IsReMount){
            document.getElementsByTagName("div").ProgectTypeListGroup.className           = "animated fadeInRight delay-0s";
        }else{
            document.getElementsByTagName("div").ProgectTypeListGroup.className           = "animated fadeInLeft  delay-0s";
        }
    },
    methods: {
        
        /* 切換到上一頁(手機版作品一覽) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").UpBtn.className           = "animated fadeOutUp delay-0s";
            document.getElementsByTagName("body")[0].style.position = "Fixed";
            app.DelayRouteBack(1000);
        },
        /* 切換到下一頁(手機版小組作品) */
        ChangeNextPage:function(ProjectID) {
            document.getElementsByTagName("div").UpBtn.className           = "animated fadeOutUp  delay-0s";
            document.getElementsByTagName("body")[0].style.position = "Fixed";
            
            StudentGroups.event.SetNowSelectID(ProjectID);
            app.NowSelectID = ProjectID;
            app.DelayRoutePush("/phoneProjectView",1000);
        }
    },
};