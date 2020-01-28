var IndexViewCtl = new Vue({
    el:"#IndexView",
    data:{
        State: 0,
        NowSelectGroupID:0,
        NextSelectGroupID:0,
        StudentGroups: Object,
    },
    mounted() {
        this.StudentGroups = StudentGroups;
    },
    methods: {
        /* 向下翻頁 */
        DownPage:function(){
            this.State++;
        },
        /* 向上翻頁 */
        UpPage:function(){
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

    },
});