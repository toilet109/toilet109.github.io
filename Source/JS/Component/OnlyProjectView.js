var OnlyProjectView = {
    template: 
    `
        <div>
            <!--載入背景-->
            <div id="MainBackground"></div>
            <div id="ProjectBackground"></div>
            <div id="ProjectMainViewer"></div>

            <!--載入返回鍵-->
            <div id="UpBtn">
                <a @click="ChangeBeforePage()">
                    <img height="5%" width="5%" src="./Source/IMG/ProjectViewUpBTN.svg" />
                </a>
            </div>

            <div id="ProjectViewLeftBtn">
                <a @click="ChangeBeforeProject()">
                    <img height="25%" width="25%" src="./Source/IMG/ProjectViewLeftBTN.svg" />
                </a>
            </div>
            <div id="ProjectViewRightBtn">
                <a @click="ChangeNextProject()">
                    <img height="25%" width="25%" src="./Source/IMG/ProjectViewRightBTN.svg" />
                </a>
            </div>

            <div id="ProjectMetaBlock">
                <div class="container"> 
                    <p>{{ProjectMeta}}</p>
                </div>
            </div>

            <div id="ProjectMainBlock">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <!--div><img height="75%" width="75%" v-bind:src="ImagePhotoPath" /></div-->
                        </div>
                    </div>
                </div>
            </div>

            <div id="ImagePhotoBlock">
                <div class="container">
                    <div><img height="75%" width="75%" v-bind:src="ImagePhotoPath" /></div>
                </div>
            </div>

            <div id="AboutBlock" class="container">
                <div class="container">
                    <p>{{About}}</p>
                </div>
            </div>

            <!--置底-->
            <div id="DownBtn">
                <a @click="ChangeNextPage()">
                    <img height="5%" width="5%" src="./Source/IMG/ProjectViewDownBTN.svg" />
                </a>
            </div>

        </div>
    `,
    data() {
        return {
            IsProjectAboutView  : false                           , //是否檢視作品說明界面
            IsProjectMumberView : false                           , //是否檢視參與成員資料界面
            Link                : StudentGroups.data.FaceBookLink , //載入FB連結
            NowSelectGroupID    : 0                               , //目前選擇的作品ID(Array索引值)
        }
    },
    async mounted() {
        try{
            /* 用同位異步方式與await等待app元件優先載入完成，並讀取應該讀取的索引值 */
            this.NowSelectGroupID = await(app.NowSelectID);
        } catch (error) {
            /* 當路由直接指向此頁時，無法獲取有效的ID值定給予初始值索引編號0 */
            this.NowSelectGroupID = 0;
        };
        
        /* 執行載入顯示元件動畫 */
        document.getElementsByTagName("div").ProjectBackground.className    = "animated fadeInDown   delay-1s";
        document.getElementsByTagName("div").UpBtn.className                = "animated fadeInDown   delay-2s";
        document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated fadeInRight  delay-2s";
        document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated fadeInLeft   delay-2s";
        document.getElementsByTagName("div").ProjectMetaBlock.className     = "animated slideInLeft  delay-1s";
        document.getElementsByTagName("div").ProjectMainBlock.className     = "animated fadeInUp     delay-1s";
        document.getElementsByTagName("div").ImagePhotoBlock.className      = "animated fadeInDown   delay-1s";
        document.getElementsByTagName("div").AboutBlock.className           = "animated slideInRight delay-1s";
        document.getElementsByTagName("div").DownBtn.className              = "animated fadeInUp     delay-2s";
    },
    methods: {
        /* 切換到上一頁(手機版作品專欄) */
        ChangeBeforePage:function() {
            /* 執行收起元件動畫 */
            document.getElementsByTagName("div").ProjectBackground.className    = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").UpBtn.className                = "animated fadeOutUp     delay-0s";
            document.getElementsByTagName("div").ProjectViewLeftBtn.className   = "animated slideOutLeft  delay-0s";
            document.getElementsByTagName("div").ProjectViewRightBtn.className  = "animated slideOutRight delay-0s";
            document.getElementsByTagName("div").ProjectMetaBlock.className     = "animated slideOutLeft  delay-1s";
            document.getElementsByTagName("div").ProjectMainBlock.className     = "animated slideOutDown  delay-1s";
            document.getElementsByTagName("div").ImagePhotoBlock.className      = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").AboutBlock.className           = "animated slideOutRight delay-1s";
            document.getElementsByTagName("div").DownBtn.className              = "animated fadeOutDown   delay-0s";

            app.DelayRouteBack(3000);
        },
        /* 設定是否要檢視作品說明界面 */
        SetProjectAboutView:function(NextToShow) {
            /* 載入偽浮動視窗移出的動畫(預設以綁定移入) */
            if(!NextToShow){
                document.getElementsByTagName("div").ProjectAboutView.className = "animated fadeOutDown";
            }

            /* 等待動畫跑完後執行關閉視窗檢視 */
            setTimeout(() => {
                this.IsProjectAboutView = NextToShow;
            },500);
        },
        /* 設定是否要檢視參與成員資料界面 */
        SetProjectMumberView:function(NextToShow) {
            /* 載入偽浮動視窗移出的動畫(預設以綁定移入) */
            if(!NextToShow){
                document.getElementsByTagName("div").ProjectMumberView.className = "animated fadeOutDown";
            }
        
            /* 等待動畫跑完後執行關閉視窗檢視 */
            setTimeout(() => {
                this.IsProjectMumberView = NextToShow;
            },500);
        },
        ChangeBeforeProject:function() {
            StudentGroups.event.GetBeforeGroup();
            this.NowSelectGroupID = StudentGroups.event.GetNowSelectID();
        },
        ChangeNextProject:function() {
            StudentGroups.event.GetNextGroup();
            this.NowSelectGroupID = StudentGroups.event.GetNowSelectID();
        },
    },
    computed: {
        /* 載入形象照路徑 */
        ImagePhotoPath:function() {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ImagePhotoPath;
        },
        /*作品名稱 */
        Name:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].Name;
        },
        /*作品種類 */
        Type:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].Type;
        },
        /* 載入自介 */
        About:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].About;
        },
        /* 載入作品介紹 */
        ProjectMeta:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMeta;
        },
        /* 載入作品影片路徑 */
        ProjectMoviePath:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath;
        },
        /* 載入作品照片路徑 */
        ProjectPhotoPath:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectPhotoPath;
        }
    },
};