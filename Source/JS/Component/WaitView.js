const WaitView = {
    template: 
    `
        <div>
            <div id="PhoneCantTransformViewBackground" @click="ChangeHomePage()"></div>
            <div id="PhoneCantTransform">
                <h1><br>Oops!<br><br></h1>
                <h2>目前清潔工在進行打掃<br>敬待5月30日午夜時分<br>維護結束之時<br><br>{{Timer}}<br><br></h2><h2>按任意一處<br>返回前一頁</h2>
            </div>
        </div>
    `,data() {
        return {
            StartTime: new Date("2020-05-30 00:00:00 GMT+080"),
            Timer: "",
        }
    },
    mounted() {
        /* 固定每1s更新索引值 */
        setInterval(() => {
            let tmpTimer = new Date(this.StartTime - new Date());

            if(tmpTimer.getMonth() < 10){
                this.Timer = `0`+tmpTimer.getMonth();
            }else{
                this.Timer = ``+tmpTimer.getMonth();
            }

            if(tmpTimer.getDate() < 10){
                this.Timer += `-0`+tmpTimer.getDate();
            }else{
                this.Timer += `-`+tmpTimer.getDate();
            }

            if(tmpTimer.getHours() < 10){
                this.Timer += ` 0`+tmpTimer.getHours();
            }else{
                this.Timer += ` `+tmpTimer.getHours();
            }

            if(tmpTimer.getMinutes() < 10){
                this.Timer += `:0`+tmpTimer.getMinutes();
            }else{
                this.Timer += `:`+tmpTimer.getMinutes();
            }

            if(tmpTimer.getSeconds() < 10){
                this.Timer += `:0`+tmpTimer.getSeconds();
            }else{
                this.Timer += `:`+tmpTimer.getSeconds();
            }
            
        },1000);

        /* 文字載入時用的動畫 */
        if (navigator.userAgent.match(/(Android|iPhone|iPod|ios|WebOS)/i)){
            document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h1")[0].className = "animated fadeInRight delay-500ms";
            document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[0].className = "animated fadeInRight delay-1s";
            document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[1].className = "animated fadeInRight delay-1500ms";
        }else{
            document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h1")[0].className = "animated fadeInDown delay-1500ms";
            document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[0].className = "animated fadeInDown delay-1s";
            document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[1].className = "animated fadeInDown delay-500ms";
        }


    },
    methods: {
        /* 點擊畫面，若手機是垂直時則將文字以動畫退出並回到上頁 */
        ChangeHomePage:function() {       
            if (navigator.userAgent.match(/(Android|iPhone|iPod|ios|WebOS)/i)){
                document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h1")[0].className = "animated fadeOutRight delay-1500ms";
                document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[0].className = "animated fadeOutRight delay-1s";
                document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[1].className = "animated fadeOutRight delay-500ms";
            }else{
                document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h1")[0].className = "animated fadeOutUp delay-500ms";
                document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[0].className = "animated fadeOutUp delay-1s";
                document.getElementsByTagName("div").PhoneCantTransform.getElementsByTagName("h2")[1].className = "animated fadeOutUp delay-1500ms";
            }

            app.DelayRouteBack(2000);
        },
        DownTimer:function() {
            
        }
    },
};