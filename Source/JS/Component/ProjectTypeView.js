var ProjectTypeView = {
    template: 
    `
        <div>
            <!--載入背景-->
            <div id="MainBackground"></div>

            <!--載入返回鍵-->
            <div id="UpBtn">
                <a href="javascript:void(0);" @click="ChangeBeforePage()">
                    <img height="2.5%" width="2.5%" src="./Source/IMG/UpBTN.svg" />
                </a>
            </div>

            <div id="ProgectTypeListGroup" class="container-fluid">
                <div v-for="(item,index) in GroupsDataList" class="row">
                    <div v-for="(subitem,subindex) in item" class="col">
                        <div id="ThreeDimensionalModelingBTN">
                            <a href="javascript:void(0);" @click="ChangeNextPage(subitem.ID)">
                                <img height="100%" width="100%" v-bind:src="subitem.ImagePhotoPath" />
                            </a>
                            <br>
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
            IsReMount      : false , //是否有二次載入(反向載入)的情況
            GroupsDataList : []    , //各組別的專題資料
        }
    },
    async mounted() {
        let TmpArray = [];
        let TmpCounter = 0;

        try {
            /* 用同位異步方式與await等待app元件優先載入完成，並讀取此頁面是否發生二次載入(選擇動畫方向用) */
            this.IsReMount = await(app.ProjectTypeViewIsGoBack);
        } catch (error) {
            /* 當路由直接指向此頁時，直接視為初次載入 */
            this.IsReMount = false;
        }
        
        //document.getElementsByTagName("body")[0].style.position = "relative";

        /* 綁定StudentGroups下的GroupsData List */
        this.GroupsDataList = [];
        for (let i = 0; i < StudentGroups.data.GroupsData.length; i++) {
            if(this.$route.params.ProjectType === StudentGroups.data.GroupsData[i].Type){
                TmpArray.push({ImagePhotoPath:StudentGroups.data.GroupsData[i].ImagePhotoPath,ID:i});
                if((TmpCounter+1)%3 == 0){
                    this.GroupsDataList.push(TmpArray);
                    TmpArray   = [];
                    TmpCounter = 0;
                }else{
                    TmpCounter++;
                }
            }
            
        }

        if(TmpArray != []){
            this.GroupsDataList.push(TmpArray);
        }
        
        document.getElementsByTagName("div").UpBtn.className                              = "animated fadeInDown  delay-1s";
        
        console.log(this.IsReMount);
        
        /* 依據是否以載入，而作品形象照由對應方向載入 */
        if(!this.IsReMount){
            document.getElementsByTagName("div").ProgectTypeListGroup.className           = "animated fadeInUp    delay-0s";
        }else{
            document.getElementsByTagName("div").ProgectTypeListGroup.className           = "animated fadeInDown  delay-0s";
        }
    },
    methods: {
        
        /* 切換到上一頁(作品一覽) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").UpBtn.className                    = "animated fadeOutUp delay-0s";
            document.getElementsByTagName("div").ProgectTypeListGroup.className     = "animated fadeOutDown delay-1s";
            app.DelayRoutePush("/Project",2000);
        },
        /* 切換到下一頁(小組作品) */
        ChangeNextPage:function(ProjectID) {
            document.getElementsByTagName("div").UpBtn.className                    = "animated fadeOutUp  delay-0s";
            document.getElementsByTagName("div").ProgectTypeListGroup.className     = "animated fadeOutUp delay-1s";
            
            StudentGroups.event.SetNowSelectID(ProjectID);
            app.NowSelectID = ProjectID;
            console.log(app.NowSelectID);
            
            app.DelayRoutePush("/ProjectView",2000);
        }
    },
};