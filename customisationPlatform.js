

function createButton(name,text){
    const button = document.createElement("button");
    button.className = name;
    button.textContent = text;
    return button;
}

class customisationPlatform{
    constructor(){
        let platform = this.createPlatform("customisation");
    }
    returnPlatform(){
        return this.platform;
    }
    appendToPlatform(item){
        this.platform.appendChild(item);
    }
    showFeatures(){
        return this.platform.childNodes;
    }
    createPlatform(name){
        const platform = document.createElement("div");
        platform.className = name;
        this.platform = platform;
    }
}

function createPlatform(){
    const customisation = new customisationPlatform();
    const stepTitle = document.createElement("h3");
    stepTitle.textContent = "--step title--";
    const stepWorkArea = document.createElement("div");
    stepWorkArea.textContent = "--Step actions--"
    customisation.appendToPlatform(createButton("back","Back"));
    customisation.appendToPlatform(stepTitle)
    customisation.appendToPlatform(stepWorkArea);
    customisation.appendToPlatform(createButton("nextStep","Next Step: --Insert Step here"));
    return customisation.returnPlatform()
}

// customisation area
//const body = document.querySelector("body");


// Add a next step button in customisation area

// Listen for back button press and next step press

// customisation.platform.addEventListener("click",value=>{
//     if(value.target.className === "back"){
//         body.removeChild(customisation.returnPlatform());
//     }
//     if(value.target.className === "nextStep"){
//         // Save data somewhere
//         body.removeChild(customisation.returnPlatform());
//     }
// })



// // The button
// const button = document.querySelector(".nextStep");
// button.addEventListener("click",value=>{
//     body.appendChild(customisation.returnPlatform());
// })



