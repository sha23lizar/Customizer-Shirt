import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color:"#A6E44C",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:"./threejs.png",
    fullDecal:"./threejs.png",
    model3D:"./shirt_baked.glb"


})

export default state