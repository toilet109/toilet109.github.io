var StudentGroups = new Object();

StudentGroups.data = {
    SelectID    : 0,
    WhereIs     :`https://www.google.com.tw/maps`,
    WhichIs     :`https://github.com/Lian0123/109-National-Tainan-University-Visual-Art-Design/`,
    WhyCall     :`mailto:#`,
    FaceBookLink:`https://www.facebook.com/`,
    GroupsData:[
        /*
        [*]Example:
        ---------------------------------------
        */
       /*
        {
            Name             : `王小明`, //組員名稱
            //About            : `窩的簡介被丟到馬桶了 (OAQ)`, //自介
            About            : `窩的簡介被丟到馬桶了WRWER的拉 窩的簡介被丟到馬桶了WRWER的拉 窩的簡介被丟到馬桶了WRWER的拉`, //自介
            //ProjectMeta      : `火柴人集體升天`, //作品介紹
            ProjectMeta      : `Wireframe 製作成本低,容易被修改、繪製快速,在開發初期是溝通和發想的重要步驟,節省時間和人力成本,又可防止開發中期發現缺漏或不合用導致全盤重來。很多時候案子都很趕,沒有時間讓 UI/UX在開發後期進行易用性測試,所以在 Wireframe 階段就要將易用性考慮進去,可以說未來所有的設計都是以 Wireframe 為基準。別小看它只是份簡單的框線圖稿,責任非常重大。`, //作品介紹
            //ImagePhotoPath   : `../IMG/StudentGroupsImagePhoto/火柴人.gif`, //形象照路徑
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            //ProjectPhotoPath : `../IMG/StudentGroupsProjectPhoto/火柴人集體升天.png`, //作品照片路徑
            ProjectPhotoPath : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //作品照片路徑
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
        */
        {
            Name             : `test001`, //作品名稱
            Type             : `PackagingDesign`, //作品種類
            About            : `test001-自介`, //自介
            ProjectMeta      : `test001-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test001-組員1`,
                `test001-組員2`,
                `test001-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test002`, //作品名稱
            Type             : `PackagingDesign`, //作品種類
            About            : `test002-自介`, //自介
            ProjectMeta      : `test002-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test002-組員1`,
                `test002-組員2`,
                `test002-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test003`, //作品名稱
            Type             : `PackagingDesign`, //作品種類
            About            : `test003-自介`, //自介
            ProjectMeta      : `test003-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test003-組員1`,
                `test003-組員2`,
                `test003-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test004`, //作品名稱
            Type             : `ThreeDimensionalModeling`, //作品種類
            About            : `test004-自介`, //自介
            ProjectMeta      : `test004-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test004-組員1`,
                `test004-組員2`,
                `test004-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test005`, //作品名稱
            Type             : `ThreeDimensionalModeling`, //作品種類
            About            : `test005-自介`, //自介
            ProjectMeta      : `test005-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test005-組員1`,
                `test005-組員2`,
                `test005-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test006`, //作品名稱
            Type             : `ThreeDimensionalModeling`, //作品種類
            About            : `test006-自介`, //自介
            ProjectMeta      : `test006-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test006-組員1`,
                `test006-組員2`,
                `test006-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test007`, //作品名稱
            Type             : `GraphicDesign`, //作品種類
            About            : `test007-自介`, //自介
            ProjectMeta      : `test007-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test007-組員1`,
                `test007-組員2`,
                `test007-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test008`, //作品名稱
            Type             : `GraphicDesign`, //作品種類
            About            : `test008-自介`, //自介
            ProjectMeta      : `test008-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test008-組員1`,
                `test008-組員2`,
                `test008-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test009`, //作品名稱
            Type             : `GraphicDesign`, //作品種類
            About            : `test009-自介`, //自介
            ProjectMeta      : `test009-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test009-組員1`,
                `test009-組員2`,
                `test009-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test010`, //作品名稱
            Type             : `PictureBooks`, //作品種類
            About            : `test010-自介`, //自介
            ProjectMeta      : `test010-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test010-組員1`,
                `test010-組員2`,
                `test010-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test011`, //作品名稱
            Type             : `PictureBooks`, //作品種類
            About            : `test011-自介`, //自介
            ProjectMeta      : `test011-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test011-組員1`,
                `test011-組員2`,
                `test011-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test012`, //作品名稱
            Type             : `PictureBooks`, //作品種類
            About            : `test012-自介`, //自介
            ProjectMeta      : `test012-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test012-組員1`,
                `test012-組員2`,
                `test012-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test013`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test013-自介`, //自介
            ProjectMeta      : `test013-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test013-組員1`,
                `test013-組員2`,
                `test013-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test014`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test014-自介`, //自介
            ProjectMeta      : `test014-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test014-組員1`,
                `test014-組員2`,
                `test014-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test015`, //作品名稱
            Type             : `Album`, //作品種類
            About            : `test015-自介`, //自介
            ProjectMeta      : `test015-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test015-組員1`,
                `test015-組員2`,
                `test015-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test016`, //作品名稱
            Type             : `Animation`, //作品種類
            About            : `test016-自介`, //自介
            ProjectMeta      : `test016-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test016-組員1`,
                `test016-組員2`,
                `test016-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test017`, //作品名稱
            Type             : `Animation`, //作品種類
            About            : `test017-自介`, //自介
            ProjectMeta      : `test017-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test017-組員1`,
                `test017-組員2`,
                `test017-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
        },
        {
            Name             : `test018`, //作品名稱
            Type             : `Animation`, //作品種類
            About            : `test018-自介`, //自介
            ProjectMeta      : `test018-作品介紹`, //作品介紹
            ImagePhotoPath   : `./Source/IMG/PhoneMenuViewFacebookIcon.svg`, //形象照路徑
            MumberName       : [   //組員名稱
                `test018-組員1`,
                `test018-組員2`,
                `test018-組員3`,
            ],
            ProjectDataPath  : [   //作品影片路徑
                `./Source/IMG/StudentGroupsProjectMovie/火柴人集體升天.mp4`
            ],
            ProjectPhotoPath : [   //作品照片路徑
                `./Source/IMG/PhoneMenuViewFacebookIcon.svg`
            ],
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
    },
    SetNowSelectID:function(SetID) {
        StudentGroups.data.SelectID = SetID;
    }
}