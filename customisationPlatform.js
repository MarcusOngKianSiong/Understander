//Customisation platform takes in a concept and spits out a definition

class customisationPlatform{
    constructor(baseData,basePlatform){
        this.basePlatform = basePlatform;
        this.customisationPlatform = null;
        this.baseData = baseData;
        this.stepInstance = null;
        this.dataProcessing = {
            "baseData": baseData,
            "select": null,
            "refine": null,
            "search":null,
            "organise": null
        }
        this.createPlatform();
        this.createStepInstance();
    }
    getData(){
        if(this.dataProcessing.select === null){
            this.dataProcessing.select = this.stepInstance.getData();
            return;
        }
        if(this.dataProcessing.refine === null){
            this.dataProcessing.refine = this.stepInstance.getData();
            return;
        }
        if(this.dataProcessing.search === null){
            this.dataProcessing.refine = this.stepInstance.getData();
            return;
        }
        if(this.dataProcessing.organise === null){
            this.dataProcessing.refine = this.stepInstance.getData();
            return;
        }
    }
    createPlatform(){
        const customisationPlatform = document.createElement("div");
        const back = document.createElement("button");
        const workArea = document.createElement("div");
        const nextStep = document.createElement("button");
        customisationPlatform.className = "process";
        back.className = "back";
        workArea.className = "workArea";
        workArea.tabIndex = "0";
        nextStep.className = "nextStep";
        back.textContent = "Back";
        nextStep.textContent = "Next  Step"
        customisationPlatform.appendChild(back);
        customisationPlatform.appendChild(workArea);
        customisationPlatform.appendChild(nextStep);
        this.customisationPlatform = customisationPlatform
        this.basePlatform.appendChild(this.customisationPlatform);
    }
    createStepInstance(){
        if (this.dataProcessing.select === null){
            console.log("selecting")
            this.stepInstance = new selecting(this.dataProcessing.baseData,this.customisationPlatform.querySelector(".workArea"));
            return;
        }
        if(this.dataProcessing.refine === null){
            console.log("refining")
            this.stepInstance = new refining(this.dataProcessing.select,this.customisationPlatform.querySelector(".workArea"));;
            return;
        }
        // if(this.dataProcessing.search === null){
        //     this.dataProcessing.refine = this.stepInstance.getData();
        //     return;
        // }
        // if(this.dataProcessing.organise === null){
        //     this.dataProcessing.refine = this.stepInstance.getData();
        //     return;
        // }
    }
    // Remove the elements associated with the step
    stopStepInstance(){
        this.stepInstance.emptyWorkArea();
    }
    // Remove the elements associated with processing itself
    stopProcessingInstance(){
        this.basePlatform.removeChild(this.customisationPlatform)
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



