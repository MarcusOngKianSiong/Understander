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
const displaySearchTerm = document.querySelector('.displaySearchTerms');
const editSearchTerm = document.querySelector(".editSearchTerm")

let data = {
    concept: null,
    identify: null,
    define: null,
    search: null,
    construct: null
};
let theFourSteps = {
    identify: "current",
    define: null,
    search: null,
    construct: null
}

function identify(){
    data.identify = [];
    const words = data.concept.split(" ");
    // Create elements and attach each word to each element
    let elements = [];
    words.forEach(word => {
        const element = document.createElement("p");
        element.textContent = word;
        element.setAttribute("class","word");
        elements.push(element);
    });
    // Append each element to the parent
    elements.forEach(element=>{
        selectKeywords.appendChild(element);
    })
    // Add event listener to each element
    elements.forEach(element=>{
        element.addEventListener("click",response=>{
            if(element.style.borderColor === "red"){
                element.style.border = "";
                const value = data.identify.indexOf(response.target.textContent);
                data.identify.splice(value,1);
            }else{
                element.style.border = "1px solid red";
                data.identify.push(element.textContent);
            }
            refine(); 
        })
    })
}

const refinedSearchTerm = [];
function refine(){
    // Set up the storage to store the refined keywords
    data.define = {};
    data.identify.forEach(word=>{
        data.define[word] = word;
    })
    console.log(data.define);
    // If there are elements in displaySearchTerms, remove them
    if(displaySearchTerm.firstChild){
        while(displaySearchTerm.firstChild){
            displaySearchTerm.removeChild(displaySearchTerm.firstChild);
        }
    }
    //Create a list of elements containing the search term
    const searchTerms = [];
    data.identify.forEach(keyword=>{
        const element = document.createElement("li");
        element.textContent = keyword;
        element.setAttribute("class","searchTerm");
        element.setAttribute("id",keyword)
        searchTerms.push(element);
    })
    //Append the list of elements to displaySearchTerms
    searchTerms.forEach(terms=>{
        displaySearchTerm.appendChild(terms);
    })
    // Each search term can be clicked on and refined
    searchTerms.forEach(element=>{
        element.addEventListener("click",response=>{
            if (element.style.borderColor !== 'red'){
                searchTerms.forEach(element2=>{
                    element2.style.border = "";
                })
                element.style.border = "1px solid red";
            }
            editSearchTerm.value = element.textContent;
            editSearchTerm.setAttribute("id",element.getAttribute("id"))
        })
    })

    // Any changes to the concept updates the concept display iin real tiime
    editSearchTerm.addEventListener("input",response=>{
        // Check what element is being edited
        const elementIId = editSearchTerm.getAttribute("id");
        const elementBeingEdited = document.querySelector(`#${elementIId}`)
        // When you type something, change data.define
        data.define[elementIId] = editSearchTerm.value;
        // Destroy previous element, 
        displaySearchTerm.removeChild(elementBeingEdited);
        //create new element based on data.define
        const refreshingElement = document.createElement("li");
        refreshingElement.textContent = data.define[elementIId];
        refreshingElement.setAttribute("class","searchTerm");
        refreshingElement.setAttribute("id",elementIId)
        displaySearchTerm.appendChild(refreshingElement);
        console.log(data.define)
    })    
}

function search(){
    
}

function search(){

}

function construct(){

}

beginProcess.addEventListener("click",response=>{
    const value = conceptField.value;
    if(value!==""){
        body.appendChild(customisation);
        data.concept = value;
        identify();
    }else{
        conceptField.style.border = "1px solid red";
        conceptField.setAttribute("placeholder","cannot be empty");
    }
})

body.addEventListener("click",response=>{

})

backButton.addEventListener("click",response=>{
    // remove the customisation platform
    body.removeChild(customisation);
    
    // remove all the elements in selectKeywords
    while(selectKeywords.firstChild){
        selectKeywords.removeChild(selectKeywords.firstChild);
    }
})

function init(){
    body.removeChild(customisation);
    refine();
}

init()

body.addEventListener('click',response=>{
    console.log("data: ",data)
})