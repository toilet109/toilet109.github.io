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
        /* 文字載入時用的動畫 */
        document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeInUp    delay-1s";
    },
    methods: {
        /* 點擊畫面，若手機是垂直時則將文字以動畫退出並回到首頁 */
        ChangeHomePage:function() {
            if(window.orientation === 90){
                document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeOutDown    delay-1s";
                app.DelayRoutePush("/",2000);
            }
        }
    },
};