var StudentGroups = new Object();

StudentGroups.data = {
    SelectID: 0,
    FaceBookLink:`https://www.facebook.com/`,
    GroupsData:[
        /*
        [*]Example:
        ---------------------------------------
        */
        {
            Name             : `王小明`, //組員名稱
            About            : `窩的簡介被丟到馬桶了 (OAQ)`, //自介
            //ProjectMeta      : `火柴人集體升天`, //作品介紹
            ProjectMeta      : `Wireframe 製作成本低,容易被修改、繪製快速,在開發初期是溝通和發想的重要步驟,節省時間和人力成本,又可防止開發中期發現缺漏或不合用導致全盤重來。很多時候案子都很趕,沒有時間讓 UI/UX在開發後期進行易用性測試,所以在 Wireframe 階段就要將易用性考慮進去,可以說未來所有的設計都是以 Wireframe 為基準。別小看它只是份簡單的框線圖稿,責任非常重大。`, //作品介紹
            //ImagePhotoPath   : `../IMG/StudentGroupsImagePhoto/火柴人.gif`, //形象照路徑
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            ProjectPhotoPath : `../IMG/StudentGroupsProjectPhoto/火柴人集體升天.png`, //作品照片路徑
            ProjectMoviePath : `../IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`, //作品影片路徑
        },  
        {
            Name             : ``, //組員名稱
            About            : ``, //自介
            ProjectMeta      : ``, //作品介紹
            ImagePhotoPath   : ``, //形象照路徑
            ProjectPhotoPath : ``, //作品照片路徑
            ProjectMoviePath : ``, //作品影片路徑
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
        return StudentGroups.data.SelectID
    },
    //取得目前對應ID
    GetNowSelectID:function() {
        return StudentGroups.data.SelectID;
    }
}