var PhoneCantTransformView = {
    template: 
    `
        <div>
            <div id="CantTransform" @click="ChangeHomePage()">
                <h1>網頁不支援手機橫向導覽<br>按任意一處以重新載入</h1>
            </div>
        </div>
    `,
    mounted() {
        document.getElementsByTagName("div").CantTransform.className = "animated fadeInUp    delay-1s";
    },
    methods: {
        ChangeHomePage:function() {
            if(window.orientation === 90){
                document.getElementsByTagName("div").CantTransform.className = "animated fadeOutDown    delay-1s";
                app.DelayRoutePush("/",2000);
            }
        }
    },
};