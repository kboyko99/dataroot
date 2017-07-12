const globals = {
    selected: {},
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
            id: 'performance',
            img: 'img/performance.png',
            img_hover: 'img/performance_hover.png'
        },
        {
            title: 'Risiko analysieren',
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
    portfoliomixes: [
        {
            value: 40,
            name: 'leo t',
            data: 'Unser aktiv gemanagter und vielfach ausgezeichneter Multi-Asset-Fonds (Aktien, Anleihen, Rohstoffe und Liquidität). Siehe Grafik oben.'
        },
        {
            value: 35,
            name: 'aktien',
            data: 'Unser Aktienuniversum wird von unseren ausgewiesenen Aktienspezialisten ständig überprüft und ausgewertet, so können wir jederzeit sofort auf veränderte Marktbedingungen reagieren'
        },
        {
            value: 25,
            name: 'anleihen',
            data: 'Wir bieten Ihnen ein aktives Management - auch bei festverzinslichen Anleihen, denn die Zeiten, in denen eine einfache „Sicherheitsanleihe“ im Depot liegen sollte, sind lange passé. Wir kombinieren Ihre Vorgaben zu Zielrendite'
        },{
            value: 35,
            name: 'aktien',
            data: 'Unser Aktienuniversum wird von unseren ausgewiesenen Aktienspezialisten ständig überprüft und ausgewertet, so können wir jederzeit sofort auf veränderte Marktbedingungen reagieren'
        }
    ],
    view_details: {},
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