// Set the stage to select specific words that makes up a concept name
class selectingKeywords{
    constructor(concept){
        const platform = document.querySelector(".customisation");
        this.setStage(concept);
        this.keyWordSelection();
    }
    setStage(concept){
        const navigatingThroughConcept = document.createElement("div");
        const spacing = document.createElement("p");
        spacing.innerText = " ";
        concept = concept.split(' ');
        for(let i = 0 ; i<concept.length ; i++){
            const word = document.createElement("p");
            word.style = "margin: 0.15%;";
            word.textContent = concept[i];
            word.className = i+1;
            navigatingThroughConcept.appendChild(word);
            navigatingThroughConcept.appendChild(spacing);
        }
        navigatingThroughConcept.style = "display: flex;flex-direction: row;";
        this.platform.appendChild(navigatingThroughConcept)
    }
    keyWordSelection(concept){
        let position = 0;
        const words = concept.children;
        words[position].style.border = '1px solid red';
        const selectedKeywords = []
        body.addEventListener("keydown",(event)=>{
            console.log(event)
            if(event.key === "Enter"){
                selectedKeywords.push(words[position].innerText);
                console.log(selectedKeywords);
            }
            if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
                words[position].style.border = '';
            }
            if(event.key === "ArrowRight" && position != words.length-1){
                position+=1;
            }
            if(event.key === "ArrowLeft" && position != 0){
                position-=1;
            }
            words[position].style.border = '1px solid red';
        })
    }
}

function concept(concept){
    const navigatingThroughConcept = document.createElement("div");
    const spacing = document.createElement("p");
    spacing.innerText = " ";
    concept = concept.split(' ');
    for(let i = 0 ; i<concept.length ; i++){
        const word = document.createElement("p");
        word.style = "margin: 0.15%;";
        word.textContent = concept[i];
        word.className = i+1;
        navigatingThroughConcept.appendChild(word);
        navigatingThroughConcept.appendChild(spacing);
    }
    navigatingThroughConcept.style = "display: flex;flex-direction: row;";
    return navigatingThroughConcept;
}

// Establish functionality to navigate through the concept name to select the keyword
function keyWordSelection(concept,body){
    let position = 0;
    const words = concept.children;
    console.log(words);
    words[position].style.border = '1px solid red';
    const selectedKeywords = []
    body.addEventListener("keydown",(event)=>{
        console.log(event)
        if(event.key === "Enter"){
            selectedKeywords.push(words[position].innerText);
            console.log(selectedKeywords);
        }
        if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
            words[position].style.border = '';
        }
        if(event.key === "ArrowRight" && position != words.length-1){
            position+=1;
        }
        if(event.key === "ArrowLeft" && position != 0){
            position-=1;
        }
        words[position].style.border = '1px solid red';
    })
}

// Create an element to display an array of data
function displayData(data){
    const display = document.createElement("div");
    display.style.display = "flex";
    data.forEach(element => {
        const dataPiece = document.createElement("p");
        dataPiece.textContent = element;
        display.appendChild(dataPiece)
    });
    return display;
}

/*
const body = document.querySelector("body");
const theConcept = concept("la bla cla sla dla");
body.appendChild(theConcept);
console.log(keyWordSelection(theConcept,body));

body.appendChild(displayData([1,2,3,4]));
*/