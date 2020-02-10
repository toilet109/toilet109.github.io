var PhoneIndexView = {
    template: 
    `
        <div>
            <div id="PhoneIndexBackEnd">
                <div id="PhoneIndexBackground"></div>
            </div>

            <div id="PhoneIndexUpPartBG">
                <div class="animated slideOutUp delay-5s">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneUpPartBG.svg" />
                </div>
            </div>

            <div id="PhoneIndexUpPartChineseTitle" class="animated fadeInDownBig delay-2s">
                <div class="animated slideOutUp delay-4s">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneTitle.svg" />
                </div>
            </div>

            <div id="PhoneIndexUpPartEnglishTitle" class="animated fadeInDownBig delay-2s">
                <div  class="animated slideOutUp delay-4s">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneEnglishTitle.svg" />
                </div>
            </div>

            <div id="PhoneIndexTitle" class="animated fadeIn delay-3s ">
                <div class="animated slideOutDown delay-5s ">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneGridTitle.svg" />
                </div>
            </div>

            <!--置底-->
            <div id="PhoneDownBtn" class="animated fadeIn delay-6s">
                <a @click="ChangeNextPage()">
                    <img height="10%" width="10%" src="./Source/IMG/DownBTN.svg" />
                </a>
            </div>
        </div>
    `,
    mounted() {
        /* 執行載入顯示首頁元件動畫 */
        document.getElementsByTagName("div").PhoneIndexBackEnd.className    = "animated fadeIn      delay-1s";
        document.getElementsByTagName("div").PhoneIndexBackground.className = "animated fadeOut     delay-5s";
        document.getElementsByTagName("div").PhoneIndexUpPartBG.className   = "animated slideInDown delay-1s";
    },
    methods: {
        /* 切換到下一頁(手機版首頁介紹) */
        ChangeNextPage:function() {
            app.DelayRoutePush("/phoneAbout",0);
        },
    },
};