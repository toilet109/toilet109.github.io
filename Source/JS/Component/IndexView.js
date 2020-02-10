var IndexView = {
    template: 
    `
    <div>
        <!--Load BG-->
        <div class="IndexBackground animated zoomIn delay-1s ">
        </div>
        
        <!--Load Line-->
        <div class="Liner animated zoomIn delay-2s">
            <!--Svg Line-->
        </div>

        <div class="container-fluid animated fadeInDown delay-1s">
            <!--第一列-->
            <div class="row">
                <div class="col">
                    <br><br><br><br>
                </div>
            </div>
            <!--第二列-->
            <div class="row">
                <div class="col">
                    <!--Load Left MainText-->
                    <div class="float-right animated fadeInRight delay-2s">
                        <!--Svg Title-->
                        <img class="float-right" height="90%" width="90%" src="./Source/IMG/Title.svg" />
                    </div>
                </div>
                <div class="float-left col">
                    <!--None-->
                </div>
            </div>

            <!--第三列-->
            <div class="row">
                <div class="float-right col">
                    <!--None-->
                </div>
                <div class="float-left col">
                    <!--Load Right MainText-->
                    <div class="animated fadeInLeft delay-3s">
                        <!--Svg Local-->
                        <img  height="75%" width="75%" src="./Source/IMG/SubTitle1.svg" />
                    </div>
                    <div class="animated fadeInLeft delay-4s">
                        <!--Svg Local-->
                        <img  height="75%" width="75%" src="./Source/IMG/SubTitle2.svg" />
                    </div>
                </div>
            </div>

            <!--第四列-->
            <div class="row">
                <br>
                <div class="float-right col">
                    <!--None-->
                </div>
                <div class="float-left col">
                    <div class="animated fadeInLeft delay-2s">
                        <!--Svg EngTitle--><br>
                        <img height="90%" width="90%" src="./Source/IMG/EnglishTitle.svg" />
                    </div>
                </div>
            </div>

        </div>


        <!--置底-->
        <div class="DownBtn">
            <a @click="DownPage()">
                <img height="2.5%" width="2.5%" src="./Source/IMG/DownBTN.svg" />
            </a>
        </div>
    </div>
    `,
    methods: {
        DownPage:function(params) {
            
        }
    },
};