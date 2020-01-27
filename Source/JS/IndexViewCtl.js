var IndexViewCtl = new Vue({
    el:"#IndexView",
    data:{
        State: 0,
        NowSelectGroup  : null, //Save Now Select Group Data, Type:Obect
        NextSelectGroup : null, //Save Next Select Group Data To Anime Change, Type:Obect

    },
    mounted() {
        NowSelectGroup = StudentGroups.event.GetNowSelect();
    },
    methods: {
        /* 向下翻頁 */
        DownPage:function(){
            this.State++;
        },
        /* 向下翻頁 */
        UpPage:function(){
            this.State--;
        },
        ChangeGroupEvent(SelectPart){
            //前一位的作品
            if(SelectPart === 0){
                NextSelectGroup = StudentGroups.event.GetBeforeGroup();
            //後一位的作品
            }else{
                NextSelectGroup = StudentGroups.event.GetNextGroup();
            }
        },

    },
});