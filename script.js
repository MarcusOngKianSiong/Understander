const body = document.querySelector("body");

// customisation area
const customisationArea = document.createElement("div");
customisationArea.className = "customisation";
const back = document.createElement("button");
back.className = "back"
back.textContent = "Back";
customisationArea.appendChild(back);

customisationArea.addEventListener("click",value=>{
    if(value.target.className === "back"){
        body.removeChild(customisationArea);
    }
})

// The button
const button = document.querySelector(".nextStep");
button.addEventListener("click",value=>{
    body.appendChild(customisationArea);
})

