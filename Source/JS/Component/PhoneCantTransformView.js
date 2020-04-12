const PhoneCantTransformView = {
    template: 
    `
        <div>
            <div id="PhoneCantTransformViewBackground" @click="ChangeHomePage()"></div>
            <div id="PhoneCantTransform">
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
            /* 當離開手機橫向後切換頁面 */   
            if(window.orientation === 0 || window.orientation === 180 || window.orientation === undefined || (window.orientation === undefined && screen.mozOrientation == undefined && window.outerWidth > window.outerHeight)){
                document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeOutDown    delay-500ms";
                app.DelayRouteBack();
            /* 還是橫向但按了一下 */   
            }else{
                document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeOutDown    delay-0s";
                setTimeout(() => {
                    document.getElementsByTagName("div").PhoneCantTransform.className = "animated fadeInUp       delay-0s";
                },500);
            }
        }
    },
};