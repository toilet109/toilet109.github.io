var app = new Vue({
    el:"#app",
    data() {
        return {
            StudentGroups: Object,
            IsInit: true,
            ProjectViewIsGoBack: false,
            ProjectTypeViewIsGoBack: false,
            Lock: false,
            NowSelectID: 0,
        }
    },
    mounted() {
        this.StudentGroups = StudentGroups;
        document.getElementsByTagName("div").InitView.style.display = "none"; 
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
                name: `手機版首頁`,
                component: PhoneIndexView
            },
            { 
                path: `/phoneAbout`,
                name: `手機版首頁介紹`,
                component: PhoneAboutView
            },
            {
                path: `/phoneProject`,
                name: `手機版作品一覽`,
                component: PhoneProjectView,
            },
            { 
                path: `/phoneProject/:ProjectType`,
                name: `手機版作品專欄`,
                component: PhoneProjectTypeView
            },
            {
                path: `/phoneProjectView`,
                name: `手機版小組作品`,
                component: PhoneOnlyProjectView
            },
            {
                path: `/phoneCantTransform`,
                name: `不支援手機旋轉`,
                component: PhoneCantTransformView
            },
        ]
    }),
    methods: {
        DelayRouteBack:function(TimeOut) {
            if(!this.IsLock){
                this.IsLock = true;

                setTimeout(() => {
                    this.$router.back();
                    this.IsLock  = false;
                },TimeOut);
            }
        },
        //含自栓鎖的Vue-Router控制
        DelayRoutePush:function(PushRoute,TimeOut) {
            if(!this.IsLock){
                this.IsLock = true;

                setTimeout(() => {
                    this.$router.push(PushRoute);
                    this.IsLock  = false;
                },TimeOut);
            }
        }
    },
    watch: {
        '$route' (to, from) {
            if(from.name === "手機版作品專欄" && to.name === "手機版作品一覽"){
                app.ProjectViewIsGoBack = true;
            }else{
                app.ProjectViewIsGoBack = false;
            }

            if(from.name === "手機版小組作品" && to.name === "手機版作品專欄"){
                app.ProjectTypeViewIsGoBack = true;
            }else{
                app.ProjectTypeViewIsGoBack = false;
            }
        }
    }
});

if(app.IsInit && app.$route.path === "/"){
    app.IsInit = false;
    if (navigator.userAgent.match(/(Android|iPhone|iPod|ios|iPad|WebOS)/i)){
        app.$router.push("/phone");
    }else{
        app.$router.push("/");
    }
}
/*
if(window.orientation === 90){
    app.$router.push("/CantTransform");
}*/