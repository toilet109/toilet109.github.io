const PhoneIndexView = {
    template: 
    `
        <div>
            <div id="PhoneIndexBackEnd">
                <div id="PhoneIndexBackground"></div>
            </div>

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

            <div id="PhoneIndexUpPartEnglishTitle">
                <div>
                    <img height="100%" width="100%" src="./Source/IMG/PhoneEnglishTitle.png" />
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
        document.getElementsByTagName("div").PhoneIndexBackEnd.className                                           = "animated fadeIn        delay-500ms";
        document.getElementsByTagName("div").PhoneIndexBackground.className                                        = "animated fadeOut       delay-4500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.className                                          = "animated slideInDown   delay-500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.getElementsByTagName("div")[0].className           = "animated fadeOutUp     delay-4500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.className                                = "animated fadeInDownBig delay-1500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.getElementsByTagName("div")[0].className = "animated fadeOutUp     delay-3500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartEnglishTitle.className                                = "animated fadeInDownBig delay-1500ms";
        document.getElementsByTagName("div").PhoneIndexUpPartEnglishTitle.getElementsByTagName("div")[0].className = "animated fadeOutUp     delay-3500ms";
        document.getElementsByTagName("div").PhoneIndexTitle.className                                             = "animated fadeIn        delay-2500ms";
        document.getElementsByTagName("div").PhoneIndexTitle.getElementsByTagName("div")[0].className              = "animated fadeOutDown   delay-4500ms";
        document.getElementsByTagName("div").PhoneDownBtn.className                                                = "animated fadeIn        delay-5500ms";
    },
    methods: {
        /* 切換到下一頁(手機版首頁介紹) */
        ChangeNextPage:function() {
            document.getElementsByTagName("div").PhoneDownBtn.className = "animated fadeOut delay-0s";
            app.DelayRoutePush("/phoneAbout",500);
        },
    },
};