export default class Button {
    constructor(active = false){
        this.active = active;
        this.create();
    }
    create(){
        let button = document.createElement("span");
        button.classList.add("btn");
        if(this.active){
            button.classList.add("active");
        }
        let indicator = document.getElementById("indicator");
        indicator.appendChild(button);
    }
}