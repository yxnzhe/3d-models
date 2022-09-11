window.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas');
    var engine = new BABYLON.Engine(canvas, true);

    var createScene = function() {
        var scene = new BABYLON.Scene(engine);
        scene.clearColour = new BABYLON.Color3.White();
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
        return scene;
    }

    var scene = createScene();
    engine.runRenderLoop(function() {
        scene.render();
    })
});

// <script src="https://preview.babylonjs.com/babylon.js"></script>
// <script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
// <script src="https://preview.babylonjs.com/gltf_validator.js"></script>

var canvas = document.getElementById("renderCanvas");
var createScene = function() {
    var scene = new BABYLON.Scene(engine);

    var environment = scene.createDefaultEnvironment({
        enableGroundShadow: true,
        groundYBias: 1
    });

    var vrHelper = scene.createDefaultVRExperience({
        createDeviceOrientationCamera: false
    });
    vrHelper.enableTeleportation({floorMeshes: [environment.ground]});

    var building = BABYLON.SceneLoader.Append("./", "assets/img/Test3DModel.glb", scene, function (meshes) {
        scene.createDefaultCameraOrLight(true, true, true);
    });
    return scene;
};

var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
var scene = createScene();

engine.runRenderLoop(function() {
    if(scene) {
        scene.render();
    }
})