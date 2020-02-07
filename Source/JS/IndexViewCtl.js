var IndexViewCtl = new Vue({
    el:"#IndexView",
    data:{
        State: 0,
        BeforeState: 0,
        NowSelectGroupID:0,
        NextSelectGroupID:0,
        StudentGroups: Object,
        IsProjectAboutView: false,
        IsProjectMumberView: false,
        IsProjectMovieView: false,
    },
    mounted() {
        this.StudentGroups = StudentGroups;
        document.getElementsByTagName("div").InitView.style.display = "none"; //讓初始化的延遲界面不被顯示的遮罩關閉
    },
    methods: {
        /* 向下翻頁 */
        DownPage:function(){
            this.BeforeState = this.State;
            this.State++;
            if(this.State == 2){
                this.SetSwipe();
            }
        },
        /* 向上翻頁 */
        UpPage:function(){
            this.BeforeState = this.State;
            this.State--;
        },
        ChangeGroupEvent(IsGetNextPage){
            //後一位的作品
            if(IsGetNextPage){
                this.StudentGroups.event.GetNextGroup();
                this.NextSelectGroupID = this.StudentGroups.event.GetNowSelectID();
            //前一位的作品
            }else{
                this.StudentGroups.event.GetBeforeGroup();
                this.NextSelectGroupID = this.StudentGroups.event.GetNowSelectID();
            }
            //TODO:Run Animate.css event 
            this.NowSelectGroupID = this.NextSelectGroupID;
            this.RenderValue++;
        },
        SetSwipe:function() {
            setTimeout(() => {
                $("#CtlBlock").swipe( {
                    //Generic swipe handler for all directions
                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                        if(direction == "right"){
                            IndexViewCtl.ChangeGroupEvent(true);
                        }else if(direction == "left"){
                            IndexViewCtl.ChangeGroupEvent(false);
                        }
                    },
                    //Default is 75px, set to 0 for demo so any distance triggers swipe
                    threshold:0
                });
            }, 5000); 
        },
        SetProjectAboutView:function(ShowState) {
            this.IsProjectAboutView = ShowState;
        },
        SetProjectMumberView:function(ShowState) {
            this.IsProjectMumberView = ShowState;
        },
        SetProjectMovieView:function(ShowState) {
            this.IsProjectMovieView = ShowState;
        },
    },
});