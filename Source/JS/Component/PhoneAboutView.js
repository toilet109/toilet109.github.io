const PhoneAboutView = {
    template: 
    `
        <div>
            <div id="PhoneMenuViewBackEnd"></div>
            <div id="PhoneMenuViewBackground"></div>
            <div id="PhoneCtlViewMaskBlock"></div>

            <div id="PhoneMenuViewTitle">
                <img @click="ChangeBeforePage()" height="80%" width="80%" src="./Source/IMG/PhoneGridTitle.svg" />
            </div>

            <div id="dotGroup1">
                <img class="startLightDot1" height="60%" width="60%" src="./Source/IMG/dot1.svg" />
            </div>

            <div id="dotGroup2">
                <img class="startLightDot2" height="100%" width="100%" src="./Source/IMG/dot2.svg" />
            </div>

            <div id="dotGroup3">
                <img class="startLightDot3" height="60%" width="60%" src="./Source/IMG/dot3.svg" />
            </div>

            <div id="dotGroup4">
                <img class="startLightDot4" height="60%" width="60%" src="./Source/IMG/dot4.svg" />
            </div>

            <div id="PhoneMenuViewFacebookIcon">
                <a v-bind:href="Link" target="Web_FB">
                    <img height="20%" width="20%" src="./Source/IMG/PhoneMenuViewFacebookIcon.svg" />
                </a>
            </div>

            <div id="PhoneRightBtn">
                <a @click="ChangeNextPage()">
                    <img height="45%" width="45%" src="./Source/IMG/ProjectInfo.svg" />
                </a>
            </div>
        </div>
    `,
    data() {
        return {
            Lock           : false                      , //是否鎖定
            IsReMount      : false                      , //是否有二次載入(反向載入)的情況
            Link           : StudentGroups.data.FaceBookLink , //載入FB連結
            WhichIs        : StudentGroups.data.WhichIs , //'放視大賞'連結
            WhyCall        : StudentGroups.data.WhyCall , //'聯絡資訊'連結
        }
    },
    async mounted() {
        try {
            /* 用同位異步方式與await等待app元件優先載入完成，並讀取此頁面是否發生二次載入(選擇動畫方向用) */
            this.IsReMount = await(app.AboutViewIsGoBack);
        } catch (error) {
            /* 當路由直接指向此頁時，直接視為初次載入 */
            this.IsReMount = false;
        }

        /* 執行載入顯示說明的元件動畫 */
        if(!this.IsReMount){
            document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeInRight delay-1500ms";
        }else{
            document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeInLeft delay-1500ms";
        }

        document.getElementsByTagName("div").PhoneMenuViewBackground.className   = "animated fadeInLeft delay-500ms";
        document.getElementsByTagName("div").PhoneMenuViewTitle.className        = "animated fadeInDown delay-1s";
        document.getElementsByTagName("div").PhoneMenuViewFacebookIcon.className = "animated fadeInUp   delay-1s";
        document.getElementsByTagName("div").dotGroup1.className                 = "animated fadeIn     delay-2s";
        document.getElementsByTagName("div").dotGroup2.className                 = "animated fadeIn     delay-2s";
        document.getElementsByTagName("div").dotGroup3.className                 = "animated fadeIn     delay-2s";
        document.getElementsByTagName("div").dotGroup4.className                 = "animated fadeIn     delay-2s";

        /* 初始化化動監控事件 */
        this.SetSwipe(event);
    },
    methods: {
        /* 初始化化動監控事件 */
        SetSwipe:function(event) {
            /* 底遮罩滑動控制 */
            $("#PhoneCtlViewMaskBlock").swipe( {
                swipeDown:function(event, direction, distance, duration, fingerCount, fingerData) {
                    PhoneAboutView.methods.ChangeBeforePage();
                },
                swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
                    PhoneAboutView.methods.ChangeNextPage();
                },
                threshold:0
            });
        },
        /* 切換到上一頁(手機版首頁) */
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").PhoneCtlViewMaskBlock.style.display = `none`;
            /* 元件皆向下滑動的動畫 */
            document.getElementsByTagName("div").dotGroup1.className                 = "animated fadeOut     delay-0s";
            document.getElementsByTagName("div").dotGroup2.className                 = "animated fadeOut     delay-0s";
            document.getElementsByTagName("div").dotGroup3.className                 = "animated fadeOut     delay-0s";
            document.getElementsByTagName("div").dotGroup4.className                 = "animated fadeOut     delay-0s";
            document.getElementsByTagName("div").PhoneMenuViewBackEnd.className      = "animated fadeOut     delay-1500ms";
            document.getElementsByTagName("div").PhoneMenuViewBackground.className   = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").PhoneMenuViewTitle.className        = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").PhoneMenuViewFacebookIcon.className = "animated fadeOutDown delay-500ms";
            document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeOutDown delay-500ms";
            
            app.DelayRoutePush("/phone",2000);
        },
        /* 切換到下一頁(手機版作品一覽) */
        ChangeNextPage:function() {
            document.getElementsByTagName("div").PhoneCtlViewMaskBlock.style.display = `none`;
            /* 元件收起並將界面向右切換移動的動畫 */
            document.getElementsByTagName("div").dotGroup1.className                 = "animated fadeOut      delay-0s";
            document.getElementsByTagName("div").dotGroup2.className                 = "animated fadeOut      delay-0s";
            document.getElementsByTagName("div").dotGroup3.className                 = "animated fadeOut      delay-0s";
            document.getElementsByTagName("div").dotGroup4.className                 = "animated fadeOut      delay-0s";
            document.getElementsByTagName("div").PhoneMenuViewBackground.className   = "animated fadeOutLeft  delay-1s";
            document.getElementsByTagName("div").PhoneMenuViewTitle.className        = "animated fadeOutUp    delay-500ms";
            document.getElementsByTagName("div").PhoneMenuViewFacebookIcon.className = "animated fadeOutDown  delay-500ms";
            document.getElementsByTagName("div").PhoneRightBtn.className             = "animated fadeOutLeft  delay-500ms";
            
            app.DelayRoutePush("/WaitView",1500);
        },
    },
};