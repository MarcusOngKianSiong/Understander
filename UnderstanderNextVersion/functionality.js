const body = document.querySelector('body');
const base = document.querySelector('.base');
const conceptField = document.querySelector('.conceptField');
const beginProcess = document.querySelector('.beginProcess');
const customisation = document.querySelector('.customisation');
const backButton = document.querySelector('.back');
const nextStep = document.querySelector('.nextStep');
const steps = document.querySelector('.steps');
const step = steps.querySelectorAll('.step');
const selectKeywords = document.querySelector('.selectKeywords');
const temporary = null;

let concept = {};

// function addEventToSelectKeywords(){
//     selectKeywords.addEventListener("click",response=>{
//         const selectedKeyword = response.target
//         const borderColor = selectedKeyword.style.borderColor;
//         const keyword = selectedKeyword.textContent;
//         if(borderColor !== "red"){
//             selectedKeyword.style.border = "1px solid red";
//             concept["identify"].push(keyword);
//         }
//         if(borderColor === "red"){
//             selectedKeyword.style.border = "";
//             const wordIndex = concept["identify"].indexOf(keyword);
//             concept["identify"].splice(wordIndex,1);
//         }
//         console.log(concept);
//     })
// }

function identifyStepFunctionality(){
    const words = concept.concept.split(' ');
    // Setup data collection   
    concept["identify"] = [];           
    words.forEach((word,index)=>{
        const elementForAWord = document.createElement('div');
        elementForAWord.setAttribute("class","word");
        elementForAWord.textContent = word+"\xa0";
        selectKeywords.appendChild(elementForAWord);
    })
    console.log(selectKeywords)
}

function addEventToBeginProcess(){
    beginProcess.addEventListener('click',value=>{
        const retrieveValue = conceptField.value;                                           // Get concept from the first input field
        if (retrieveValue != ''){                                                           // Make sure that there is a value in the first input field before proceeding
            concept['concept'] = retrieveValue;
            console.log(concept);                                          // Store value 
            // step.forEach((element,index)=>{                                                 // Remove all other elements ("step" class) except for one ("identify" class) from the parent element ("steps" class) 
            //     if(index !== 0){
            //         steps.removeChild(element);
            //     }
            // })
            identifyStepFunctionality();                                                    // Populate the element ("identify" class) with multiple elements where each element contains a word found in the concept
            body.appendChild(customisation);                                                    // Display the customisation platform
        }else{                                                                              // Indicate a value needs to be written in the first input field
            conceptField.style.border = 'red 1px solid';
            conceptField.setAttribute('placeholder','cannot be empty');
        }
    })
}



function addEventToBackButton(){
    backButton.addEventListener('click',value=>{
        let length = Object.keys(concept).length;
        if(length === 1 || length === 2){
            body.removeChild(customisation);
            
        }
        if(length === 2 || length === 3){
            
        }
        if(length === 3 || length === 4){

        }
        if(length === 4 || length === 5){

        }
    })
}


function eventListeners(){
    addEventToBeginProcess();       // Start the process
    addEventToBackButton();         // Ensure that the back button brings user back to previous step from his current step
    addEventToSelectKeywords();     // Listen to any user click on specific keywords
}

function init(){
    body.removeChild(customisation);
    eventListeners();
}

init()