class customisationPlatform{
    constructor(){
        const platform = this.createPlatform();
    }
    createPlatform(){
        const platform = document.createElement("div");
        const back = document.createElement("button");
        const workArea = document.createElement("div");
        const nextStep = document.createElement("button");
        platform.className = "process";
        back.className = "back";
        workArea.className = "workArea";
        nextStep.className = "nextStep";
        back.textContent = "Back";
        nextStep.textContent = "Next  Step"
        platform.appendChild(back);
        platform.appendChild(workArea);
        platform.appendChild(nextStep);
        this.platform = platform;
    }
    modifyBackButton(func){
        this.platform.children[0].addEventListener('click',func());
    }
    modifynextStepButton(func){
        this.platform.children[2].addEventListener('click',func());
    }
    // DATA FORMAT: An array of required elements
    changeWorkArea(arr){
        arr.forEach(element => {
            this.platform.children[1].appendChild(element)
        }); 
    }
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



