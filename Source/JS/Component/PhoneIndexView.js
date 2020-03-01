const PhoneIndexView = {
    template: 
    `
        <div>
            <div id="PhoneIndexBackEnd">
                <div id="PhoneIndexBackground"></div>
            </div>

            <div id="PhoneIndexUpPartBG">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneUpPartBG.svg" />
                </div>
            </div>

            <div id="PhoneIndexUpPartChineseTitle">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneTitle.svg" />
                </div>
            </div>

            <div id="PhoneIndexUpPartEnglishTitle">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneEnglishTitle.svg" />
                </div>
            </div>

            <div id="PhoneIndexTitle">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneGridTitle.svg" />
                </div>
            </div>

            <!--置底-->
            <div id="PhoneDownBtn">
                <a @click="ChangeNextPage()">
                    <img height="10%" width="10%" src="./Source/IMG/DownBTN.svg" />
                </a>
            </div>
        </div>
    `,
    mounted() {        
        /* 執行載入顯示首頁元件動畫 */
        document.getElementsByTagName("div").PhoneIndexBackEnd.className                                           = "animated fadeIn        delay-1s";
        document.getElementsByTagName("div").PhoneIndexBackground.className                                        = "animated fadeOut       delay-5s";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.className                                          = "animated slideInDown   delay-1s";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.getElementsByTagName("div")[0].className           = "animated fadeOutUp     delay-5s";
        document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.className                                = "animated fadeInDownBig delay-2s";
        document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.getElementsByTagName("div")[0].className = "animated fadeOutUp     delay-4s"
        document.getElementsByTagName("div").PhoneIndexUpPartEnglishTitle.className                                = "animated fadeInDownBig delay-2s";
        document.getElementsByTagName("div").PhoneIndexUpPartEnglishTitle.getElementsByTagName("div")[0].className = "animated fadeOutUp     delay-4s"
        document.getElementsByTagName("div").PhoneIndexTitle.className                                             = "animated fadeIn        delay-3s";
        document.getElementsByTagName("div").PhoneIndexTitle.getElementsByTagName("div")[0].className              = "animated fadeOutDown   delay-5s";
        document.getElementsByTagName("div").PhoneDownBtn.className                                                = "animated fadeIn        delay-6s";
    },
    methods: {
        /* 切換到下一頁(手機版首頁介紹) */
        ChangeNextPage:function() {
            document.getElementsByTagName("div").PhoneDownBtn.className = "animated fadeOut delay-0s";
            app.DelayRoutePush("/phoneAbout",500);
        },
    },
};