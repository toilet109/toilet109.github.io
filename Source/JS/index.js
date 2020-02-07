/*
var router = new VueRouter({
    routes: [
        { path: '/index/:id', component: Index },
        { path: '/Phone/index/:id', component: PhoneIndex},
        { path: '*', component: Index},

    ]
})
*/
var IndexView = {
    template: 
    `
        <div>AAA</div>
    `,
    
};

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
    data() {
        return {
            Page: 1,
        }
    },
    mounted() {
        document.getElementsByTagName("div").IndexBackEnd.className    = "animated fadeIn      delay-1s";
        document.getElementsByTagName("div").IndexBackground.className = "animated fadeOut     delay-5s";
        document.getElementsByTagName("div").IndexUpPartBG.className   = "animated slideInDown delay-1s";
    },
    methods: {
        ChangeNextPage:function() {
            this.$router.push("/phoneAbout");
        },
    },
};

var phoneAboutView = {
    props: ['StudentGroups'],
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
            
            setTimeout(() => {
                this.$router.push("/phone");
            }, 3000); 
        },
        ChangeNextPage:function() {

            document.getElementsByTagName("div").MenuViewBackground.className   = "animated fadeOutLeft  delay-2s";
            document.getElementsByTagName("div").MenuViewTitle.className        = "animated fadeOutUp    delay-1s";
            document.getElementsByTagName("div").MenuViewMenu.className         = "animated fadeOutLeft  delay-1s";
            document.getElementsByTagName("div").MenuViewFacebookIcon.className = "animated fadeOutDown  delay-1s";
            document.getElementsByTagName("div").RightBtn.className             = "animated fadeOutRight delay-1s";
            setTimeout(() => {
                this.$router.push("/phoneProject");
            }, 3000); 
        },
    },
};

var PhoneProjectView = {
    props: ['StudentGroups'],
    template: 
    `
        <div>
            <div id="ProjectViewBackground"></div>
                
            <div id="ProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="ProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="LeftBtn">
                <a @click="ChangeBeforePage()">
                    <img height="75%" width="75%" src="./Source/IMG/LeftBTN.svg" />
                </a>
            </div>

            <a @click="ChangeNextPage('Art')">Next</a>

        </div>
    `,
    mounted() {
        document.getElementsByTagName("div").ProjectViewBackground.className        = "animated slideInLeft delay-0s";
        document.getElementsByTagName("div").ProjecTitleViewBackground.className    = "animated fadeInDown  delay-3s";
        document.getElementsByTagName("div").ProjecTitleViewTitle.className         = "animated fadeInDown  delay-4s";
        document.getElementsByTagName("div").LeftBtn.className                      = "animated fadeInRight delay-4s";
    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").ProjectViewBackground.className        = "animated slideOutRight delay-4s";
            document.getElementsByTagName("div").ProjecTitleViewBackground.className    = "animated fadeOutUp     delay-2s";
            document.getElementsByTagName("div").ProjecTitleViewTitle.className         = "animated fadeOutUp     delay-1s";
            document.getElementsByTagName("div").LeftBtn.className                      = "animated fadeOutRight  delay-1s";            
            setTimeout(() => {
                this.$router.push("/phoneAbout");
            }, 5000)
        },
        ChangeNextPage:function(ProjectType) {
            this.$router.push("/phoneProject/"+ProjectType);
        }
    },
};

var PhoneProjectTypeView = {
    props: ['StudentGroups'],
    template: 
    `
        <div>
            <div id="ProjectViewBackground"></div>
                
            <div id="ProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="ProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="LeftBtn">
                <a @click="ChangeBeforePage()">
                    <img height="75%" width="75%" src="./Source/IMG/LeftBTN.svg" />
                </a>
            </div>

            <a @click="ChangeNextPage(0)">Next</a>

        </div>
    `,
    methods: {
        ChangeBeforePage:function() {
            this.$router.back();
        },
        ChangeNextPage:function(ProjectID) {
            this.$router.push("/phoneProjectView/"+ProjectID);
        }
    },
};

var PhoneOnlyProjectView = {
    props: ['StudentGroups'],
    template: 
    `
        <div>
            <div id="ProjectViewBackground"></div>
                
            <div id="ProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="ProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="LeftBtn">
                <a @click="ChangeBeforePage()">
                    <img height="75%" width="75%" src="./Source/IMG/LeftBTN.svg" />
                </a>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col center">
                        <img height="7.5%" width="7.5%" src="./Source/IMG/LeftBTN.svg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col center">
                        <img height="7.5%" width="7.5%" src="./Source/IMG/RightBTN.svg" />
                    </div>
                </div>
            </div>            

            <div id="ProjectViewProjectImageBlock">
                <img width="100%" height="100%" v-bind:src="ProjectPhotoPath" />
            </div>

            <div id="ProjectViewMetaTextBlock">
                <p>{{ProjectMeta}}</p>
            </div>

            <div id="ProjectViewBottomBTNBlock">
                <div @click="SetProjectAboutView(true)" class="ProjectBTN">作品介紹</div>
                <div @click="SetProjectMumberView(true)" class="ProjectBTN">製作成員</div>
                <div id="ProjectViewFaceBookBTN">
                    <a v-bind:href="Link" target="Web_FB">
                         <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewFacebookIcon.svg" />
                    </a>
                </div>
            </div>

            <div v-if="IsProjectAboutView || IsProjectMumberView" class="ProjectViewMask"></div>
                
            <div v-if="IsProjectAboutView" id="ProjectAboutView" class="animated slideInUp">
                <a class="CloseBTN" @click="SetProjectAboutView(false)">[X]</a>
                <p><br><br></p>
                <video id="VideoView" width="100%" height="30%" preload="none" loop="loop" controls="controls">
                    <source v-bind:src="ProjectMoviePath" type="video/mp4">
                    <p>錯誤！瀏覽器不支援Video播放器</p>
                </video>
                
                <div class="ProjectAboutTextBlock">
                    <br><p>{{ProjectMeta}}</p>
                </div>
            </div>

            <div v-if="IsProjectMumberView" id="ProjectMumberView" class="animated slideInUp">
                <a class="CloseBTN" @click="SetProjectMumberView(false)">[X]</a>
                <p><br><br></p>
                <img width="100%" height="30%" v-bind:src="ImagePhotoPath" />
                    
                <div class="ProjectAboutTextBlock">
                    <br><p>{{About}}</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            IsProjectAboutView  : false,
            IsProjectMumberView : false,
            Link                : StudentGroups.data.FaceBookLink,
            ImagePhotoPath      : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ImagePhotoPath,
            About               : StudentGroups.data.GroupsData[this.$route.params.ProjectName].About,
            ProjectMeta         : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ProjectMeta,
            ProjectMoviePath    : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ProjectMoviePath,
            ProjectPhotoPath    : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ProjectPhotoPath,
        }
    },
    mounted() {
        //document.getElementsByTagName("div").ProjectViewBackground.className        = "animated slideInLeft delay-1s";
        //document.getElementsByTagName("div").ProjecTitleViewBackground.className    = "animated fadeInDown  delay-3s";
        //document.getElementsByTagName("div").ProjecTitleViewTitle.className         = "animated fadeInDown  delay-4s";
        //document.getElementsByTagName("div").LeftBtn.className                      = "animated fadeInRight delay-4s";
        document.getElementsByTagName("div").ProjectViewProjectImageBlock.className = "animated fadeInUp    delay-4s";
        document.getElementsByTagName("div").ProjectViewMetaTextBlock.className     = "animated fadeInUp    delay-4s";
        document.getElementsByTagName("div").ProjectViewBottomBTNBlock.className    = "animated fadeInUp    delay-3s";

    },
    methods: {
        ChangeBeforePage:function() {
            //document.getElementsByTagName("div").ProjectViewBackground.className        = "animated slideOutRight delay-4s";
            //document.getElementsByTagName("div").ProjecTitleViewBackground.className    = "animated fadeOutUp     delay-2s";
            //document.getElementsByTagName("div").ProjecTitleViewTitle.className         = "animated fadeOutUp     delay-1s";
            //document.getElementsByTagName("div").LeftBtn.className                      = "animated fadeOutRight  delay-1s";
            document.getElementsByTagName("div").ProjectViewProjectImageBlock.className = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").ProjectViewMetaTextBlock.className     = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").ProjectViewBottomBTNBlock.className    = "animated fadeOutDown   delay-2s";
                
            setTimeout(() => {
                this.$router.back();
            },4000);
        },
        SetProjectAboutView:function(NextToShow) {
            if(!NextToShow){
                document.getElementsByTagName("div").ProjectAboutView.className = "animated fadeOutDown";
            }
        
            setTimeout(() => {
                this.IsProjectAboutView = NextToShow;
            },500);
        },
        SetProjectMumberView:function(NextToShow) {
            if(!NextToShow){
                document.getElementsByTagName("div").ProjectMumberView.className = "animated fadeOutDown";
            }
        
            setTimeout(() => {
                this.IsProjectMumberView = NextToShow;
            },500);
        }
    },
};

var app = new Vue({
    el:"#app",
    data() {
        return {
            StudentGroups: Object,
            IsInit: true,
            IsGoBack: false,
        }
    },
    mounted() {
        this.StudentGroups = StudentGroups;
        document.getElementsByTagName("div").InitView.style.display = "none"; 
    },
    beforeUpdate() {
        if(this.IsInit){/*
            this.IsInit = false;
            if (navigator.userAgent.match(/(Android|iPhone|iPod|ios|iPad|WebOS)/i)){
                this.$router.push("/phone");
            }else{
                this.$router.push("/");
            }*/
        }
    },
    router: new VueRouter({
        routes:[
            { path: `/foo`, name:`foo`, component: { template: `<div>ss</div>` } },
            { path: `/bar`, name:`bar`, component: { template: `<div>bar</div>` } },
            { 
                path: `/`,
                name: `首頁`,
                component: IndexView 
            },
            { 
                path: `/Project`,
                name: `作品一覽`,
                component: IndexView
            },
            { 
                path: `/Project/:ProjectType`,
                name: `作品專欄`,
                component: IndexView 
            },
            { 
                path: `/ProjectView/:ProjectName`,
                name: `小組作品`,
                component: IndexView
            },
            { 
                path: `/phone`,
                name: `手機板首頁`,
                component: PhoneIndexView
            },
            { 
                path: `/phoneAbout`,
                name: `手機板首頁介紹`,
                component: phoneAboutView
            },
            {
                path: `/phoneProject`,
                name: `手機板作品一覽`,
                component: PhoneProjectView
            },
            { 
                path: `/phoneProject/:ProjectType`,
                name: `手機板作品專欄`,
                component: PhoneProjectTypeView
            },
            {
                path: `/phoneProjectView/:ProjectName`,
                name: `手機板小組作品`,
                component: PhoneOnlyProjectView
            },
        ]
    }),
    watch: {
        '$route' (to, from) {
            if(from.name === "手機板作品專欄" && to.name === "手機板作品一覽"){
                this.IsGoBack = true;
            }
        }
    }
});
