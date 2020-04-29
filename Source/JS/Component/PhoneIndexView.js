const PhoneIndexView = {
    template: 
    `
        <div>
            <div id="PhoneIndexBackEnd2"></div>
            <div id="PhoneIndexBackEnd">
                <div id="PhoneIndexBackground"></div>
            </div>

            <div id="PhoneCtlViewMaskBlock"></div>

            <div id="PhoneIndexUpPartBG">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneUpPartBG.png" />
                </div>
            </div>

            <div id="PhoneIndexUpPartChineseTitle">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneTitle.png" />
                </div>
            </div>

            <div id="PhoneIndexTitle">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneGridTitle.png" />
                </div>
            </div>

            <!--置底-->
            <div id="PhoneDownBtn">
                <a @click="ChangeNextPage()">
                    <img height="10%" width="10%" src="./Source/IMG/DownBTN.png" />
                </a>
            </div>
        </div>
    `,
    mounted() {        
        /* 執行載入顯示首頁元件動畫 */
        document.getElementsByTagName("div").PhoneIndexBackEnd2.className                                          = "animated fadeIn        delay-0s";
        document.getElementsByTagName("div").PhoneIndexBackEnd.className                                           = "animated fadeIn        delay-500ms";
        document.getElementsByTagName("div").PhoneIndexBackground.className                                        = "animated fadeOut       delay-4500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.className                                          = "animated slideInDown   delay-500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.getElementsByTagName("div")[0].className           = "animated fadeOutUp     delay-4500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.className                                = "animated fadeInDownBig delay-1500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.getElementsByTagName("div")[0].className = "animated fadeOutUp     delay-3500ms";
        document.getElementsByTagName("div").PhoneIndexTitle.className                                             = "animated fadeIn        delay-2500ms";
        document.getElementsByTagName("div").PhoneIndexTitle.getElementsByTagName("div")[0].className              = "animated fadeOutDown   delay-4500ms";
        document.getElementsByTagName("div").PhoneDownBtn.className                                                = "animated fadeIn        delay-5500ms";

        /* 延遲滑動初始化 */
        setTimeout(() => { 
            this.SetSwipe();
        },5500);
    },
    methods: {
        /* 初始化化動監控事件 */
        SetSwipe:function(event) {
            /* 當左右滑動時更新索引ID */
            $("#PhoneCtlViewMaskBlock").swipe( {
                swipeUp:function(event, direction, distance, duration, fingerCount, fingerData) {
                    PhoneIndexView.methods.ChangeNextPage();
                },
                threshold:0
            });
        },
        /* 切換到下一頁(手機版首頁介紹) */
        ChangeNextPage:function() {
            document.getElementsByTagName("div").PhoneIndexBackEnd2.className = "animated fadeOut delay-0s";
            document.getElementsByTagName("div").PhoneDownBtn.className = "animated fadeOut delay-0s";
            app.DelayRoutePush("/phoneAbout",500);
        },
    },
};