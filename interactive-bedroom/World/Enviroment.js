import * as THREE from "three";
import Experience from "../Experience/Experience.js";


    export default class Environment {
        constructor() {
            this.experience = new Experience();
            this.scene = this.experience.scene;
    
            this.setSunlight();

        }

    setSunlight() {
        this.scene.background = new THREE.Color( 0xd4eefa );
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);
    }
    resize(){
       
    }
    update(){

    }
}