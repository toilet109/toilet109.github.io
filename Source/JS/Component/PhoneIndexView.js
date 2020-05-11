const PhoneIndexView = {
    template: 
    `
        <div>

            <div id="PhoneInitView" class="PhoneInitView"></div>
            
            <div id="PhoneIndexBackEnd2"></div>
            <div id="PhoneIndexBackEnd">
                <img height="90%" width="90%" src="./Source/IMG/PhoneBackground.svg" />
                <!--div id="PhoneIndexBackground"></div-->
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
        </div>
    `,
    mounted() {    
        //初始化 計算偏移量 + 手動建立高度自適應
        setTimeout(() => { 
            let UpPartBGHight                                                = document.getElementsByTagName("div").PhoneIndexUpPartBG.getElementsByTagName("img")[0].height;
            document.getElementsByTagName("div").PhoneIndexBackEnd.style.top = (UpPartBGHight - window.outerHeight/16) + "px";
            document.getElementsByTagName("div").PhoneInitView.className     = "PhoneInitView animated fadeOut delay-500ms";
        },1000);

        /* 執行載入顯示首頁元件動畫 */
        setTimeout(() => { 
            document.getElementsByTagName("div").PhoneIndexBackEnd2.className                                          = "animated fadeIn        delay-0s";
            document.getElementsByTagName("div").PhoneIndexBackEnd.className                                           = "animated fadeIn        delay-500ms";
            document.getElementsByTagName("div").PhoneIndexBackEnd.className                                           = "animated fadeOut       delay-4500ms";
            document.getElementsByTagName("div").PhoneIndexUpPartBG.className                                          = "animated slideInDown   delay-500ms";
            document.getElementsByTagName("div").PhoneIndexUpPartBG.getElementsByTagName("div")[0].className           = "animated fadeOutUp     delay-4500ms";
            document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.className                                = "animated fadeInDownBig delay-1500ms";
            document.getElementsByTagName("div").PhoneIndexUpPartChineseTitle.getElementsByTagName("div")[0].className = "animated fadeOutUp     delay-3500ms";
            document.getElementsByTagName("div").PhoneIndexTitle.className                                             = "animated fadeIn        delay-2500ms";
            document.getElementsByTagName("div").PhoneIndexTitle.getElementsByTagName("div")[0].className              = "animated fadeOutDown   delay-4500ms";

            setTimeout(() => { 
                this.ChangeNextPage();
            },5500);
        },1500);

    },
    methods: {
        /* 切換到下一頁(手機版首頁介紹) */
        ChangeNextPage:function() {
            document.getElementsByTagName("div").PhoneIndexBackEnd2.className = "animated fadeOut delay-0s";
            app.DelayRoutePush("/phoneAbout",500);
        },
    },
};