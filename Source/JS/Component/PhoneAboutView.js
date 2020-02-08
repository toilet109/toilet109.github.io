var PhoneAboutView = {
    template: 
    `
        <div>
            <div id="MenuViewBackground"></div>

            <div id="MenuViewTitle">
                <img @click="ChangeBeforePage()" height="75%" width="75%" src="./Source/IMG/PhoneGridTitle.svg" />
            </div>

            <div id="MenuViewMenu">
                <img  @click="ChangeNextPage()" height="100%" width="100%" src="./Source/IMG/PhoneMenu.svg" />
            </div>

            <div id="MenuViewFacebookIcon">
                <a v-bind:href="Link" target="Web_FB">
                    <img height="20%" width="20%" src="./Source/IMG/PhoneMenuViewFacebookIcon.svg" />
                </a>
            </div>

            <div id="RightBtn">
                <a @click="ChangeNextPage()">
                    <img height="50%" width="50%" src="./Source/IMG/RightBTN.svg" />
                </a>
            </div>
        </div>
    `,
    data() {
        return {
            Link : StudentGroups.data.FaceBookLink 
        }
    },
    mounted() {
        document.getElementsByTagName("div").MenuViewBackground.className   = "animated fadeInLeft delay-1s";
        document.getElementsByTagName("div").MenuViewTitle.className        = "animated fadeInDown delay-2s";
        document.getElementsByTagName("div").MenuViewMenu.className         = "animated fadeInLeft delay-2s";
        document.getElementsByTagName("div").MenuViewFacebookIcon.className = "animated fadeInUp   delay-2s";
        document.getElementsByTagName("div").RightBtn.className             = "animated fadeInRight delay-3s";
    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").MenuViewBackground.className   = "animated fadeOutDown delay-2s";
            document.getElementsByTagName("div").MenuViewTitle.className        = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").MenuViewMenu.className         = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").MenuViewFacebookIcon.className = "animated fadeOutDown delay-1s";
            document.getElementsByTagName("div").RightBtn.className             = "animated fadeOutDown delay-1s";
            
            app.DelayRoutePush("/phone",3000);
        },
        ChangeNextPage:function() {

            document.getElementsByTagName("div").MenuViewBackground.className   = "animated fadeOutLeft  delay-2s";
            document.getElementsByTagName("div").MenuViewTitle.className        = "animated fadeOutUp    delay-1s";
            document.getElementsByTagName("div").MenuViewMenu.className         = "animated fadeOutLeft  delay-1s";
            document.getElementsByTagName("div").MenuViewFacebookIcon.className = "animated fadeOutDown  delay-1s";
            document.getElementsByTagName("div").RightBtn.className             = "animated fadeOutRight delay-1s";
            
            app.DelayRoutePush("/phoneProject",3000);
        },
    },
};