class refining{
    constructor(data,workArea){
        this.data = data;
        
        this.workArea = workArea;
        this.workElements = [];
        this.output = [];
        this.createWorkElements();
        this.populateWorkArea();
    }
    createWorkElements(){
        const placeholder = document.createElement("div");
        this.data.forEach(x=>{
            console.log(x)
            const element = document.createElement("p");
            element.textContent = x;
            placeholder.appendChild(element)
        })
        this.workElements.push(placeholder);
    }
    populateWorkArea(){
        this.workElements.forEach(element=>{
            this.workArea.appendChild(element);
        })
    }
    getData(){
        return this.data;
    }

}