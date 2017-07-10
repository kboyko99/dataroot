Vue.component('top-navigation', {
    name: 'top-navigation',
    template:`
    <div id="top-navigation">
        <div class="nav-radio col col-1 float-left selected" v-on:click="$root.select($root.options[0])" :id="$root.options[0].id">
            <label :for="$root.options[0].id" class="row align-center">
            <span class="label align-center tag custom col col-4"><img :src="$root.options[0].img" :alt="$root.options[0].title" class="hide-on-hover"><img :src="$root.options[0].img_hover" class="show-on-hover" :alt="$root.options[0].title"></span>
            <span class="col col-12"></span>
            <span>{{$root.options[0].title}}</span>
            <input type="radio" :value="$root.options[0].id" :id="$root.options[0].id"   name="sidebar-option"></label>
        </div>
        <div class="nav-buttons col col-6 float-right">
            <button>termin verienbaren</button>
            <button>portfolio zuseden</button>
            <button>kontaktdaten ubrmitteln</button>
    </div>
    </div>
    `
});
Vue.component('sidebar', {
    name: 'sidebar',
    methods: {},
    data: function () {
        return {

        }
    },
    template: `
        <div class="col col-1" id="sidebar">
            <div v-for="option, i in $root.options" v-if="i > 0" v-on:click="$root.select(option)" class="nav-radio" :id="option.id">
                <label :for="option.id" class="row align-center">
                <span class="label align-center badge custom col col-6"><img :src="option.img" :alt="option.title" class="hide-on-hover"><img :src="option.img_hover" class="show-on-hover" :alt="option.title"></span>
                <span class="col col-12"></span>
                <span >{{option.title}}</span>
                <input type="radio" :value="option.id" :id="option.id"   name="sidebar-option"></label>
            </div>
        </div>
    `
});
Vue.component('page-content', {
    name: 'page-content',
    template:
    `
    <div class="col col-11" id="page-content">
        <start></start>
        <dashboard></dashboard>
        <universum></universum>
        <portfolio-lernen></portfolio-lernen>
        <perfomance></perfomance>
        <analysis></analysis>
        <portfolio-senden></portfolio-senden>
        <termin></termin>
        <kontakten></kontakten>
    </div>
    `
});
Vue.component('start', {
    name: 'start',
    template:`
    <div id="start" v-if="$root.selected.id=='start'">
        <div class="card-container">TODO</div>
    </div>
    `
});
Vue.component('dashboard', {
    name: 'dashboard',
    template:`
   <div id="dashboard" v-if="$root.selected.id=='dashboard'">
   TODO containers
    </div> 
    `
});
Vue.component('universum', {
    name: 'universum',
    template:`
   <div id="universum" v-if="$root.selected.id=='universum'">
   TODO containers
    </div> 
    `
});
Vue.component('portfolio-lernen', {
    name: 'portfolio-lernen',
    template:`
   <div id="portfolio-lernen" v-if="$root.selected.id=='portfolio_lernen'">
   TODO containers
    </div> 
    `
});
Vue.component('perfomance', {
    name: 'perfomance',
    template:`
   <div id="perfomance" v-if="$root.selected.id=='perfomance'">
   TODO containers
    </div> 
    `
});
Vue.component('analysis', {
    name: 'analysis',
    template:`
   <div id="analysis" v-if="$root.selected.id=='analysis'">
   TODO containers
    </div> 
    `
});
Vue.component('portfolio-senden', {
    name: 'portfolio-senden',
    template:`
   <div id="portfolio-senden" v-if="$root.selected.id=='portfolio_senden'">
   TODO containers + form + "thanks for your form"
    </div> 
    `
});
Vue.component('termin', {
    name: 'termin',
    template:`
   <div id="termin" v-if="$root.selected.id=='termin'">
   TODO 
    </div> 
    `
});
Vue.component('kontakten', {
    name: 'kontakten',
    template:`
   <div id="kontakten" v-if="$root.selected.id=='kontakten'">
   TODO
    </div> 
    `
});