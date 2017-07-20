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
    team: [
        {
            name: 'William Ayrton',
            img: 'img/team/william.png',
            tel: '+49 6784 789 7890',
            mail: 'william.ayrton@myinvest.com',
            city: 'Nürnberg'
        },
        {
            name: 'William Winter',
            img: 'img/team/wwilliam.png',
            tel: '+49 6784 789 7890',
            mail: 'william.winter@myinvest.com',
            city: 'Kassel'
        },
        {
            name: 'Mackenzie Livingston',
            img: 'img/team/mackenzie.png',
            tel: '+49 6784 789 7890',
            mail: 'mackenzie@myinvest.com',
            city: 'Berlin'
        },
        {
            name: 'Jason Barnes',
            img: 'img/team/jason.png',
            tel: '+49 6784 789 7890',
            mail: 'jason.barnes@myinvest.com',
            city: 'Düsseldorf'
        },
        {
            name: 'Mackenzie Livingston',
            img: 'img/team/livingston.png',
            tel: '+49 6784 789 7890',
            mail: 'livingston@myinvest.com',
            city: 'Dresden'
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

if ($(window).width() < 700)
    globals.select(globals.options[1]);
else
    globals.select(globals.options[0]);
