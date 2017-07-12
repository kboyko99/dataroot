Vue.component('top-navigation', {
    template:`
    <div id="top-navigation">
        <div class="nav-radio col col-1 float-left selected" v-on:click="$root.select($root.options[0])" :id="$root.options[0].id">
            <label :for="$root.options[0].id" class="row align-center">
            <span class="align-center col col-4">
                <img :src="$root.options[0].img" :alt="$root.options[0].title" class="hide-on-hover">
                <img :src="$root.options[0].img_hover" class="show-on-hover" :alt="$root.options[0].title">
            </span>
            <span class="col col-12"></span>
            <span>{{$root.options[0].title}}</span>
            <input type="radio" :value="$root.options[0].id" :id="$root.options[0].id"   name="sidebar-option"></label>
        </div>
        <div class="nav-buttons col col-6 float-right">
            <button class="round button" v-on:click="$root.select($root.options[7])">termin verienbaren</button>
            <button class="round button" v-on:click="$root.select($root.options[6])">portfolio zuseden</button>
            <button class="round button" v-on:click="$root.select($root.options[8])">kontaktdaten ubrmitteln</button>
    </div>
    </div>
    `
});
Vue.component('sidebar', {
    template: `
        <div class="col col-1" id="sidebar">
            <div v-for="option, i in $root.options" v-if="i > 0" v-on:click="$root.select(option)" class="nav-radio" :id="option.id">
                <label :for="option.id" class="row align-center">
                <span class="label align-center badge custom col col-6">
                    <img :src="option.img" :alt="option.title" class="hide-on-hover">
                    <img :src="option.img_hover" class="show-on-hover" :alt="option.title">
                </span>
                <span class="col col-12"></span>
                <span >{{option.title}}</span>
                <input type="radio" :value="option.id" :id="option.id"   name="sidebar-option"></label>
            </div>
        </div>
    `
});
Vue.component('page-content', {
    template: `
    <div class="col col-11 row" id="page-content">
        <div class="row col col-12 align-center">
            <div class="col col-9 row align-center" >
                <div class="row col col-11">
                    <start              v-if="$root.selected.id=='start'"           ></start>
                    <dashboard          v-if="$root.selected.id=='dashboard'"       ></dashboard>
                    <universum          v-if="$root.selected.id=='universum'"       ></universum>
                    <portfolio-lernen   v-if="$root.selected.id=='portfolio_lernen'"></portfolio-lernen>
                    <performance         v-if="$root.selected.id=='performance'"      ></performance>
                    <analysis           v-if="$root.selected.id=='analysis'"        ></analysis>
                    <portfolio-senden></portfolio-senden>
                    <termin             v-if="$root.selected.id=='termin'"          ></termin>
                    <kontakten          v-if="$root.selected.id=='kontakten'"       ></kontakten>
                </div>
            </div>
            <filters></filters>
        </div>
    </div>
    `
});
Vue.component('start', {
    template:`
    <div id="start-card" class="row align-center col col-12  ">
        <div class="col col-12 row">
            <div class="card-container col col-12"></div>
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
            <div class="w30 row">
                <div class="col col-12 row">
                    <div class="card-container col col-12 row align-center" id="kennzahlen">    
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
            <div class="w30 row">
                <div class="col col-12 row">
                    <div class="card-container col col-12 row align-center">
                        <h4>Portfoliomix</h4>
                        <img src="img/portfoliomix.png" alt="">
                        <zoom :select="$root.options[3]" text="Details"></zoom>
                    </div>
                </div>
            </div>
            <div class="w40 row"><analysis :selected="true"></analysis><zoom :select="$root.options[5]" text="Zoom"></zoom></div>
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
        <div class="card-container col col-12 row align-center">
        <h4>Ihr persönlicher Portfoliomix im Detail</h4>
            <div class="col col-3 row align-center" v-for="pm in $root.portfoliomixes">
                <div class="col col-11 row">
                    <p class="pm_value"><span class="label badge custom outline primary">{{pm.value}}</span> </p>
                    <h5 class="pm_name">{{pm.name}}</h5>
                    <p class="pm_data">{{pm.data}}</p>
                    <button class="outline button primary" v-on:click="$root.view_details=pm">Sie wollen wissen, welche Strategie und Papiere dahinter stecken? Hier Details ansehen lassen</button>
                </div>
            </div>
        <div class="col col-12"></div>
        <div class="col col-12"></div>
        <div class="col col-12"></div>
        </div>
        <helpers v-if="!selected" :set="2"></helpers>
    </div> 
    `
});
Vue.component('performance', {
    props: ['selected'],
    template:`
    <div id="performance-card" class="row col col-12 align-center card-container">
        <h4>Portfolioperformance</h4>
        <div class="col col-12"><img src="img/tmpl_performance.png" alt=""></div>
        <helpers v-if="!selected" :set="2"></helpers>
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
   <div id="portfolio-senden-card" v-if="$root.selected.id=='portfolio_senden'" class="row col col-12  align-center">
           <div class="card-container col col-12 row">
                containers + form + "thanks for your form"
            </div>
    </div> 
    `
});
Vue.component('termin', {
    template:`
   <div id="termin-card" v-if="$root.selected.id=='termin'" class="row col col-12  align-center">
              <div class="card-container col col-12 row"></div>
    </div> 
    `
});
Vue.component('kontakten', {
    template:`
   <div id="kontakten-card" v-if="$root.selected.id=='kontakten'" class="row col col-12 align-center">
           <div class="card-container col col-12 row"></div>
    </div> 
    `
});
Vue.component('filters', {
    template:`
    <div class="col col-3 row" >
        <div class="card-container col col-12" id="filters">
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