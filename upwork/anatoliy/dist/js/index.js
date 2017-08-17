var breakpoint = 1024;
var globals = {
    filter_touched: false,
    selected: {},
    options: [
        {
            title: 'Start',
            id: 'start',
            img: 'img/start.png',
            img_hover: 'img/start_hover.png'
        },
        {
            title: 'Mein\ndashboard',
            id: 'dashboard',
            img: 'img/dashboard.png',
            img_hover: 'img/dashboard_hover.png'
        },
        {
            title: 'Universum\nerkunden',
            id: 'universum',
            img: 'img/universum.png',
            img_hover: 'img/universum_hover.png'
        },
        {
            title: 'Portfolio\nkennenlernen',
            id: 'portfolio_lernen',
            img: 'img/portfolio_lernen.png',
            img_hover: 'img/portfolio_lernen_hover.png'
        },
        {
            title: 'Perfomance\nauswerten',
            id: 'performance',
            img: 'img/performance.png',
            img_hover: 'img/performance_hover.png'
        },
        {
            title: 'Risiko\nanalysieren',
            id: 'analysis',
            img: 'img/analysis.png',
            img_hover: 'img/analysis_hover.png'
        },
        {
            title: 'Portfolio\nzusenden',
            id: 'portfolio_senden',
            img: 'img/portfolio_senden.png',
            img_hover: 'img/portfolio_senden_hover.png'
        },
        {
            title: 'Termin\nverienbaren',
            id: 'termin',
            img: 'img/termin.png',
            img_hover: 'img/termin_hover.png'
        },
        {
            title: 'Kontaktdaten\nubermittein',
            id: 'kontakten',
            img: 'img/kontakten.png',
            img_hover: 'img/kontakten_hover.png'
        }
    ],
    portfoliomixes: [
        {
            value: 0,
            id: "leo_a_pie",
            name: 'leo A',
            lev: 0,
            data: 'Unser aktiv gemanagter und vielfach ausgezeichneter Multi-Asset-Fonds (Aktien, Anleihen, Rohstoffe und Liquidität). Siehe Grafik oben.'
        },
        {
            value: 0,
            name: 'leo T',
            id: "leo_t_pie",
            lev: 0,
            data: 'Unser aktiv gemanagter und vielfach ausgezeichneter Multi-Asset-Fonds (Aktien, Anleihen, Rohstoffe und Liquidität). Siehe Grafik oben.'
        },
        {
            value: 0,
            name: 'anleihen',
            id: "anleihen_pie",
            data: 'Wir bieten Ihnen ein aktives Management - auch bei festverzinslichen Anleihen, denn die Zeiten, in denen eine einfache „Sicherheitsanleihe“ im Depot liegen sollte, sind lange passé. Wir kombinieren Ihre Vorgaben zu Zielrendite'
        },
        {
            value: 0,
            name: 'Alternatives',
            id: "alternatives_pie",
            data: 'Wir bieten Ihnen ein aktives Management - auch bei festverzinslichen Anleihen, denn die Zeiten, in denen eine einfache „Sicherheitsanleihe“ im Depot liegen sollte, sind lange passé. Wir kombinieren Ihre Vorgaben zu Zielrendite'
        },
        {
            value: 0,
            name: 'Aktien',
            id: "aktien_pie",
            data: 'Unser Aktienuniversum wird von unseren ausgewiesenen Aktienspezialisten ständig überprüft und ausgewertet, so können wir jederzeit sofort auf veränderte Marktbedingungen reagieren'
        },
        {
            value: 0,
            name: 'ETF',
            id: "ETF_pie",
            data: 'Unser Aktienuniversum wird von unseren ausgewiesenen Aktienspezialisten ständig überprüft und ausgewertet, so können wir jederzeit sofort auf veränderte Marktbedingungen reagieren'
        },
        {
            value: 0,
            name: 'Kein passendes Produkt',
            id: "0",
            data: 'Zu Ihrer Auswahl haben wir aktuell kein passendes Produkt.'
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
    dashboardPortfoliomixes:[
        {
            id: 1,
            value: 0,
            name: "Mischfonds",
            lev: 0
        },
        {
            id: 1,
            value: 0,
            name: "Anleihen"
        },
        {
            id: 1,
            value: 0,
            name: "Alternatives"
        },
        {
            id: 1,
            value: 0,
            name: "Aktien"
        },
        {
            value: 0,
            id: 1,
            name: "ETF"
        },
        {
            value: 0,
            id: 0,
            name: "Kein passendes Produkt"
        }
    ],
    select: function (opt) {
        $('.selected').removeClass('selected');
        $('#' + opt.id).addClass('selected');
        this.selected = opt;
    },
    mobile: $(window).width() <= breakpoint
};

if(globals.mobile)
    globals.select(globals.options[1]);
else
    globals.select(globals.options[0]);

width = $(window).width();

$(window).resize(function (){
    var twidth = $(window).width();
    if (width > breakpoint && twidth <= breakpoint ||
        width <= breakpoint && twidth > breakpoint)
        window.location.href = window.location.href;

    globals.mobile = twidth <= breakpoint;

});