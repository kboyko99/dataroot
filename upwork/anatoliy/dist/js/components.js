Vue.component('top-navigation', {
    template:`
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
        <div class="nav-buttons col col-7 float-right row align-center">
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
                w40: this.big,
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
                <span class="small">{{option.title}}</span>
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
                <div class="row col col-11">
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
    template:`
    <div id="start-card" class="row align-center col col-12 hide-sm">
        <div class="col col-12 row">
            <div class="card-container row align-center">
                <div class="col col-11 row around smaller">
                <div id="start-wrapper"></div>
                <h4>In 5 Schritten zu Ihrem Portfolio – so einfach geht‘s</h4>
                    <div class="col col-10 row around" id="one">
                        <div class="col-5 col offset-1">
                            <h5>Persönliche Parameter</h5>
                            <ul>
                                <li>
                                    <span></span>
                                    <h6>Anlagevolumen</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt r</p>
                                </li>
                                <li>
                                    <span></span>
                                    <h6>Auszahlung</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt efficitur</p>
                                </li>
                                <li>
                                    <span></span>
                                    <h6>Risikostrategie</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt r</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6 col"></div>
                    </div>
                    <div class="col col-10 row" id="two">
                        <div class="col-6 col row"> 
                            <div class="col-2 col">
                                <img src="img/21.png" alt="">
                            </div>
                            <div class="col col-9">
                                 <h6>Anlageuniversum erkunden</h6>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt sed semper quis, fringilla vehicula urna. Suspendisse hendrerit vitae velit eget efficitur</p>
                             </div>
                        </div>               
                        <div class="col-6 col row">
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
                        <div class="col-6 col row">
                            <div class="col-2 col">
                                <img src="img/31.png" alt="">
                            </div>
                            <div class="col col-9">
                                <h6>Risiko analysieren</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi ipsum, tincidunt sed semper quis, fringilla vehicula urna. Suspendisse hendrerit vitae velit eget efficitur</p>
                            </div>
                        </div>
                        <div class="col-6 col row">
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
    template:`
    <div id="dashboard-card" class="row col col-12 align-center">
        <div class="row col col-12 between">
            <div class="col col-6 row"><universum :selected="true"></universum><zoom :select="$root.options[2]" text="Zoom"></zoom></div>
            <div class="col col-6 row"><performance :selected=true></performance><zoom :select="$root.options[4]" text="Zoom"></zoom></div>
            <div class="col col-4 row">
                <div class="col col-12 row">
                    <div class="card-container row align-center" id="kennzahlen">    
                        <h4>Kennzahlen</h4>
                        <div class="col col-11">
                            <h6><span>2.61%</span> Rendite</h6>
                            <p>Average Performance of past 12 Months based on historical data in %</p>
                        </div>
                        <div class="col col-11">
                        <h6><span>0.7 % / 3.4 %</span> Riskio</h6>
                        <p>Average/Max Risk Level of Past 12 Months based on historical data in %</p>
</div>
                    </div>
                </div>
            </div>
            <div class="col col-4 row">
                <div class="col col-12 row">
                    <div class="card-container" id="portfoliomix">
                        <div class="col-12 col">
                            <h4>Portfoliomix</h4>
                            <img src="img/portfoliomix.png" alt="">
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
    template:`
   <div id="universum-card" class="row col col-12 align-center">
       <div class="card-container align-center row">
           <h4>Anlageuniversum</h4>
           <div class="col col-12">
                <img src="img/tmpl_universum.png" alt="">
           </div>
           <helpers v-if="!selected" :set="1"></helpers>
        </div> 
    </div>
    `
});
Vue.component('portfolio-lernen', {
    props: ['selected'],
    template:`
   <div id="portfolio-lernen-card" class="row col col-12 align-center">
        <div class="card-container row align-center">
        <h4>Ihr persönlicher Portfoliomix im Detail</h4>
            <div class="col col-3 row align-center pm" v-for="pm in $root.portfoliomixes">
                <div class="col col-11 row">
                    <p class="pm_value"><span class="label badge custom outline primary">{{pm.value}}</span> </p>
                    <h5 class="pm_name">{{pm.name}}</h5>
                    <p class="pm_data smaller">{{pm.data}}</p>
                    <button class="outline button primary smaller" v-on:click="$root.view_details=pm">Sie wollen wissen, welche Strategie und Papiere dahinter stecken? Hier Details ansehen lassen</button>
                </div>
            </div>
        <div class="col col-12"></div>
        <div class="col col-12"></div>
        <div class="col col-12"></div>
        <helpers v-if="!selected" :set="2"></helpers>
        </div>
    </div> 
    `
});
Vue.component('performance', {
    props: ['selected'],
    template:`
    <div id="performance-card" class="row col col-12 align-center">
        <div class="card-container row align-center">
            <h4>Portfolioperformance</h4>
            <div class="col col-12"><img src="img/tmpl_performance.png" alt=""></div>
            <helpers v-if="!selected" :set="3"></helpers>
        </div>
    </div> 
    `
});
Vue.component('analysis', {
props: ['selected'],
    template:`
    <div id="analysis-card" class="row col col-12 align-center">
        <div class="card-container row align-center">
            <h4>Risiko auslastung</h4>
            <div class="col col-12">
                <img src="img/tmpl_analysis.png" alt="">
           </div>
            <helpers v-if="!selected" :set="4"></helpers>
        </div> 
    </div>
    `
});
Vue.component('portfolio-senden', {
    template:`
   <div id="portfolio-senden-card" class="row col col-12">
           <div class="card-container row align-center">
                <div class="col col-9 row">
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
                            <label class="checkbox smaller" for="confirm">Ich bin mit den Datenschutzbestimmungen einverstanden und stimme einem Anruf durch ICM InvestmentBank AG zu.</label>
                        </div>
                        <button class="button round" data-component="modal" data-target="#my-modal">ANFRAGE ABSENDEN</button>
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
    template:`
   <div id="termin-card" class="row col col-12  align-center">
        <div class="card-container row align-center around">
            <h4>Termin vereinbaren</h4>   
            <div class="col col-10 row">
                <div class="term col col-4 row align-center" v-for="t in $root.team">
                    <div class="col col-8">
                        <img :src="t.img" alt=""><br>
                        <span class="small">{{t.name}}</span><br>
                        <span class="upper smaller grey">{{t.city}}</span><br>
                        <span class="small">{{t.mail}}</span><br>
                        <span class="strong small">{{t.tel}}</span><br>
                        <button class="button outline round">Jetzt anrufen</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    `
});
Vue.component('kontakten', {
    created: function () {
        $( "#date" ).datepicker();
    },
    template:`
   <div id="kontakten-card" class="row col col-12 align-center">
           <div class="card-container row align-center">
                <form method="post" action="" class="form col col-9 row between">
                    <h4>Kontaktdaten ubermitteln</h4>
                    <div class="form-item w45">
                        <label for="name" class="upper">Name</label>
                        <input id="name" type="text"  class="col col-12">
                    </div>
                    <div class="form-item w50">
                        <label for="email" class="upper">email adresse</label>
                        <input id="email" type="text"  class="col col-12">
                    </div>
                    <div class="form-item w45">
                        <label for="tel" class="upper">telefonnumber</label>
                        <input id="tel" type="text"  class="col col-12">
                    </div>
                    <div class="form-item w15">
                        <label for="date" class="upper">datum</label>
                        <input id="date" type="text"  class="col col-12">
                    </div>
                    <div class="form-item w30">
                        <label for="time" class="upper">zeit</label>
                        <input id="time" type="text"  class="col col-12">
                    </div>
                    <div class="form-item col col-12">
                        <label for="time" class="upper">datenschutz</label>
                        <textarea id="time" rows="4" class="col col-12"></textarea>
                    </div>
                    <div class="form-item col col-12">
                        <input required type="checkbox" id="confirm">
                        <label class="checkbox smaller" for="confirm">Ich bin mit den Datenschutzbestimmungen einverstanden und stimme einem Anruf durch ICM InvestmentBank AG zu.</label>
                    </div>
                    <button class="button round" data-component="modal" data-target="#my-modal">ABSENDEN</button>

                </form>
       </div>
    </div> 
    `
});
Vue.component('filters', {
    template:`
    <div class="col col-12 row" >
        <div class="card-container row align-center" id="filters">
        <img src="img/filters.png" alt="">
        </div>
    </div>
    `
});
Vue.component('zoom', {
    props: ['select', 'text'],
    template:`
    <button class="zoom-button button outline round" v-on:click="$root.select(select)">{{text}}</button>
    `
});
Vue.component('helpers', {
    props: ['set'],
    template:`
    <div id="helpers">
        <button class="round button outline" v-on:click="$root.select($root.options[1])">Mein dashboard ansehen</button>
        <button class="round button " v-if="set==1" v-on:click="$root.select($root.options[3])">Portfolio auswerten</button>
        <button class="round button " v-if="set==2" v-on:click="$root.select($root.options[4])">Performance auswerten</button>
        <button class="round button " v-if="set==3" v-on:click="$root.select($root.options[5])">Risiko analysieren</button>
        <button class="round button " v-if="set==4" v-on:click="$root.select($root.options[6])">Portfolio per Email zusenden</button>
    </div>
    `
});