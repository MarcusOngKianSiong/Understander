// Set the stage to select specific words that makes up a concept name

// Goal: create an array of elements required to perform the first step

// show selection

class stepOne{
    constructor(data){
        // Pass requiredElements to the platform.changeWorkArea()
        this.requiredElements = [];
        this.keyWords = [];
        this.position = 0;
        //set up the necessary items: selecting word, display selection
        console.log(this.requiredElements)
        this.conceptTemplate(data);
        console.log(this.requiredElements)
        this.displaySelection();
    }
    conceptTemplate(concept){
        const navigatingThroughConcept = document.createElement("div");
        const spacing = document.createElement("p");
        spacing.innerText = " ";
        concept = concept.split(' ');
        // Splitting the word into points
        for(let i = 0 ; i<concept.length ; i++){
            const word = document.createElement("p");
            word.style = "margin: 0.15%;";
            word.textContent = concept[i];
            word.className = i+1;
            if (i === 0){
                word.style.border = "1px solid red";
            }
            navigatingThroughConcept.appendChild(word);
            navigatingThroughConcept.appendChild(spacing);
        }
        navigatingThroughConcept.style = "display: flex;flex-direction: row;";
        this.requiredElements.push(navigatingThroughConcept);
    }
    // A feature added to concept template
    navigationFeature(action){
        // change how you interact with this value
        const words = this.requiredElements[0].childNodes
        if (action === "ArrowRight" && words.length-2 !== this.position){
            words[this.position].style.border = "";
            this.position += 1;
            words[this.position].style.border = "1px solid red";
            return;
        }
        if (action === "ArrowLeft" && this.position !== 0){
            words[this.position].style.border = "";
            this.position -= 1;
            words[this.position].style.border = "1px solid red";
            return;
        }
        if(action === "Enter"){
            if (words[this.position].style.background === "yellow"){
                words[this.position].style.background = "";
                //find array index of that word in this.keywords[]
                const word = words[this.position].textContent;
                const wordIndex = this.keyWords.indexOf(word)
                this.keyWords.splice(wordIndex,1);
                console.log(this.keyWords);
                return;
            };
            words[this.position].style.background = "yellow";
            this.keyWords.push(words[this.position].textContent)
            console.log(this.keyWords)
        }
    }
    displaySelection(){
        const display = document.createElement("div");
        display.className = "displaySelection";
        display.textContent = "No selection";
        this.requiredElements.push(display);
    }
    updateDisplay(){
        if(this.keyWords.length === 0){
            while(this.keyWords.length!==0){
                this.requiredElements[1].removeChild(this.requiredElements[1].firstChild);
            }
            this.requiredElements[1].textContent = "no keywords selected.";
            return;
        }
        this.keyWords.forEach(selectedWord=>{
            const word = document.createElement("p");
            word.textContent = selectedWord;
            this.requiredElements[1].appendChild(word);
        })
    }
    displaySelection(){
        const display = document.querySelector("div");
        // display.style.display = "flex";
        // display.style = "flex-direction: row;";
        this.keyWords.forEach(value=>{
            const word = document.createElement("p");
            word.textContent = value;
            display.appendChild(word);
        })
        if (this.requiredElements[1] === undefined){
            this.requiredElements.push(display);
            return;
        }
        this.requiredElements[1] = display;
    }
}



// class selectingKeywords{
//     constructor(concept){
//         const platform = document.querySelector(".customisation");
//         this.setStage(concept);
//         this.keyWordSelection();
//     }
//     setStage(concept){
//         const navigatingThroughConcept = document.createElement("div");
//         const spacing = document.createElement("p");
//         spacing.innerText = " ";
//         concept = concept.split(' ');
//         for(let i = 0 ; i<concept.length ; i++){
//             const word = document.createElement("p");
//             word.style = "margin: 0.15%;";
//             word.textContent = concept[i];
//             word.className = i+1;
//             navigatingThroughConcept.appendChild(word);
//             navigatingThroughConcept.appendChild(spacing);
//         }
//         navigatingThroughConcept.style = "display: flex;flex-direction: row;";
//         this.platform.appendChild(navigatingThroughConcept)
//     }
//     keyWordSelection(concept){
//         let position = 0;
//         const words = concept.children;
//         words[position].style.border = '1px solid red';
//         const selectedKeywords = []
//         body.addEventListener("keydown",(event)=>{
//             console.log(event)
//             if(event.key === "Enter"){
//                 selectedKeywords.push(words[position].innerText);
//                 console.log(selectedKeywords);
//             }
//             if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
//                 words[position].style.border = '';
//             }
//             if(event.key === "ArrowRight" && position != words.length-1){
//                 position+=1;
//             }
//             if(event.key === "ArrowLeft" && position != 0){
//                 position-=1;
//             }
//             words[position].style.border = '1px solid red';
//         })
//     }
// }

// function concept(concept){
//     const navigatingThroughConcept = document.createElement("div");
//     const spacing = document.createElement("p");
//     spacing.innerText = " ";
//     concept = concept.split(' ');
//     for(let i = 0 ; i<concept.length ; i++){
//         const word = document.createElement("p");
//         word.style = "margin: 0.15%;";
//         word.textContent = concept[i];
//         word.className = i+1;
//         navigatingThroughConcept.appendChild(word);
//         navigatingThroughConcept.appendChild(spacing);
//     }
//     navigatingThroughConcept.style = "display: flex;flex-direction: row;";
//     return navigatingThroughConcept;
// }

// // Establish functionality to navigate through the concept name to select the keyword
// function keyWordSelection(concept,body){
//     let position = 0;
//     const words = concept.children;
//     console.log(words);
//     words[position].style.border = '1px solid red';
//     const selectedKeywords = []
//     body.addEventListener("keydown",(event)=>{
//         console.log(event)
//         if(event.key === "Enter"){
//             selectedKeywords.push(words[position].innerText);
//             console.log(selectedKeywords);
//         }
//         if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
//             words[position].style.border = '';
//         }
//         if(event.key === "ArrowRight" && position != words.length-1){
//             position+=1;
//         }
//         if(event.key === "ArrowLeft" && position != 0){
//             position-=1;
//         }
//         words[position].style.border = '1px solid red';
//     })
// }

// // Create an element to display an array of data
// function displayData(data){
//     const display = document.createElement("div");
//     display.style.display = "flex";
//     data.forEach(element => {
//         const dataPiece = document.createElement("p");
//         dataPiece.textContent = element;
//         display.appendChild(dataPiece)
//     });
//     return display;
// }

// /*
// const body = document.querySelector("body");
// const theConcept = concept("la bla cla sla dla");
// body.appendChild(theConcept);
// console.log(keyWordSelection(theConcept,body));

// body.appendChild(displayData([1,2,3,4]));
// */