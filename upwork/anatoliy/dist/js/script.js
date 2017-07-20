/**
 * Created with love by kent1ukr.
 */

var unfiltered = {
    x: 0.5,
    y: 0.5,
    z: 0.5
};
$(function () {
    $("#slider-volume").slider({
        range: "min",
        min: 0,
        max: 6,
        value: 1,
        slide: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                $("#slider-volume").slider('option','values',0, 1);
            }
            $("#amount-volume").val(ui.value);
            unfiltered.y = ui.value - 0.5;
            animate();
        }
    });
    $("#amount-volume").val($("#slider-volume").slider("value"));
});
$(function () {
    $("#slider-pays").slider({
        range: "min",
        min: 0,
        max: 6,
        value: 1,
        slide: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                $("#slider-pays").slider('value',1);
                $("#slider-pays").slider.change();
            }
            $("#amount-pays").val(ui.value);
            unfiltered.z = ui.value - 0.5;
            animate();
        }
    });
    $("#amount-pays").val($("#slider-pays").slider("value"));
});
$(function () {
    $("#slider-risks").slider({
        range: "min",
        min: 0,
        max: 6,
        value: 1,
        slide: function (event, ui) {
            if (ui.value < 1) {
                ui.value = 1;
                $("#slider-risks").slider('value',1);
            }
            $("#amount-risks").val(ui.value);
            unfiltered.x = ui.value - 0.5;
            animate();
        }
    });
    $("#amount-risks").val($("#slider-risks").slider("value"));
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

function newLines(x, y, z) {
    var material = [
        new THREE.LineBasicMaterial({color: 0xa6dad0}),
        new THREE.LineBasicMaterial({color: 0xed5464}),
        new THREE.LineBasicMaterial({color: 0xf8cb70})
    ];
    var geometry = [
        new THREE.Geometry(),
        new THREE.Geometry(),
        new THREE.Geometry()
    ];
    geometry[0].vertices.push(
        new THREE.Vector3(x, 0, z),
        new THREE.Vector3(x, y, z)
    );
    geometry[1].vertices.push(
        new THREE.Vector3(0, y, z),
        new THREE.Vector3(x, y, z)
    );
    geometry[2].vertices.push(
        new THREE.Vector3(x, y, 0),
        new THREE.Vector3(x, y, z)
    );
    geometry[0].needsUpdate = true;
    geometry[1].needsUpdate = true;
    geometry[2].needsUpdate = true;
    return [
        new THREE.Line(geometry[0], material[0]),
        new THREE.Line(geometry[1], material[1]),
        new THREE.Line(geometry[2], material[2])
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
}

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true
});
function createBigRenderer() {
    var w = 600;
    var h = 400;
    renderer.setSize(w, h, true);
    return renderer.domElement
}
// var w = 600;
// var h = 400;
// renderer.setSize(w, h, true);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//document.body.appendChild(renderer.domElement);

renderer.setClearColor(0xffffff, 1.0);

function createBigRenderer() {
    console.log("created", 'universum big');
    var w = 1200;
    var h = 800;
    renderer.setSize(w, h, true);
    return renderer.domElement
}

function createSmallRenderer() {
    console.log("created", 'universum small');
    var w = 600;
    var h = 400;
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
sphere.position.x = unfiltered.x;
sphere.position.y = unfiltered.y;
sphere.position.z = unfiltered.z;
scatterPlot.add(sphere);

renderer.render(scene, camera);
addAmbLight();
var lines = newLines(unfiltered.x, unfiltered.y, unfiltered.z);
var light = newSpotLight(unfiltered.x, unfiltered.y + 10, unfiltered.z);
scatterPlot.add(light);
scatterPlot.add(lines[0]);
scatterPlot.add(lines[1]);
scatterPlot.add(lines[2]);

function animate() {
    scatterPlot.remove(lines[0]);
    scatterPlot.remove(lines[1]);
    scatterPlot.remove(lines[2]);
    lines = newLines(unfiltered.x, unfiltered.y, unfiltered.z);
    sphere.position.x = unfiltered.x;
    sphere.position.y = unfiltered.y;
    sphere.position.z = unfiltered.z;
    light.position.x = unfiltered.x;
    light.position.z = unfiltered.z;
    scatterPlot.add(lines[0]);
    scatterPlot.add(lines[1]);
    scatterPlot.add(lines[2]);
    lines[0].geometry.verticesNeedUpdate = true;
    scatterPlot.add(sphere);

    renderer.clear();
    renderer.render(scene, camera);
    console.log("animate: " + unfiltered.y + "fov: " + camera.fov);
}