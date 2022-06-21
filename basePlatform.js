class basePlatform{
    constructor(){
        this.body = document.querySelector("body");
        this.coreConcept = document.querySelector(".concept");
        this.beginProcess = document.querySelector(".beginProcess");
        this.definitions = document.querySelector(".definitions");
        this.processingInstance = null;
        this.data = [];
        this.currentStep = "beginning";
    }
    passData(){
        return this.data[this.data.length-1];
    }
    beginProcessing(){
        this.processingInstance = new customisationPlatform(this.data[this.data.length-1],this.body);
    }
    retrieveData(){
        this.data.push(this.coreConcept.value);
    }
    stopInstance(){
        this.processingInstance.stopStepInstance();
        this.processingInstance = null;
    }
}

const base = new basePlatform();

// base.beginProcess.addEventListener("click",()=>{
//     base.retrieveData();
//     base.beginProcessing();
// })

base.body.addEventListener("keydown",(key)=>{
    if(base.currentStep === "identify"){
        if(key.target.className === "back" && key.key === "Enter"){
            console.log(key.key);
            base.processingInstance.stopProcessingInstance();
            base.processingInstance = null;
            base.currentStep = "beginning";
        }
        if(key.target.className === "workArea"){
            base.processingInstance.stepInstance.navigationFeature(key.key);
        }
        if(key.target.className === "nextStep" && key.key === "Enter"){
            base.processingInstance.getData();
            if(base.processingInstance.dataProcessing.select.length !== 0){
                base.processingInstance.stopStepInstance();
                base.processingInstance.createStepInstance();
                base.currentStep = "refine"
            }
            //base.processingInstance.createStepInstance();
        }
    }

    if(key.target.className === "beginProcess" && key.key === "Enter" && base.currentStep === "beginning"){
        base.retrieveData();
        base.beginProcessing();
        base.currentStep = "identify";
    }

    
    // one.navigationFeature(key.key);
})
