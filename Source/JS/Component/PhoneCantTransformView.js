var PhoneCantTransformView = {
    template: 
    `
        <div>
            <div id="PhoneCantTransform" @click="ChangeHomePage()">
                <h2>網頁不支援手機橫向導覽<br>按任意一處以重新載入</h2>
            </div>
        </div>
    `,
    mounted() {
        document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeInUp    delay-1s";
    },
    methods: {
        ChangeHomePage:function() {
            if(window.orientation === 90){
                document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeOutDown    delay-1s";
                app.DelayRoutePush("/",2000);
            }
        }
    },
};