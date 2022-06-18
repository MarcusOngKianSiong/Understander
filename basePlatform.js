const body = document.querySelector("body");
const concept = document.querySelector(".concept");
const beginProcess = document.querySelector(".beginProcess");
const definitions = document.querySelector(".definitions");

beginProcess.addEventListener("click",value=>{
    // Platform, back button, next step button, and area execute the various steps
    const customisationPlatform = createPlatform();
    body.appendChild(customisationPlatform);
    
    setTimeout(()=>{},2000);
    body.removeChild(customisationPlatform);
    const placeholder = document.createElement("div");
    placeholder.textContent = "--DEFINITION HERE--"
    definitions.appendChild(placeholder);
})