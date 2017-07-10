const globals = {
    selected: '',
    options: [
        {
            title: 'Start',
            id: 'start',
            img: 'img/start.png',
            img_hover: 'img/start_hover.png'
        },
        {
            title: 'Mein dashboard',
            id: 'dashboard',
            img: 'img/dashboard.png',
            img_hover: 'img/dashboard_hover.png'
        },
        {
            title: 'Universum erkunden',
            id: 'universum',
            img: 'img/universum.png',
            img_hover: 'img/universum_hover.png'
        },
        {
            title: 'Portfolio kennenlernen',
            id: 'portfolio_lernen',
            img: 'img/portfolio_lernen.png',
            img_hover: 'img/portfolio_lernen_hover.png'
        },
        {
            title: 'Perfomance auswerten',
            id: 'perfomance',
            img: 'img/perfomance.png',
            img_hover: 'img/perfomance_hover.png'
        },
        {
            title: 'Risko analysieren',
            id: 'analysis',
            img: 'img/analysis.png',
            img_hover: 'img/analysis_hover.png'
        },
        {
            title: 'Portfolio zusenden',
            id: 'portfolio_senden',
            img: 'img/portfolio_senden.png',
            img_hover: 'img/portfolio_senden_hover.png'
        },
        {
            title: 'Termin verienbaren',
            id: 'termin',
            img: 'img/termin.png',
            img_hover: 'img/termin_hover.png'
        },
        {
            title: 'Kontaktdaten ubermittein',
            id: 'kontakten',
            img: 'img/kontakten.png',
            img_hover: 'img/kontakten_hover.png'
        }
    ],
    select: function (opt) {
        $('.selected').removeClass('selected');
        $('#' + opt.id).addClass('selected');
        this.selected = opt;
    }
};

const app = new Vue({
    el: '#app',
    data: globals
});

globals.selected = globals.options[0];