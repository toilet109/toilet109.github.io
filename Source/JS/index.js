var app = new Vue({
    el:"#app",
    data() {
        return {
            IsInit                       : false , //是否正式完成初始化
            ProjectViewIsGoBack          : false , //是否觸發返回事件(1)
            ProjectTypeViewIsGoBack      : false , //是否觸發返回事件(2)
            Lock                         : false , //控制Vue-Router切換的自栓鎖
            NowSelectID                  : 0     , //選擇的作品索引值ID
        }
    },
    mounted() {
        /* 避免初始化時Vue元件外洩破壞美觀的保護遮罩擋住，在Vue元件已完成載入並render後自動將其顯示設定關閉 */
        document.getElementsByTagName("div").InitView.style.display = "none"; 
        
        setInterval(() => {
            this.ChangeView();
        },500);
        
    },
    /* Vue路由(核心) */
    router: new VueRouter({
        routes:[
            { 
                path: `/`,
                name: `首頁`,
                component: IndexView 
            },
            { 
                path: `/Project`,
                name: `作品一覽`,
                component: ProjectView
            },
            { 
                path: `/Project/:ProjectType`,
                name: `作品專欄`,
                component: ProjectTypeView 
            },
            { 
                path: `/ProjectView`,
                name: `小組作品`,
                component: OnlyProjectView
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
        //含自栓鎖的Vue-Router返回
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
        },
        ChangeView:function(){
            if (navigator.userAgent.match(/(Android|iPhone|iPod|ios|iPad|WebOS)/i)){
                if(window.orientation === 90){
                    location.assign("./index.html#/phoneCantTransform");
                }else{
                    if (this.$route.path === "/") {
                        this.$router.push("/phone");
                    }else if(this.$route.path === "/Project") {
                        this.$router.push("/phoneProject");
                    }else if(RegExp(/^\/Project\/((?:[^\/]+?))(?:\/(?=$))?$/i).test(this.$route.path)) {
                        this.$router.push("/phoneProject/"+ this.$route.params.ProjectType);
                    }else if(this.$route.path === "/ProjectView") {
                        this.$router.push("/phoneProjectView");
                    }
                }
            }else{
                if (this.$route.path === "/phone") {
                    this.$router.push("/");
                }else if(this.$route.path === "/phoneAbout") {
                    this.$router.push("/");
                }else if(this.$route.path === "/phoneProject") {
                    this.$router.push("/Project");
                }else if(RegExp(/^\/phoneProject\/((?:[^\/]+?))(?:\/(?=$))?$/i).test(this.$route.path)) {
                    this.$router.push("/Project/"+ this.$route.params.ProjectType);
                }else if(this.$route.path === "/phoneProjectView") {
                    this.$router.push("/ProjectView");
                }
            }
        }
    },
    watch: {
        '$route' (to, from) {
            /* 檢測'作品專欄'是否發生是否發生返回載入 */
            if((from.name === "小組作品" && to.name === "作品專欄")||(from.name === "手機版小組作品" && to.name === "手機版作品專欄")){
                app.ProjectTypeViewIsGoBack = true;
            }else{
                app.ProjectTypeViewIsGoBack = false;
            }

            /* 檢測'作品一覽'是否發生是否發生返回載入 */
            if((from.name === "作品專欄" && to.name === "作品一覽")||(from.name === "手機版作品專欄" && to.name === "手機版作品一覽")){
                app.ProjectViewIsGoBack = true;
            }else{
                app.ProjectViewIsGoBack = false;
            }

        }
    }
});