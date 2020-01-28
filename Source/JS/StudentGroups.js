var StudentGroups = new Object();

StudentGroups.data = {
    SelectID: 0,
    GroupsData:[
        /*
        [*]Example:
        ---------------------------------------
        */
        {
            Name             : "王小明", //組員名稱
            About            : "窩的簡介被丟到馬桶了 (OAQ)", //自介
            ProjectMeta      : "火柴人集體升天", //作品介紹
            ImagePhotoPath   : "../IMG/StudentGroupsImagePhoto/火柴人.gif", //形象照路徑
            ProjectPhotoPath : "../IMG/StudentGroupsProjectPhoto/火柴人集體升天.png", //作品照片路徑
            ProjectMoviePath : "../IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4", //作品影片路徑
        },  
        {
            Name             : "", //組員名稱
            About            : "", //自介
            ProjectMeta      : "", //作品介紹
            ImagePhotoPath   : "", //形象照路徑
            ProjectPhotoPath : "", //作品照片路徑
            ProjectMoviePath : "", //作品影片路徑
        },
    ]
};


StudentGroups.event = {
    //切換下一組群組的資料 + 回傳索引
    GetNextGroup:function(){
        StudentGroups.data.SelectID++;
        if(StudentGroups.data.SelectID === StudentGroups.data.GroupsData.length){
            return StudentGroups.data.SelectID = 0;
        }
        return StudentGroups.data.SelectID
    },
    //切換上一組群組的資料 + 回傳索引
    GetBeforeGroup:function(){
        StudentGroups.data.SelectID--;
        if(StudentGroups.data.SelectID === -1){
            StudentGroups.data.SelectID = StudentGroups.data.GroupsData.length-1;
        }
        console.log( StudentGroups.data.SelectID);
        
        return StudentGroups.data.SelectID
    },
    //取得目前對應ID
    GetNowSelectID:function() {
        return StudentGroups.data.SelectID;
    }
}