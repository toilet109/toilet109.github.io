var StudentGroups = new Object();

StudentGroups.data = {
    SelectID: 0,
    GroupsData:[
        {},
    ]
};


StudentGroups.event = {
    //切換下一組群組的資料 + 回傳索引
    GetNextGroup:function(){
        StudentGroups.data.SelectID++;
        if(StudentGroups.data.SelectID === StudentGroups.data.GroupsData.length()){
            StudentGroups.data.SelectID = 0;
        }
        return StudentGroups.data.GroupsData[StudentGroups.data.SelectID];
    },
    //切換上一組群組的資料 + 回傳索引
    GetBeforeGroup:function(){
        StudentGroups.data.SelectID--;
        if(StudentGroups.data.SelectID === -1){
            StudentGroups.data.SelectID = StudentGroups.data.GroupsData.length()-1;
        }
        return StudentGroups.data.GroupsData[StudentGroups.data.SelectID];
    },
    GetNowSelect:function() {
        return StudentGroups.data.GroupsData[StudentGroups.data.SelectID];
    }
}