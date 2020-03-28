const PhoneProjectTypeView = {
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

            <div id="PhoneProgectTypeListGroup" class="container-fluid">
                <div v-for="(item,index) in GroupsDataList" v-if="item.Type === $route.params.ProjectType">
                    <div class="row">
                        <div class="col">
                            <div class="PhoneListBTN">
                                <a @click="ChangeNextPage(index)">
                                    <img height="100%" width="100%" v-bind:src="item.ImagePhotoPath" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    data() {
        return {
            IsReMount      : false                      , //是否有二次載入(反向載入)的情況
            GroupsDataList : []                         , //各組別的專題資料
            WhichIs        : StudentGroups.data.WhichIs , //'放視大賞'連結
            WhyCall        : StudentGroups.data.WhyCall , //'聯絡資訊'連結
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

        /* 綁定StudentGroups下的GroupsData List */
        this.GroupsDataList = StudentGroups.data.GroupsData;

        /* 依據是否以載入，而作品形象照由對應方向載入 */
        if(!this.IsReMount){
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeInRight delay-0s";
        }else{
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeInLeft  delay-0s";
        }
    },
    methods: {
        /* 切換到上一頁(手機版作品一覽) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").PhoneBackBtn.className                      = "RollBackBTN";

            setTimeout(() => {
                document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeOutRight delay-0s";
            },750);

            app.DelayRoutePush("/phoneProject",1750);
        },
        /* 切換到下一頁(手機版小組作品) */
        ChangeNextPage:function(ProjectID) {
            document.getElementsByTagName("div").PhoneProgectTypeListGroup.className           = "animated fadeOutLeft  delay-0s";
            
            StudentGroups.event.SetNowSelectID(ProjectID);
            app.NowSelectID = ProjectID;
            app.DelayRoutePush("/phoneProjectView",1000);
        }
    },
};