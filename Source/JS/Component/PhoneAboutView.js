const PhoneAboutView = {
    template: 
    `
        <div>
            <div id="PhoneMenuViewBackground"></div>

            <div id="PhoneMenuViewTitle">
                <img @click="ChangeBeforePage()" height="75%" width="75%" src="./Source/IMG/PhoneGridTitle.svg" />
            </div>

            <div id="PhoneMenuViewMenu">
                <a href="javascript:void(0);" @click="ChangeNextPage()">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneMenu.svg" />
                </a>
            </div>

            <div id="PhoneMenuViewFacebookIcon">
                <a v-bind:href="Link" target="Web_FB">
                    <img height="20%" width="20%" src="./Source/IMG/PhoneMenuViewFacebookIcon.svg" />
                </a>
            </div>

            <div id="PhoneRightBtn">
                <a @click="ChangeNextPage()">
                    <img height="50%" width="50%" src="./Source/IMG/RightBTN.svg" />
                </a>
            </div>
        </div>
    `,
    data() {
        return {
            Link           : StudentGroups.data.FaceBookLink , //載入FB連結
            WhichIs        : StudentGroups.data.WhichIs , //'放視大賞'連結
            WhyCall        : StudentGroups.data.WhyCall , //'聯絡資訊'連結
        }
    },
    mounted() {
        /* 執行載入顯示說明的元件動畫 */
        document.getElementsByTagName("div").PhoneMenuViewBackground.className   = "animated fadeInLeft delay-1s";
        document.getElementsByTagName("div").PhoneMenuViewTitle.className        = "animated fadeInDown delay-2s";
        document.getElementsByTagName("div").PhoneMenuViewMenu.className         = "animated fadeInLeft delay-2s";
        document.getElementsByTagName("div").PhoneMenuViewFacebookIcon.className = "animated fadeInUp   delay-2s";
        document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeInRight delay-2500ms";
    },
    methods: {
        /* 切換到上一頁(手機版首頁) */
        ChangeBeforePage:function() {
            /* 元件皆向下滑動的動畫 */
            document.getElementsByTagName("div").PhoneMenuViewBackground.className   = "animated fadeOutDown delay-2s";
            document.getElementsByTagName("div").PhoneMenuViewTitle.className        = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").PhoneMenuViewMenu.className         = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").PhoneMenuViewFacebookIcon.className = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeOutDown delay-1s";
            
            app.DelayRoutePush("/phone",3000);
        },
        /* 切換到下一頁(手機版作品一覽) */
        ChangeNextPage:function() {
            /* 元件收起並將界面向右切換移動的動畫 */
            document.getElementsByTagName("div").PhoneMenuViewBackground.className   = "animated fadeOutLeft  delay-2s";
            document.getElementsByTagName("div").PhoneMenuViewTitle.className        = "animated fadeOutUp    delay-1s";
            document.getElementsByTagName("div").PhoneMenuViewMenu.className         = "animated fadeOutLeft  delay-1s";
            document.getElementsByTagName("div").PhoneMenuViewFacebookIcon.className = "animated fadeOutDown  delay-1s";
            document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeOutRight delay-1s";
            
            app.DelayRoutePush("/phoneProject",3000);
        },
    },
};