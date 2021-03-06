const IndexView = {
    template: 
    `
    <div>
        <!--載入背景-->
        <div id="IndexBackground"></div>
        
        <!--載入背景線條-->
        <div id="Liner"></div>

        <div id="MainView" class="container-fluid">
            <!--第一列-->
            <div class="row">
                <div class="col">
                    <br><br><br><br><br><br>
                </div>
            </div>

            <!--第二列-->
            <div class="row">
                <div class="col">
                    <!--載入左側主標題-->
                    <div id="Title">
                        <img class="float-right" height="90%" width="90%" src="./Source/IMG/Title.png" />
                    </div>
                </div>
                <div class="col">
                    <!--故意空-->
                </div>
            </div>

            <!--第三列-->
            <div class="row">
                <div class="col">
                    <!--故意空-->
                </div>
                <div class="col">
                    <!--載入副標題-->
                    <div id="SubTitle1">
                        <br>
                    </div>
                    <div id="SubTitle2">
                        <br>
                    </div>
                </div>
            </div>

            <!--第四列-->
            <div class="row">
                <br>
                <div class="col">
                    <!--故意空-->
                </div>
                <div class="col">
                    <div id="EnglishTitle">
                        <br><img height="90%" width="90%" src="./Source/IMG/EnglishTitle.png" />
                    </div>
                </div>
            </div>

        </div>

        <!--置底-->
        <div id="DownBtn">
            <a href="javascript:void(0);" @click="ChangeNextPage()">
                <img height="2.5%" width="2.5%" src="./Source/IMG/DownBTN.png" />
            </a>
        </div>
    </div>
    `,
    data() {
        return {
            WhichIs        : StudentGroups.data.WhichIs , //'放視大賞'連結
        }
    },
    mounted() {
        /* 載入首頁動畫 */
        document.getElementsByTagName("div").IndexBackground.className  = "animated zoomIn      delay-500ms";
        document.getElementsByTagName("div").Liner.className            = "animated zoomIn      delay-1s";
        document.getElementsByTagName("div").MainView.className         = "animated fadeInDown  delay-500ms";
        document.getElementsByTagName("div").Title.className            = "animated fadeInRight delay-1500ms";
        document.getElementsByTagName("div").SubTitle1.className        = "animated fadeInLeft  delay-1500ms";
        document.getElementsByTagName("div").SubTitle2.className        = "animated fadeInLeft  delay-1500ms";
        document.getElementsByTagName("div").EnglishTitle.className     = "animated fadeInLeft  delay-1500ms";
        document.getElementsByTagName("div").DownBtn.className          = "animated fadeInUp    delay-2000ms";
    },
    methods: {
        /* 切換到下一頁(作品一覽) */
        ChangeNextPage:function() {
            /*向下滑動切換動畫*/
            document.getElementsByTagName("div").IndexBackground.className  = "animated fadeOutUp      delay-1500ms";
            document.getElementsByTagName("div").Liner.className            = "animated zoomOut        delay-1s";
            document.getElementsByTagName("div").Title.className            = "animated fadeOutLeft    delay-500ms";
            document.getElementsByTagName("div").SubTitle1.className        = "animated fadeOutRight   delay-500ms";
            document.getElementsByTagName("div").SubTitle2.className        = "animated fadeOutRight   delay-500ms";
            document.getElementsByTagName("div").EnglishTitle.className     = "animated fadeOutRight   delay-500ms";
            document.getElementsByTagName("div").DownBtn.className          = "animated fadeOutDown    delay-0s";

            app.DelayRoutePush("/Project",2000);
        },
    },
};