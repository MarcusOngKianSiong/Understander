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
const editSearchTerm = document.querySelector(".editSearchTerm");
const defining = document.querySelector(".search");
const table = document.querySelector(".searchTable")
const header = document.querySelector(".header")
const construct = document.querySelector(".construct")

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

    // remove all elements in identify section
    while(selectKeywords.firstChild){
        selectKeywords.removeChild(selectKeywords.firstChild);
    }
    
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
        const whitespace = document.createElement("p");
        whitespace.innerHTML = '&nbsp';
        selectKeywords.appendChild(whitespace);
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
            editSearchTerm.setAttribute("id",element.getAttribute("id"));
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
        search();
        constructing();
    })    
}

function search(){
    // set up or update data storage
    data.search = {};
    for (const key in data.define){
        data.search[key] = data.define[key];
    }
    console.log("checking for data: ", data.search)
    // Remove all table elements
    while(table.firstChild){
        table.removeChild(table.firstChild);
    }
    // Create header row
    const headerRow = document.createElement("tr");
    headerRow.className = "headings";
    const headerSearchTerm = document.createElement("th");
    const headerSelectedDefinition = document.createElement("th");
    const headerPossibleDefinitions = document.createElement("th");
    headerSearchTerm.textContent = "Search Term";
    headerSelectedDefinition.textContent = "Selected Definition";
    headerPossibleDefinitions.textContent = "Possible Definition";
    headerRow.appendChild(headerSearchTerm);
    headerRow.appendChild(headerSelectedDefinition);
    headerRow.appendChild(headerPossibleDefinitions);
    table.appendChild(headerRow);
    // Create a row for every search term + fill in data on the first column + write the definition based on 
    // that search term
    for (const key in data.search){
        const tableRow = document.createElement("tr");
        const tableHeight = document.createElement("th");
        tableHeight.setAttribute("id",key)
        const text = document.createElement("p");
        console.log("here", data.search[key])
        text.textContent = data.search[key];
        tableHeight.appendChild(text);
        tableRow.appendChild(tableHeight);
        table.appendChild(tableRow);
        // The other sections other than the search terms
        const selectedDefinitionSection = document.createElement("th");
        selectedDefinitionSection.setAttribute("id",key)
        tableRow.appendChild(selectedDefinitionSection);
        const possibleDefinitionSection = document.createElement("th");
        tableRow.appendChild(possibleDefinitionSection);
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data.search[key]}`)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            if(response.title){
                possibleDefinitionSection.textContent = response.title;
            }else{
                const definitions = response[0].meanings[0].definitions[0].definition;
                possibleDefinitionSection.textContent = definitions;
            }
        })
        // When you click the possible definition given, the definition is placed in the selected definition
        // and stored in the database
        possibleDefinitionSection.addEventListener("click",response=>{
                selectedDefinitionSection.textContent = possibleDefinitionSection.textContent;
                // STore it in the database
                data.search[selectedDefinitionSection.getAttribute("id")] = selectedDefinitionSection.textContent;
                console.log("from possible definition: ",selectedDefinitionSection.getAttribute("id"),data.search);
                constructing();
        })
        
        // The selected definition can be edited
        selectedDefinitionSection.addEventListener("click",response=>{
            if(selectedDefinitionSection.querySelector("input") === null){
                const input = document.createElement("input");
                input.value = selectedDefinitionSection.textContent;
                selectedDefinitionSection.textContent = "";
                selectedDefinitionSection.appendChild(input);
                input.addEventListener("keydown",response=>{
                    if(response.code === "Enter"){
                        // Save input to database
                        data.search[selectedDefinitionSection.getAttribute("id")] = input.value;
                        console.log("store data from input: ",data.search[selectedDefinitionSection.getAttribute("id")]);
                        // Show the new input
                        selectedDefinitionSection.textContent = data.search[selectedDefinitionSection.getAttribute("id")];
                        selectedDefinitionSection.removeChild(input);
                    }
                })
            }
            constructing();
        })
    }
}

function constructing(){
    // set up data
    data.construct = {};

    // Remove all elements in constructing section
    while(construct.firstChild){
        construct.removeChild(construct.firstChild);
    }

    // Display search terms
    const displaySearchTerms = document.createElement("div");
    displaySearchTerms.className = "searchTerms";
    let words = [];
    for(const key in data.search){
        const word = document.createElement("p");
        word.setAttribute("id",key);
        words.push(word);
        word.textContent = key;
        displaySearchTerms.appendChild(word);
        word.setAttribute("draggable","true");
        word.addEventListener("dragstart",response=>{
            response.dataTransfer.setData("elementID",response.target.id);
            console.log(response.dataTransfer.getData("elementID"));
        })
    }
    construct.appendChild(displaySearchTerms);
    
    // show an area
    const definitionArea = document.createElement("div");
    definitionArea.setAttribute("class","definitionArea");
    definitionArea.style.height = "20%";
    definitionArea.addEventListener("dragenter",response=>{
        response.preventDefault();
    });
    definitionArea.addEventListener("dragover",response=>{
        response.preventDefault();
    });
    definitionArea.addEventListener("drop",response=>{
        const searchTerm = response.dataTransfer.getData("elementID");
        const theDefinition = data.search[searchTerm];
        const termPlusDefinition = document.createElement("div");
        termPlusDefinition.textContent = searchTerm+': '+theDefinition;
        definitionArea.appendChild(termPlusDefinition);
    });
    construct.appendChild(definitionArea);

    const creatingWholeDefinition = document.createElement("input");
    construct.appendChild(creatingWholeDefinition);
    
}

beginProcess.addEventListener("click",response=>{
    const value = conceptField.value;
    if(value!==""){
        body.appendChild(customisation);
        data.concept = value;
        identify();
        refine();
        search();
        constructing();
    }else{
        conceptField.style.border = "1px solid red";
        conceptField.setAttribute("placeholder","cannot be empty");
    }
})

backButton.addEventListener("click",response=>{
    // remove the customisation platform
    body.removeChild(customisation);
    
    // remove all the elements in selectKeywords
    while(selectKeywords.firstChild){
        selectKeywords.removeChild(selectKeywords.firstChild);
    }
    
})

nextStep.addEventListener("click",response=>{
    const finalDefinition = construct.querySelector("input");
    if(finalDefinition.value === ""){
        finalDefinition.style.borderColor = "red";
        finalDefinition.setAttribute("placeholder","A final definition needs to be placed");
        return;
    }
    data.construct = finalDefinition.value

    const displayFinalDefinition = document.createElement("div");
    displayFinalDefinition.className = "definitionProduct";
    displayFinalDefinition.textContent = data.construct;
    body.appendChild(displayFinalDefinition);
    body.removeChild(customisation);
    data.concept = null;
    data.construct = null
    data.search = null;
    data.define = null;
    data.identify = null;

})

function init(){
    body.removeChild(customisation);
    refine();
    search();
}

init();

body.addEventListener('click',response=>{
    console.log("data: ",data)
})