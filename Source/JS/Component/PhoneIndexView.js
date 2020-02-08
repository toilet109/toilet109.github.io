var PhoneIndexView = {
    template: 
    `
        <div>
            <div id="IndexBackEnd">
                <div id="IndexBackground" class="IndexBackground"></div>
            </div>

            <div id="IndexUpPartBG">
                <div class="animated slideOutUp delay-5s">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneUpPartBG.svg" />
                </div>
            </div>

            <div id="IndexUpPartChineseTitle" class="animated fadeInDownBig delay-2s">
                <div class="animated slideOutUp delay-4s">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneTitle.svg" />
                </div>
            </div>

            <div id="IndexUpPartEnglishTitle" class="animated fadeInDownBig delay-2s">
                <div  class="animated slideOutUp delay-4s">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneEnglishTitle.svg" />
                </div>
            </div>

            <div id="IndexTitle" class="animated fadeIn delay-3s ">
                <div class="animated slideOutDown delay-5s ">
                    <img height="100%" width="100%" src="./Source/IMG/PhoneGridTitle.svg" />
                </div>
            </div>

            <!--置底-->
            <div id="DownBtn" class="animated fadeIn delay-6s">
                <a @click="ChangeNextPage()">
                    <img height="10%" width="10%" src="./Source/IMG/DownBTN.svg" />
                </a>
            </div>
        </div>
    `,
    mounted() {
        document.getElementsByTagName("div").IndexBackEnd.className    = "animated fadeIn      delay-1s";
        document.getElementsByTagName("div").IndexBackground.className = "animated fadeOut     delay-5s";
        document.getElementsByTagName("div").IndexUpPartBG.className   = "animated slideInDown delay-1s";
    },
    methods: {
        ChangeNextPage:function() {
            app.DelayRoutePush("/phoneAbout",0);
        },
    },
};