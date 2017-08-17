/**
 * Created with love by kent1ukr.
 */
var unfiltered = {
    x: 0.5,
    y: 0.5,
    z: 0.5
};
var currentIndex;
var maxRisks = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5];

function refreshFonds() {
    setFonds(currentIndex);
}

function setAverages(average) {
    if (average) {
        // console.log(average);
        if (document.getElementById("average_performance"))
            document.getElementById("average_performance").innerHTML = parseFloat(average[0]).toFixed(2) + '%';
        if (document.getElementById("risks"))
            document.getElementById("risks").innerHTML = parseFloat(average[1]).toFixed(2) + '% , ' + parseFloat(average[2]).toFixed(2) + '%';
    }
}

function setDoughnutChart(id, value) {
    value = [
        value,
        100 - value
    ];
    if (document.getElementById(id))
        new Chart(document.getElementById(id), {
            type: 'doughnut',
            data: {
                labels: [0, 1],
                datasets: [
                    {

                        backgroundColor: ["#ea6d28", "#ededed"],
                        data: value
                    }
                ]
            },
            options: {
                cutoutPercentage: 80,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false,
                },
            }
        });

}

function biggetThanZero(number) {
    return number > 0;

}

function isEmpty(array) {
    if (!array)
        return true;
    return !array.some(biggetThanZero);
}

function setFonds(fondsIndex) {
    currentIndex = fondsIndex;
    // console.log('Lev: ' + fondsIndex[0]);
    var portfoliomixes = globals.portfoliomixes;
    var dashboardPortfoliomixes = globals.dashboardPortfoliomixes;

    // console.log(fondsIndex);
    function setValues(index, value) {
        dashboardPortfoliomixes[index].value = value;
    }

    if (isEmpty(fondsIndex)) {
        portfoliomixes[6].value = 100;
        setValues(5, 100);
        for (var i = 0; i < 6; i++) {
            portfoliomixes[i].value = 0;
            if (i < 5) {
                setValues(i, 0);
            }
        }
    } else {
        portfoliomixes[6].value = 0;
        setValues(5, 0);
        // console.log('Leo A: ' + fondsIndex[1]);
        portfoliomixes[0].value = fondsIndex[1];
        dashboardPortfoliomixes[0].value = fondsIndex[1];
        portfoliomixes[0].lev = fondsIndex[0];
        dashboardPortfoliomixes[0].lev = fondsIndex[0];
        setDoughnutChart(portfoliomixes[0].id, portfoliomixes[0].value);

        // console.log('Leo T: ' + fondsIndex[2]);
        portfoliomixes[1].value = fondsIndex[2];
        if (dashboardPortfoliomixes[0].value == 0)
            dashboardPortfoliomixes[0].value = fondsIndex[2];
        portfoliomixes[0].lev = fondsIndex[0];
        dashboardPortfoliomixes[0].lev = fondsIndex[0];
        setDoughnutChart(portfoliomixes[1].id, portfoliomixes[1].value);

        portfoliomixes[2].value = fondsIndex[3];
        setValues(1, fondsIndex[3]);
        setDoughnutChart(portfoliomixes[2].id, portfoliomixes[2].value);

        portfoliomixes[3].value = fondsIndex[4];
        setValues(2, fondsIndex[4]);
        setDoughnutChart(portfoliomixes[3].id, portfoliomixes[3].value);

        portfoliomixes[4].value = fondsIndex[5];
        setValues(3, fondsIndex[5]);
        setDoughnutChart(portfoliomixes[4].id, portfoliomixes[4].value);

        portfoliomixes[5].value = fondsIndex[6];
        setValues(4, fondsIndex[6]);
        setDoughnutChart(portfoliomixes[5].id, portfoliomixes[5].value);
    }
}

$(function () {
    var slider = $("#slider-volume");
    slider.slider({
        range: "min",
        min: 1,
        max: 6,
        value: 1,
        change: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                slider.slider('value', 1);
                slider.trigger('change');
            }
            globals.filter_touched = true;
            switch (ui.value) {
                case 1:
                    $("#amount-volume").val('100 000 €');
                    break;
                case 2:
                    $("#amount-volume").val('250 000 €');
                    break;
                case 3:
                    $("#amount-volume").val('500 000 €');
                    break;
                case 4:
                    $("#amount-volume").val('750 000 €');
                    break;
                case 5:
                    $("#amount-volume").val('1 000 000 €');
                    break;
                case 6:
                    $("#amount-volume").val('2 500 000 €');
                    break;

            }

            unfiltered.y = ui.value - 0.5;
            if (isFullScreen()) {
                showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            else {
                showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            animate();
        },
        slide: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                slider.slider('value', 1);
                slider.trigger('change');
            }
            globals.filter_touched = true;
            switch (ui.value) {
                case 1:
                    $("#amount-volume").val('100 000 €');
                    break;
                case 2:
                    $("#amount-volume").val('250 000 €');
                    break;
                case 3:
                    $("#amount-volume").val('500 000 €');
                    break;
                case 4:
                    $("#amount-volume").val('750 000 €');
                    break;
                case 5:
                    $("#amount-volume").val('1 000 000 €');
                    break;
                case 6:
                    $("#amount-volume").val('2 500 000 €');
                    break;

            }

            unfiltered.y = ui.value - 0.5;
            if (isFullScreen()) {
                showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            else {
                showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            animate();
        }
    });
    $('#increase-volume').click(function () {
        var sliderCurrentValue = slider.slider("option", "value");
        slider.slider("value", sliderCurrentValue + 1);
    });

    $('#decrease-volume').click(function () {
        var sliderCurrentValue = slider.slider("option", "value");
        slider.slider("value", sliderCurrentValue - 1);
    });
    $("#amount-volume").val('100 000 €');
});
$(function () {
    var slider = $("#slider-pays");
    slider.slider({
        range: "min",
        min: 1,
        max: 6,
        value: 1,
        change: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                slider.slider('value', 1);
                slider.trigger('change');
            }
            globals.filter_touched = true;
            switch (ui.value) {
                case 1:
                    $("#amount-pays").val('Vollständig');
                    break;
                case 2:
                    $("#amount-pays").val('Mehrheitlich');
                    break;
                case 3:
                    $("#amount-pays").val('Überdurchschnittlich');
                    break;
                case 4:
                    $("#amount-pays").val('Normal');
                    break;
                case 5:
                    $("#amount-pays").val('Gering');
                    break;
                case 5:
                    $("#amount-pays").val('Keine');
                    break;

            }
            unfiltered.z = ui.value - 0.5;
            if (isFullScreen()) {
                showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            } else {
                showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            animate();
        },
        slide: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                slider.slider('value', 1);
                slider.trigger('change');
            }
            globals.filter_touched = true;
            switch (ui.value) {
                case 1:
                    $("#amount-pays").val('Vollständig');
                    break;
                case 2:
                    $("#amount-pays").val('Mehrheitlich');
                    break;
                case 3:
                    $("#amount-pays").val('Überdurchschnittlich');
                    break;
                case 4:
                    $("#amount-pays").val('Normal');
                    break;
                case 5:
                    $("#amount-pays").val('Gering');
                    break;
                case 5:
                    $("#amount-pays").val('Keine');
                    break;

            }
            unfiltered.z = ui.value - 0.5;
            if (isFullScreen()) {
                showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            } else {
                showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            animate();
        }
    });
    $('#increase-pays').click(function () {
        var sliderCurrentValue = slider.slider("option", "value");
        slider.slider("value", sliderCurrentValue + 1);
    });

    $('#decrease-pays').click(function () {
        var sliderCurrentValue = slider.slider("option", "value");
        slider.slider("value", sliderCurrentValue - 1);
    });
    $("#amount-pays").val('Vollständig');
});
$(function () {
    var slider = $("#slider-risks");
    slider.slider({
        range: "min",
        min: 1,
        max: 6,
        value: 1,
        change: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                slider.slider('value', 1);
                slider.trigger('change');
            }
            globals.filter_touched = true;
            switch (ui.value) {
                case 1:
                    $("#amount-risks").val('Sicherheitsorientiert (0%\xa0<\xa0VaR\xa0<=\xa02,5%)');
                    maxRisks = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5];
                    break;
                case 2:
                    $("#amount-risks").val('Begrenzt risikobereit (2,5%\xa0<\xa0VaR\xa0<=\xa07,5%)');
                    maxRisks = [7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5];
                    break;
                case 3:
                    $("#amount-risks").val('Risikobereit (7,5%\xa0<\xa0VaR\xa0<=\xa012,5%)');
                    maxRisks = [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5];
                    break;
                case 4:
                    $("#amount-risks").val('Vermehrt risikobereit (12,5%\xa0<\xa0VaR\xa0<=\xa017,5%)');
                    maxRisks = [17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5];
                    break;
                case 5:
                    $("#amount-risks").val('Spekulativ (17,5%\xa0<\xa0VaR\xa0<=\xa0100%)');
                    maxRisks = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
                    break;
                case 6:
                    $("#amount-risks").val('Höchst spekulativ (VaR\xa0>\xa0100%)\n');
                    maxRisks = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
                    break;

            }
            unfiltered.x = ui.value - 0.5;
            if (isFullScreen()) {
                showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            } else {
                showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            animate();
        },
        slide: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                slider.slider('value', 1);
                slider.trigger('change');
            }
            globals.filter_touched = true;
            switch (ui.value) {
                case 1:
                    $("#amount-risks").val('Sicherheitsorientiert (0%\xa0<\xa0VaR\xa0<=\xa02,5%)');
                    maxRisks = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5];
                    break;
                case 2:
                    $("#amount-risks").val('Begrenzt risikobereit (2,5%\xa0<\xa0VaR\xa0<=\xa07,5%)');
                    maxRisks = [7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5];
                    break;
                case 3:
                    $("#amount-risks").val('Risikobereit (7,5%\xa0<\xa0VaR\xa0<=\xa012,5%)');
                    maxRisks = [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5];
                    break;
                case 4:
                    $("#amount-risks").val('Vermehrt risikobereit (12,5%\xa0<\xa0VaR\xa0<=\xa017,5%)');
                    maxRisks = [17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5];
                    break;
                case 5:
                    $("#amount-risks").val('Spekulativ (17,5%\xa0<\xa0VaR\xa0<=\xa0100%)');
                    maxRisks = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
                    break;
                case 6:
                    $("#amount-risks").val('Höchst spekulativ (VaR\xa0>\xa0100%)\n');
                    maxRisks = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
                    break;

            }
            unfiltered.x = ui.value - 0.5;
            if (isFullScreen()) {
                showBigPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showBigRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            } else {
                showSmallPerformance((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
                showSmallRisks((unfiltered.y + 0.5) + "" + (unfiltered.x + 0.5) + "" + (unfiltered.z + 0.5) + "");
            }
            animate();
        }
    });
    $('#increase-risks').click(function () {
        var sliderCurrentValue = slider.slider("option", "value");
        slider.slider("value", sliderCurrentValue + 1);
    });

    $('#decrease-risks').click(function () {
        var sliderCurrentValue = slider.slider("option", "value");
        slider.slider("value", sliderCurrentValue - 1);
    });
    $("#amount-risks").val('Sicherheitsorientiert (0%\xa0<\xa0VaR\xa0<=\xa02,5%)');

});


function addAmbLight() {
    var ambLight = new THREE.AmbientLight(0xffffff, 1.25);
    scatterPlot.add(ambLight);
    var spotLight = new THREE.SpotLight(0xffffff, 0.25, 0, Math.PI / 2.75);
    spotLight.position.set(6, 6, 6);
    spotLight.castShadow = false;
    spotLight.target = (scene);
    scatterPlot.add(spotLight);
}

function newSpotLight(x, y, z) {
    var spotLight = new THREE.SpotLight(0xffffff, 0.5, 0, Math.PI / 2.75);
    spotLight.position.set(x, y, z);
    spotLight.castShadow = true;
    spotLight.shadowDarkness = 0.05;
    spotLight.target = sphere;
    return spotLight;
}

function createEdges() {
    var edgecolor = 0xcccccc;
    var edgeMaterial = [
        new THREE.MeshBasicMaterial({color: edgecolor}),
        new THREE.MeshBasicMaterial({color: edgecolor}),
        new THREE.MeshBasicMaterial({color: edgecolor}),
        new THREE.MeshBasicMaterial({color: edgecolor}),
        new THREE.MeshBasicMaterial({color: edgecolor}),
        new THREE.MeshBasicMaterial({color: edgecolor})
    ];
    var edgeGeometry = [
        new THREE.CylinderGeometry(0.08, 0.08, 6, 3),
        new THREE.CylinderGeometry(0.08, 0.08, 6, 3),
        new THREE.CylinderGeometry(0.08, 0.08, 6, 3),
        new THREE.CylinderGeometry(0.08, 0.08, 6, 3),
        new THREE.CylinderGeometry(0.08, 0.08, 6, 3),
        new THREE.CylinderGeometry(0.08, 0.08, 6, 3)
    ];
    var edgeMesh =[
        new THREE.Mesh(edgeGeometry[0], edgeMaterial[0]),
        new THREE.Mesh(edgeGeometry[1], edgeMaterial[1]),
        new THREE.Mesh(edgeGeometry[2], edgeMaterial[2]),
        new THREE.Mesh(edgeGeometry[3], edgeMaterial[3]),
        new THREE.Mesh(edgeGeometry[4], edgeMaterial[4]),
        new THREE.Mesh(edgeGeometry[5], edgeMaterial[5]),
    ];
    edgeMesh[0].position.x = 0;
    edgeMesh[0].position.y = 6;
    edgeMesh[0].position.z = 6/2;
    edgeMesh[0].rotation.x = -Math.PI / 2;
    scene.add(edgeMesh[0]);
    edgeMesh[1].position.x = 0;
    edgeMesh[1].position.y = 6/2;
    edgeMesh[1].position.z = 6;
    // edgeMesh[1].rotation.x = -Math.PI / 2;
    scene.add(edgeMesh[1]);
    edgeMesh[2].position.x = 6/2;
    edgeMesh[2].position.y = 0;
    edgeMesh[2].position.z = 6;
    edgeMesh[2].rotation.z = -Math.PI / 2;
    scene.add(edgeMesh[2]);

    edgeMesh[3].position.x = 6;
    edgeMesh[3].position.y = 0;
    edgeMesh[3].position.z = 6/2;
    edgeMesh[3].rotation.x = -Math.PI / 2;
    scene.add(edgeMesh[3]);
    edgeMesh[4].position.x = 6;
    edgeMesh[4].position.y = 6/2;
    edgeMesh[4].position.z = 0;
    // edgeMesh[1].rotation.x = -Math.PI / 2;
    scene.add(edgeMesh[4]);
    edgeMesh[5].position.x = 6/2;
    edgeMesh[5].position.y = 6;
    edgeMesh[5].position.z = 0;
    edgeMesh[5].rotation.z = -Math.PI / 2;
    scene.add(edgeMesh[5]);
}
function newLines(x, y, z) {
    var material = [
        new THREE.MeshBasicMaterial({color: 0xa6dad0}),
        new THREE.MeshBasicMaterial({color: 0xed5464}),
        new THREE.MeshBasicMaterial({color: 0xf8cb70})
    ];
    var geometry = [
        new THREE.CylinderGeometry(0.05, 0.05, y, 10),
        new THREE.CylinderGeometry(0.05, 0.05, x, 10),
        new THREE.CylinderGeometry(0.05, 0.05, z, 10),
    ];
    geometry[0].needsUpdate = true;
    geometry[1].needsUpdate = true;
    geometry[2].needsUpdate = true;
    return [
        new THREE.Mesh(geometry[0], material[0]),
        new THREE.Mesh(geometry[1], material[1]),
        new THREE.Mesh(geometry[2], material[2])
    ]
}

function addCube(scene) {
    var texture = [
        new THREE.TextureLoader().load('img/Cube2D_1.png', function () {
            animate();
        }),
        new THREE.TextureLoader().load('img/Cube2D_2.png', function () {
            animate();
        }),
        new THREE.TextureLoader().load('img/Cube2D_3.png', function () {
            animate();
        })
    ];
    var geometry = [
        new THREE.PlaneBufferGeometry(15, 15),
        new THREE.PlaneBufferGeometry(14.8, 15),
        new THREE.PlaneBufferGeometry(15, 15),
        new THREE.PlaneBufferGeometry(6, 6)
    ];
    var material = [
        new THREE.MeshBasicMaterial({map: texture[0], side: THREE.DoubleSide, transparent: true}),
        new THREE.MeshBasicMaterial({map: texture[1], side: THREE.DoubleSide, transparent: true}),
        new THREE.MeshBasicMaterial({map: texture[2], side: THREE.DoubleSide, transparent: true}),
        new THREE.MeshStandardMaterial({color: 0xf5f6f7, transparent: true, opacity: 0.25})
    ];
    var sceneMesh = [
        new THREE.Mesh(geometry[0], material[0]),
        new THREE.Mesh(geometry[1], material[1]),
        new THREE.Mesh(geometry[2], material[2]),
        new THREE.Mesh(geometry[3], material[3]),
        new THREE.Mesh(geometry[3], material[3]),
        new THREE.Mesh(geometry[3], material[3])
    ];
    sceneMesh[0].position.x = 7.5;
    sceneMesh[0].position.y = 0;
    sceneMesh[0].position.z = 7.5;
    sceneMesh[0].rotation.x = -Math.PI / 2;
    scene.add(sceneMesh[0]);
    sceneMesh[1].position.x = 7.4;
    sceneMesh[1].position.y = 7.5;
    sceneMesh[1].position.z = 0;
    sceneMesh[1].receiveShadow = true;
    sceneMesh[1].castShadow = true;
    scene.add(sceneMesh[1]);
    sceneMesh[2].position.x = 0;
    sceneMesh[2].position.y = 7.5;
    sceneMesh[2].position.z = 7.5;
    sceneMesh[2].rotation.y = Math.PI / 2;
    sceneMesh[2].receiveShadow = true;
    sceneMesh[2].castShadow = true;
    scene.add(sceneMesh[2]);

    sceneMesh[3].position.x = 3;
    sceneMesh[3].position.y = -0.01;
    sceneMesh[3].position.z = 3;
    sceneMesh[3].rotation.x = -Math.PI / 2;
    sceneMesh[3].receiveShadow = true;
    sceneMesh[3].castShadow = true;
    scene.add(sceneMesh[3]);
    sceneMesh[4].position.x = 3;
    sceneMesh[4].position.y = 3;
    sceneMesh[4].position.z = -0.01;
    sceneMesh[4].receiveShadow = true;
    sceneMesh[4].castShadow = true;
    scene.add(sceneMesh[4]);
    sceneMesh[5].position.x = -0.01;
    sceneMesh[5].position.y = 3;
    sceneMesh[5].position.z = 3;
    sceneMesh[5].rotation.y = Math.PI / 2;
    sceneMesh[5].receiveShadow = true;
    sceneMesh[5].castShadow = true;
    scene.add(sceneMesh[5]);
    createEdges();
}

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true
});

// function createBigRenderer() {
//     var w = 600;
//     var h = 350;
//     renderer.setSize(w, h, true);
//     return renderer.domElement
// }

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setClearColor(0xffffff, 1.0);

function createBigRenderer() {
    var w = 1400;
    var h = 900;
    renderer.setSize(w, h, true);
    return renderer.domElement
}

function createSmallRenderer() {
    var w = 600;
    var h = 300;
    renderer.setSize(w, h, true);
    return renderer.domElement
}

var camera = new THREE.PerspectiveCamera(60, 3 / 2, 1, 100000);
camera.position.x = 11;
camera.position.y = 3.2;
camera.position.z = 12;
camera.lookAt(new THREE.Vector3(1, 3.2, 0));


var scene = new THREE.Scene();

var scatterPlot = new THREE.Object3D();
scene.add(scatterPlot);

addCube(scene);

scatterPlot.rotation.y = 0;

function v(x, y, z) {
    return new THREE.Vector3(x, y, z);
}

var lineGeo = new THREE.Geometry();


lineGeo.vertices.push(
    v(0, 0, 0),
    v(0, 0, 6),
    v(0, 0, 0),
    v(6, 0, 0),
    v(0, 0, 0),
    v(0, 6, 0)
);
var lineMat = new THREE.LineBasicMaterial({
    color: 0x000000,
    lineWidth: 2
});
var line = new THREE.Line(lineGeo, lineMat);
line.type = THREE.Lines;
scatterPlot.add(line);

var sphere;
var ballGeo = new THREE.SphereGeometry(0.25, 20, 20);
var ballMaterial = new THREE.MeshPhongMaterial({color: 0xf26922});
sphere = new THREE.Mesh(ballGeo, ballMaterial);
sphere.castShadow = true;
sphere.position.x = 6 - unfiltered.z;
sphere.position.y = unfiltered.y;
sphere.position.z = 6 - unfiltered.x;
scatterPlot.add(sphere);

renderer.render(scene, camera);
addAmbLight();
var lines = newLines(6 - unfiltered.x, unfiltered.y, 6 - unfiltered.z);
var light = newSpotLight(6 - unfiltered.x, unfiltered.y + 10, 6 - unfiltered.z);
scatterPlot.add(light);
scatterPlot.add(lines[0]);
scatterPlot.add(lines[1]);
scatterPlot.add(lines[2]);

function animate() {


    scatterPlot.remove(lines[0]);
    scatterPlot.remove(lines[1]);
    scatterPlot.remove(lines[2]);
    lines = newLines(6 - unfiltered.z, unfiltered.y, 6 - unfiltered.x);
    lines[0].position.set( 6 - unfiltered.z,  unfiltered.y / 2, 6 - unfiltered.x);
    lines[1].rotation.z = -Math.PI / 2;
    lines[1].position.set( (6 - unfiltered.z) / 2,  unfiltered.y, 6 - unfiltered.x);
    lines[2].rotation.x = -Math.PI / 2;
    lines[2].position.set( 6 - unfiltered.z,  unfiltered.y, (6 - unfiltered.x) / 2);
    sphere.position.x = 6 - unfiltered.z;
    sphere.position.y = unfiltered.y;
    sphere.position.z = 6 - unfiltered.x;
    light.position.x = 6 - unfiltered.z;
    light.position.z = 6 - unfiltered.x;
    scatterPlot.add(lines[0]);
    scatterPlot.add(lines[1]);
    scatterPlot.add(lines[2]);
    lines[0].geometry.verticesNeedUpdate = true;
    scatterPlot.add(sphere);

    renderer.clear();
    renderer.render(scene, camera);
    // console.log("animate: " + unfiltered.y + "fov: " + camera.fov);
}
