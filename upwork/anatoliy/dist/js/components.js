var FullScreen;
Vue.component('top-navigation', {
    template: `
    <div id="top-navigation" class="hide-sm">
        <div class="nav-radio w6 float-left selected " v-on:click="$root.select($root.options[0])" :id="$root.options[0].id">
            <label :for="$root.options[0].id" class="row align-center">
            <span class="align-center col col-4">
                <img :src="$root.options[0].img" :alt="$root.options[0].title" class="hide-on-hover">
                <img :src="$root.options[0].img_hover" class="show-on-hover" :alt="$root.options[0].title">
            </span>
            <span class="col col-12"></span>
            <span class="small">{{$root.options[0].title}}</span>
            <input type="radio" :value="$root.options[0].id" :id="$root.options[0].id"   name="sidebar-option"></label>
        </div>
        <div class="nav-buttons float-right row align-center">
            <button class="round button small" v-on:click="$root.select($root.options[7])">termin verienbaren</button>
            <button class="round button small" v-on:click="$root.select($root.options[6])">portfolio zuseden</button>
            <button class="round button small" v-on:click="$root.select($root.options[8])">kontaktdaten ubrmitteln</button>
    </div>
    </div>
    `
});
Vue.component('sidebar', {
    props: ['big'],
    data: function () {
        return {
            classObject: {
                w15: this.big,
                w6: !this.big,
                'hide-sm': !this.big,
                'hide-md': this.big,
                mobile: this.big,
                'align-center': true,
                sidebar: true,
                row: true,
                expanded: true
            }
        }
    },
    methods: {
        toggle: function () {
            if(!this.big) return;
            $('.sidebar').toggleClass('w40').toggleClass('w15');
        }
    },
    template: `
        <div v-bind:class="classObject" v-on:click="toggle()">
            <div v-for="option, i in $root.options" v-if="i > 0" v-on:click="$root.select(option, $event); toggle()" class="nav-radio col col-12" :id="option.id">
                <label :for="option.id" class="row align-center">
                <span class="label align-center badge custom col col-6">
                    <img :src="option.img" :alt="option.title" class="hide-on-hover">
                    <img :src="option.img_hover" class="show-on-hover" :alt="option.title">
                </span>
                <span class="col col-12"></span>
                <span style="white-space: pre-line" class="small">{{option.title}}</span>
                <input type="radio" :value="option.id" :id="option.id"   name="sidebar-option"></label>
            </div>
        </div>
    `
});
Vue.component('page-content', {
    props: ['big'],
    data: function () {
        return {
            classObject: {
                w94: this.big,
                w100: !this.big,
                mobile: !this.big,
                "page-content": true,
                row: true
            }
        }
    },
    template: `
    <div v-bind:class="classObject">
        <div class="row col col-12 align-center">
            <div class="col col-9 row align-center" >
                <div class="row col col-12" id="content-wrapper">
                    <start              v-if="$root.selected.id=='start'"           ></start>
                    <dashboard          v-if="$root.selected.id=='dashboard'"       ></dashboard>
                    <universum          v-if="$root.selected.id=='universum'"       ></universum>
                    <portfolio-lernen   v-if="$root.selected.id=='portfolio_lernen'"></portfolio-lernen>
                    <performance        v-if="$root.selected.id=='performance'"     ></performance>
                    <analysis           v-if="$root.selected.id=='analysis'"        ></analysis>
                    <portfolio-senden   v-if="$root.selected.id=='portfolio_senden'"        ></portfolio-senden>
                    <termin             v-if="$root.selected.id=='termin'"          ></termin>
                    <kontakten          v-if="$root.selected.id=='kontakten'"       ></kontakten>
                </div>
            </div>
            <div class="col-3 col row">
                <filters></filters>
            </div>
        </div>
    </div>
    `
});
Vue.component('start', {
    template: `
    <div id="start-card" class="row align-center col col-12 hide-sm">
        <div class="col col-12 row">
            <div class="card-container row align-center">
                <div class="col col-11 row around smaller">
                <div id="start-wrapper"></div>
                <h4>In 5 Schritten zu Ihrem Portfolio – so einfach geht‘s</h4>
                    <div class="col col-10 row around">
                        <div class="col-6 col offset-0 relative" id="bordered_start"> 
                        <span class="absolute bordered start"></span>
                            <h5>Persönliche Parameter</h5>
                            <ul>
                                <li class="relative">
                                    <span></span>
                                    <h6>Anlagevolumen</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt r</p>
                                </li>
                                <li class="relative">
                                    <span></span>
                                    <h6>Auszahlung</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt efficitur</p>
                                </li>
                                <li class="relative">
                                    <span></span>
                                    <h6>Risikostrategie</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt r</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6 col row">
                            <div class="card-container dark row" id="start-filters">
                                <div class="col col-6">
                                    <img src="img/startfilter.png" alt="filters">
                                </div>
                                <div class="col col-6 ">
                                    <p>Auswahl mit +/- einstellen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-10 row" id="two">
                        <div class="col-6 col row relative" id="bordered_second"> 
                        <span class="absolute bordered second touched" v-on:click="$root.select($root.options[2])" v-if = "$root.filter_touched"></span>
                        <span class="absolute bordered second" v-else></span>
                            <div class="col-2 col">
                                <img src="img/21.png" alt="">
                            </div>
                            <div class="col col-9">
                                 <h6>Anlageuniversum erkunden</h6>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt sed semper quis, fringilla vehicula urna. Suspendisse hendrerit vitae velit eget efficitur</p>
                             </div>
                             <div class="col col-1"></div>
                        </div>               
                        <div class="col-6 col row relative" id="bordered_third"> 
                        <span class="absolute bordered third touched" v-on:click="$root.select($root.options[3])" v-if = "$root.filter_touched"></span>
                        <span class="absolute bordered third" v-else></span>
                            <div class="col-2 col">
                                <img src="img/22.png" alt="">
                            </div>
                            <div class="col col-9"> 
                                 <h6>Portfolio kennenlernen</h6>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt sed semper quis, fringilla vehicula urna. Suspendisse hendrerit vitae velit eget efficitur</p>
                             </div>
                        </div>               
                    </div>
                    <div class="col col-10 row" id="three">
                        <div class="col-6 col row relative" id="bordered_fifth">
                        <span class="absolute bordered fifth touched" v-on:click="$root.select($root.options[5])" v-if = "$root.filter_touched"></span>
                        <span class="absolute bordered fifth" v-else></span>
                            <div class="col-2 col">
                                <img src="img/31.png" alt="">
                            </div>
                            <div class="col col-9">
                                <h6>Risiko analysieren</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt sed semper quis, fringilla vehicula urna. Suspendisse hendrerit vitae velit eget efficitur</p>
                            </div>
                        </div>
                        <div class="col-6 col row relative" id="bordered_fourth">
                        <span class="absolute bordered fourth touched" v-on:click="$root.select($root.options[4])" v-if = "$root.filter_touched"></span>
                        <span class="absolute bordered fourth" v-else></span>
                            <div class="col-2 col">
                                <img src="img/32.png" alt="">
                            </div>
                            <div class="col col-9">
                                <h6>Performance auswerten</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt sed semper quis, fringilla vehicula urna. Suspendisse hendrerit vitae velit eget efficitur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
});
Vue.component('dashboard', {
    template: `
    <div id="dashboard-card" class="row col col-12 align-center">
        <div class="row col col-12 between">
            <div class="col col-6 row">
            <universum :selected="true"></universum>
            <zoom :select="$root.options[2]" text="Zoom"></zoom></div>
            <div class="col col-6 row"><performance :selected=true></performance><zoom :select="$root.options[4]" text="Zoom"></zoom></div>
            <div class="col col-4 row">
                <div class="col col-12 row">
                    <div class="card-container row align-center" id="kennzahlen">    
                        <h4>Kennzahlen</h4>
                        <div class="col col-12">
                            <h6><span id = "average_performance">2.61%</span> Rendite</h6>
                            <p>Average Performance of past 12 Months based on historical data in %</p>
                            <h6><span id="risks">0.7 % / 3.4 %</span> Riskio</h6>
                            <p>Average/Max Risk Level of Past 12 Months based on historical data in %</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-4 row">
                <div class="col col-12 row">
                    <div class="card-container row align-center" id="portfoliomix">
                        <h4>Portfoliomix</h4> 
                        <!--<img src="img/portfoliomix.png" alt="" class="col col-12">-->
                        <div class="col col-11 align-center pmd" v-for="pmd in $root.dashboardPortfoliomixes" v-if = "pmd.value > 0">
                            <div v-if = "pmd.id==0">{{pmd.name}} </div>
                            <div v-else>
                                <p class="pmd_value strong">{{pmd.value}} % {{pmd.name}}</p>
                                <div  v-if ="pmd.lev>0" class="plus"><div class="content">+</div></div> 
                                <div  v-if ="pmd.lev>0" class="leverage">{{pmd.lev}} % Leverage</div>
                                <div  v-if ="pmd.lev>0" class="progress" v-bind:style="{'background': 'linear-gradient(to right, #ea6d28 0%, #ea6d28 ' + pmd.lev + '%, #ededed ' + pmd.lev + '%, #ededed)'}"></div>
                            </div>
                        </div>
                    </div>
                    <zoom :select="$root.options[3]" text="Details"></zoom>
                </div>
            </div>
            <div class="col col-4 row"><analysis :selected="true"></analysis><zoom :select="$root.options[5]" text="Zoom"></zoom></div>
        </div>
    </div> 
    `
});
Vue.component('universum', {
    props: ['selected'],
    created: function () {
        // console.log("created", 'universum');

        function addBigContainer() {
            if(globals.mobile){
                $('.cube_container').append(createSmallRenderer());
                console.log("MOBILE");
            }
            else{
                $('.cube_container').append(createBigRenderer());
                console.log("!MOBILE");
            }
            animate();
        }

        function addSmallContainer() {
            $('.small_cube_container').append(createSmallRenderer());
            animate();
        }

        if (!this.selected) {
            setTimeout(addBigContainer, 10);
            console.debug('BIG', $('.cube_container'));
        }
        else {
            $('.small_cube_container').append(createSmallRenderer());
            setTimeout(addSmallContainer, 10);
            console.debug('smaall', $('.small_cube_container'));
        }

        animate();
    },
    template: `
   <div id="universum-card" class="row col col-12 align-center">
       <div class="card-container align-center row">
           <h4>Anlageuniversum</h4>
           <div class="col col-12"> 
                <!--<img src="img/tmpl_universum.png" alt="">-->
                <div v-if="selected" class="small_cube_container"></div>
                <div v-else="" class="cube_container"></div>
           </div>
        </div> 
       <helpers v-if="!selected" :set="1"></helpers>
    </div>
    `
});
Vue.component('portfolio-lernen', {
    props: ['selected'],
    data: function () {
        return{
            showDetails: false,
            pmselected: {}
        }
    },
    methods: {
        select: function (what) {
            this.pmselected = what;
            this.showDetails = true;
            setTimeout(refreshFonds, 20);
        }
    },
    created: function () {
        setTimeout(refreshFonds, 20);
    },
    template: `
   <div id="portfolio-lernen-card" class="row col col-12 align-center">
        <div v-if="!showDetails" class="card-container row align-center">
            <h4>Ihr persönlicher Portfoliomix im Detail</h4>
                <div class="col col-3 row align-center pm" v-for="pm in $root.portfoliomixes" v-if = "pm.value > 0">
                    <div class="col col-11 row">
                        <div class="pm_value"><canvas v-bind:id="pm.id"></canvas> <div v-if ="pm.id!=0" class="text" > {{pm.value}} %</div></div>
                        <h6 class="pm_name">{{pm.name}}</h6>
                        <div class="pm_data">
                            <p class="smaller">{{pm.data}}</p>
                            <div  v-if ="pm.lev>0" class="plus"><div class="content">+</div></div> 
                            <div  v-if ="pm.lev>0" class="leverage">{{pm.lev}} % Leverage</div>
                            <div  v-if ="pm.lev>0" class="progress" v-bind:style="{'background': 'linear-gradient(to right, #ea6d28 0%, #ea6d28 ' + pm.lev + '%, #ededed ' + pm.lev + '%, #ededed)'}"></div>
                        </div> 
                        <!--<div  v-if ="pm.lev>0" class="plus"><div class="content">+</div></div> -->
                        <!--<div  v-if ="pm.lev>0" class="leverage">{{pm.lev}} % Leverage</div>-->
                            <!--<div  v-if ="pm.lev>0" class="progress" v-bind:style="{'background': 'linear-gradient(to right, #ea6d28 0%, #ea6d28 ' + pm.lev + '%, #ededed ' + pm.lev + '%, #ededed)'}"></div>--> 
                        <button v-if ="pm.id!=0" class="outline button primary smaller" v-on:click="select(pm)">Sie wollen wissen, welche Strategie und Papiere dahinter stecken? Hier Details ansehen lassen</button>
                    </div> 
                </div> 
            <div class="col col-12"></div>
            <div class="col col-12"></div>
            <div class="col col-12"></div>
        </div>  
        <div v-else="" class="card-container row align-center" id="pmdetails">
            <h4>Strategie & Papiere: was steckt dahinter?</h4>
            <div class="col col-11 row align-center">
                <div class="pm_value col col-3 ">
                    <canvas v-bind:id="pmselected.id"></canvas> 
                    <div v-if ="pmselected.id!=0" class="text">{{pmselected.value}} %</div>
                </div>
                <div class="col col-9 pmselected"> 
                    <h5 class="upper">{{pmselected.name}}</h5>
                    <div class="col col-8 float-left">{{pmselected.data}}</div>
                    <div class="col col-4 float-left">
                    <div  v-if ="pmselected.lev>0" class="plus "><div class="content">+</div></div> 
                        <div  v-if ="pmselected.lev>0" class="leverage">{{pmselected.lev}} % Leverage</div>
                        <div  v-if ="pmselected.lev>0" class="progress" v-bind:style="{'background': 'linear-gradient(to right, #ea6d28 0%, #ea6d28 ' + pmselected.lev + '%, #ededed ' + pmselected.lev + '%, #ededed)'}"></div></div>
                </div>
                <div class="col col-12" style="overflow-x:scroll">
                    <table class="bordered col col-12">
                        <thead class="auto">
                            <tr>
                                <th class="tcell upper">name</th>
                                <th class="tcell upper">kurs</th>
                                <th class="tcell upper">kauf/verkauf</th>
                                <th class="tcell upper">option kurzel</th>
                                <th class="tcell upper">put/call</th>
                                <th class="tcell upper">falligkeit am</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 5">
                                <td class="tcell ">...</td>
                                <td class="tcell ">...</td>
                                <td class="tcell ">...</td>
                                <td class="tcell ">...</td>
                                <td class="tcell ">...</td>
                                <td class="tcell ">...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <helpers :set="2"></helpers>     
    </div> 
    `
});
Vue.component('performance', {
    props: ['selected'],
    created: function () {
        if (!this.selected) {
            showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            FullScreen = true;
            // console.log((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
        } else {
            showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            FullScreen = false;
            // console.log((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
        }
    },
    template: `
    <div id="performance-card" class="row col col-12 align-center">
        <div class="card-container row align-center">
            <h4>Portfolioperformance</h4>
            <div class="col col-12">
                <!--<img src="img/tmpl_performance.png" alt="">-->
                
                <div class="graphic">
                    <canvas id="performanceChart"></canvas>
                </div>
            </div>
        </div>
        <helpers v-if="!selected" :set="3"></helpers>
    </div> 
    `
});
Vue.component('analysis', {
    props: ['selected'],
    created: function () {
        if (!this.selected) {
            showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            FullScreen = true;
            // console.log((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
        } else {
            showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            FullScreen = false;
            // console.log((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
        }
    },
    template: `
    <div id="analysis-card" class="row col col-12 align-center">
        <div class="card-container row align-center">
            <h4>Risiko auslastung</h4>
            <div class="col col-12">
                <!--<img src="img/tmpl_analysis.png" alt="">-->
                <div class="graphic">
                    <canvas id="riskChart"></canvas>
                </div>
           </div>
        </div> 
        <helpers v-if="!selected" :set="4"></helpers>
    </div>
    `
});
Vue.component('portfolio-senden', {
    template: `
   <div id="portfolio-senden-card" class="row col col-12">
           <div class="card-container row align-center">
                <div class="col col-11 row">
                    <h4>Portfolio zusenden</h4>
                    <form method="post" action="" class="form col col-6 row">
                        <div class="form-item col col-12">
                            <label for="name" class="upper">Name</label>
                            <input id="name" type="text"  class="col col-12">
                        </div>
                        <div class="form-item col col-12">
                            <label for="tel" class="upper">telefonnumber</label>
                            <input id="tel" type="text"  class="col col-12">
                        </div>
                        <div class="form-item col col-12">
                            <label for="email" class="upper">email adresse</label>
                            <input id="email" type="text"  class="col col-12">
                        </div>
                        <div class="form-item col col-12">
                            <input required type="checkbox" id="confirm">
                            <label class="checkbox" for="confirm">Ich bin mit den Datenschutzbestimmungen einverstanden und stimme einem Anruf durch ICM InvestmentBank AG zu.</label>
                        </div>
                        <input type="submit" class="button round" data-component="modal" data-target="#my-modal" value="ANFRAGE ABSENDEN">
                    <div id="my-modal" class="modal-box hide">
                        <div class="modal card-container">
                            <span class="close"></span>
                            <div class="modal-body">Vielen Dank fur Interesse. Wir melden uns in Kurze mit weiteren interessanten Details bei Ihnen.<br><br><br>Ihr ICM-Team</div>
                        </div>
                    </div>
                    </form>
                    <div class="col col-6 hide-sm">
                        <img src="img/graphic_portfolio_senden.png" alt="">
                    </div>
                </div>
           </div>
    </div> 
    `
});
Vue.component('termin', {
    template: `
   <div id="termin-card" class="row col col-12  align-center">
        <div class="card-container row align-center around">
            <h4>Termin vereinbaren</h4>   
            <div class="col col-10 row">
                <div class="term col col-4 row align-center" v-for="t in $root.team">
                    <div class="col col-8">
                        <img :src="t.img" alt=""><br>
                        <div class="tdata">
                            <span class="small name">{{t.name}}</span><br>
                            <span class="upper smaller grey city">{{t.city}}</span><br>
                            <span class="small mail">{{t.mail}}</span><br>
                            <span class="strong small tel">{{t.tel}}</span><br>
                        </div>
                        <button class="button outline round">Jetzt anrufen</button>
                    </div>
                </div>
                <div class="term col col-4 row align-center calendar">
                    <div class="col col-12">
                        <div class="col col-8 offset-2">
                            <img src="img/calendar.png" alt="">
                        </div>
                        <span class="small tdata">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec eros non ante bibendum vestibulum.</span>
                        <button class="button round" v-on:click="$root.select($root.options[8])">Rückruftermin vereinbaren</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    `
});
Vue.component('kontakten', {
    created: function () {
        setTimeout(function(){$( "#date" ).datepicker()}, 100);
    },
    template: `
   <div id="kontakten-card" class="row col col-12 align-center">
           <div class="card-container row align-center">
                <form method="post" action="" class="form col col-11 row between">
                    <h4>Kontaktdaten ubermitteln</h4>
                    <div class="form-item col w45">
                        <label for="name" class="upper">Name</label>
                        <input id="name"  class="col col-12">
                    </div>
                    <div class="form-item col w50">
                        <label for="email" class="upper">email adresse</label>
                        <input id="email"  class="col col-12">
                    </div>
                    <div class="form-item col w45">
                        <label for="tel" class="upper">telefonnumber</label>
                        <input id="tel"  class="col col-12">
                    </div>
                    <div class="form-item col w15">
                        <label for="date" class="upper">datum
                            <popup message="test test message"></popup>
                        </label> 
                        <input id="date"  type="text" class="col col-12">
                    </div>
                    <div class="form-item col w30">
                        <label for="time" class="upper">zeit
                            <popup message="test test message"></popup>
                        </label>
                        <input id="time"  class="col col-12">
                    </div>
                    <div class="form-item col col-12">
                        <label for="time" class="upper">datenschutz</label>
                        <textarea id="time" rows="4" class="col col-12"></textarea>
                    </div>
                    <div class="form-item col col-12">
                        <input required type="checkbox" id="confirm">
                        <label class="checkbox" for="confirm">Ich bin mit den Datenschutzbestimmungen einverstanden und stimme einem Anruf durch ICM InvestmentBank AG zu.</label>
                    </div>
                    <input type="submit" value="ABSENDEN" class="button round" data-component="modal" data-target="#my-modal">
                </form>
       </div>
    </div> 
    `
});
Vue.component('filters', {
    template: ` 
    <div class="col col-12 row" >
        <div class="card-container row align-center dark" id="filters">
        <!--<img src="img/filters.png" alt="">-->
        <div class="sliders row col col-12">
            <div class="col col-12">
                <h5>Anlagevolumen&nbsp<popup message="test test message"></popup></h5> 
                <div class="slider volume">
                    <span id="decrease-volume" class="buttons left">-</span>
                    <span id="increase-volume" class="buttons right">+</span>
                    <div id="slider-volume">
                        <div class="slider-holder"></div>
                    </div>
                </div>
                <textarea id="amount-volume" readonly></textarea>
            </div>
            <div class="col col-12">  
                <h5>Auszahlungen&nbsp<popup message="test test message"></popup></h5> 
                <div class="slider pays">
                    <span id="decrease-pays" class="buttons left">-</span>
                    <span id="increase-pays" class="buttons right">+</span>
                    <div id="slider-pays">
                        <div class="slider-holder"></div>
                    </div>
                </div>
                <textarea id="amount-pays" readonly></textarea>
            </div>
            <div class="col col-12">
                <h5>Risikostrategie&nbsp<popup message="test test message"></popup></h5> 
                <div class="slider risks">
                    <span id="decrease-risks" class="buttons left">-</span>
                    <span id="increase-risks" class="buttons right">+</span>
                    <div id="slider-risks">
                        <div  class="slider-holder"></div>
                    </div>
                </div>
                <textarea id="amount-risks" style="white-space: pre-line"  readonly></textarea>
            </div>
        </div>
        <button class="button round w95 outline zoom-button">Weniger als 100 Tsd €? Alternativen ansehen > </button>
        </div>
    </div>
    `
});
Vue.component('zoom', {
    props: ['select', 'text'],
    template: `
    <button class="zoom-button button outline round" v-on:click="$root.select(select)">{{text}}</button>
    `
});
Vue.component('helpers', {
    props: ['set'],
    template: `
    <div id="helpers" class="row col col-12 align-center">
        <button class="round button outline" v-on:click="$root.select($root.options[1])">Mein dashboard ansehen</button>
        <button class="round button " v-if="set==1" v-on:click="$root.select($root.options[3])">Portfolio auswerten</button>
        <button class="round button " v-if="set==2" v-on:click="$root.select($root.options[4])">Performance auswerten</button>
        <button class="round button " v-if="set==3" v-on:click="$root.select($root.options[5])">Risiko analysieren</button>
        <button class="round button " v-if="set==4" v-on:click="$root.select($root.options[6])">Portfolio per Email zusenden</button>
    </div>
    `
});

function isFullScreen() {
    return FullScreen === true;
}

Vue.component('popup', {
    props: ['message'],
    template: `
        <span class="popup"><span class="label round">?</span>
        <span class="message">{{message}}</span>
        </span>
    `
});
