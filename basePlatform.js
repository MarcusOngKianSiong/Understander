const body = document.querySelector("body");
const coreConcept = document.querySelector(".concept");
const beginProcess = document.querySelector(".beginProcess");
const definitions = document.querySelector(".definitions");

const platform = new customisationPlatform();
const one = new stepOne("the big dumb ass");

beginProcess.addEventListener("click",value=>{
    body.appendChild(platform.platform);
    platform.changeWorkArea(one.requiredElements);
})
body.addEventListener("keydown",(key)=>{
    one.navigationFeature(key.key);
    one.updateDisplay();
})
