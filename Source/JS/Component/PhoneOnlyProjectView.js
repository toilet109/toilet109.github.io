var PhoneOnlyProjectView = {
    template: 
    `
        <div>
            <div id="ProjectViewBackground"></div>
                
            <div id="ProjecTitleViewBackground">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitleBackgroun.svg" />
            </div>

            <div id="ProjecTitleViewTitle">
                <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewTitle.svg" />
            </div>

            <div id="LeftBtn">
                <a @click="ChangeBeforePage()">
                    <img height="50%" width="50%" src="./Source/IMG/LeftBTN.svg" />
                </a>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col center">
                        <img height="7.5%" width="7.5%" src="./Source/IMG/LeftBTN.svg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col center">
                        <img height="7.5%" width="7.5%" src="./Source/IMG/RightBTN.svg" />
                    </div>
                </div>
            </div>            

            <div id="ProjectViewProjectImageBlock">
                <img width="100%" height="100%" v-bind:src="ProjectPhotoPath" />
            </div>

            <div id="ProjectViewMetaTextBlock">
                <p>{{ProjectMeta}}</p>
            </div>

            <div id="ProjectViewBottomBTNBlock">
                <div @click="SetProjectAboutView(true)" class="ProjectBTN">作品介紹</div>
                <div @click="SetProjectMumberView(true)" class="ProjectBTN">製作成員</div>
                <div id="ProjectViewFaceBookBTN">
                    <a v-bind:href="Link" target="Web_FB">
                         <img height="100%" width="100%" src="./Source/IMG/PhoneProjectViewFacebookIcon.svg" />
                    </a>
                </div>
            </div>

            <div v-if="IsProjectAboutView || IsProjectMumberView" class="ProjectViewMask"></div>
                
            <div v-if="IsProjectAboutView" id="ProjectAboutView" class="animated slideInUp">
                <a class="CloseBTN" @click="SetProjectAboutView(false)">[X]</a>
                <p><br><br></p>
                <video id="VideoView" width="100%" height="30%" preload="none" loop="loop" controls="controls">
                    <source v-bind:src="ProjectMoviePath" type="video/mp4">
                    <p>錯誤！瀏覽器不支援Video播放器</p>
                </video>
                
                <div class="ProjectAboutTextBlock">
                    <br><p>{{ProjectMeta}}</p>
                </div>
            </div>

            <div v-if="IsProjectMumberView" id="ProjectMumberView" class="animated slideInUp">
                <a class="CloseBTN" @click="SetProjectMumberView(false)">[X]</a>
                <p><br><br></p>
                <img width="100%" height="30%" v-bind:src="ImagePhotoPath" />
                    
                <div class="ProjectAboutTextBlock">
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
            ImagePhotoPath      : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ImagePhotoPath,
            About               : StudentGroups.data.GroupsData[this.$route.params.ProjectName].About,
            ProjectMeta         : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ProjectMeta,
            ProjectMoviePath    : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ProjectMoviePath,
            ProjectPhotoPath    : StudentGroups.data.GroupsData[this.$route.params.ProjectName].ProjectPhotoPath,
        }
    },
    mounted() {
        document.getElementsByTagName("div").ProjectViewProjectImageBlock.className = "animated fadeInUp    delay-1s";
        document.getElementsByTagName("div").ProjectViewMetaTextBlock.className     = "animated fadeInUp    delay-1s";
        document.getElementsByTagName("div").ProjectViewBottomBTNBlock.className    = "animated fadeInUp    delay-0s";

    },
    methods: {
        ChangeBeforePage:function() {
            document.getElementsByTagName("div").ProjectViewProjectImageBlock.className = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").ProjectViewMetaTextBlock.className     = "animated fadeOutDown   delay-1s";
            document.getElementsByTagName("div").ProjectViewBottomBTNBlock.className    = "animated fadeOutDown   delay-2s";
                
            app.DelayRouteBack(3000);
        },
        SetProjectAboutView:function(NextToShow) {
            if(!NextToShow){
                document.getElementsByTagName("div").ProjectAboutView.className = "animated fadeOutDown";
            }
        
            setTimeout(() => {
                this.IsProjectAboutView = NextToShow;
            },500);
        },
        SetProjectMumberView:function(NextToShow) {
            if(!NextToShow){
                document.getElementsByTagName("div").ProjectMumberView.className = "animated fadeOutDown";
            }
        
            setTimeout(() => {
                this.IsProjectMumberView = NextToShow;
            },500);
        }
    },
};