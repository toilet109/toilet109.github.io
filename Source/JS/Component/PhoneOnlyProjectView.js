var PhoneOnlyProjectView = {
    template: 
    `
        <div>
            <div id="PhoneProjectViewBackground"></div>
                
            <div id="PhoneProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="PhoneProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="PhoneBackBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/BackBTN.svg" />
                </a>
            </div>

            <div id="PhoneCtlMask" @click="CloseCtlMask()">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <h2><br>左右滑動以切換作品</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img height="50%" width="50%" src="./Source/IMG/LeftBTN.svg" />
                        </div>
                        <div class="col">
                            <img height="50%" width="50%" src="./Source/IMG/RightBTN.svg" />
                        </div>
                    </div>
                </div>
            </div>          

            <div id="PhoneProjectViewProjectImageBlock">
                <img width="100%" height="100%" v-bind:src="ProjectPhotoPath" />
            </div>

            <div id="PhoneProjectViewMetaTextBlock">
                <p>{{ProjectMeta}}</p>
            </div>

            <div id="PhoneProjectViewBottomBTNBlock">
                <div @click="SetProjectAboutView(true)" class="PhoneProjectBTN">作品介紹</div>
                <div @click="SetProjectMumberView(true)" class="PhoneProjectBTN">製作成員</div>
                <div id="PhoneProjectViewFaceBookBTN">
                    <a v-bind:href="Link" target="Web_FB">
                         <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewFacebookIcon.svg" />
                    </a>
                </div>
            </div>

            <div v-if="IsProjectAboutView || IsProjectMumberView" class="PhoneProjectViewMask"></div>
                
            <div v-if="IsProjectAboutView" id="PhoneProjectAboutView" class="animated slideInUp">
                <a class="PhoneCloseBTN" @click="SetProjectAboutView(false)">[X]</a>
                <p><br><br></p>
                <video id="PhoneVideoView" width="100%" height="30%" preload="none" loop="loop" controls="controls">
                    <source v-bind:src="ProjectMoviePath" type="video/mp4">
                    <p>錯誤！瀏覽器不支援Video播放器</p>
                </video>
                
                <div class="PhoneProjectAboutTextBlock">
                    <br><p>{{ProjectMeta}}</p>
                </div>
            </div>

            <div v-if="IsProjectMumberView" id="PhoneProjectMumberView" class="animated slideInUp">
                <a class="PhoneCloseBTN" @click="SetProjectMumberView(false)">[X]</a>
                <p><br><br></p>
                <img width="100%" height="30%" v-bind:src="ImagePhotoPath" />
                    
                <div class="PhoneProjectAboutTextBlock">
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

            NowSelectGroupID    :0,
        }
    },
    async mounted() {
        try{
            this.NowSelectGroupID = await(app.NowSelectID)
        } catch (error) {
            this.NowSelectGroupID = 0;
        };
        
        document.getElementsByTagName("div").PhoneProjectViewProjectImageBlock.className = "animated fadeInUp    delay-1s";
        document.getElementsByTagName("div").PhoneCtlMask.className                      = "animated fadeInUp    delay-1s";
        document.getElementsByTagName("div").PhoneProjectViewMetaTextBlock.className     = "animated fadeInUp    delay-1s";
        document.getElementsByTagName("div").PhoneProjectViewBottomBTNBlock.className    = "animated fadeInUp    delay-0s";

        this.SetSwipe();

        setInterval(() => {
            this.NowSelectGroupID = StudentGroups.event.GetNowSelectID();
        },500);
    },
    updated() {
        console.log(":"+this.NowSelectGroupID);
    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").PhoneProjectViewProjectImageBlock.className = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").PhoneCtlMask.className                      = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").PhoneProjectViewMetaTextBlock.className     = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").PhoneProjectViewBottomBTNBlock.className    = "animated fadeOutDown   delay-2s";
                
            app.DelayRouteBack(3000);
        },
        SetProjectAboutView:function(NextToShow) {
            if(!NextToShow){
                document.getElementsByTagName("div").PhoneProjectAboutView.className = "animated fadeOutDown";
            }
        
            setTimeout(() => {
                this.IsProjectAboutView = NextToShow;
            },500);
        },
        SetProjectMumberView:function(NextToShow) {
            if(!NextToShow){
                document.getElementsByTagName("div").PhoneProjectMumberView.className = "animated fadeOutDown";
            }
        
            setTimeout(() => {
                this.IsProjectMumberView = NextToShow;
            },500);
        },
        SetSwipe:function() {
                $("#PhoneProjectViewMetaTextBlock").swipe( {
                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                        if(direction == "right"){
                            StudentGroups.event.GetNextGroup();
                        }else if(direction == "left"){
                            StudentGroups.event.GetBeforeGroup();
                        }
                    },
                    threshold:0
                });
                
        },
        CloseCtlMask:function() {
            document.getElementsByTagName("div").PhoneCtlMask.style.display = "none";
        }
    },
    computed: {
        ImagePhotoPath:function() {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ImagePhotoPath;
        },
        About:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].About
        },
        ProjectMeta:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMeta
        },
        ProjectMoviePath:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectMoviePath
        },
        ProjectPhotoPath:function(value) {
            return StudentGroups.data.GroupsData[this.NowSelectGroupID].ProjectPhotoPath;
        }
    },
};