export default class Testimonial {
    constructor(text = "", user = "", image = ""){
        this.text = text;
        this.user = user;
        this.image = image;
        this.show();
    }

    show(){
        
        let quoteContainer = document.createElement("q");
        let quoteText = document.createTextNode(this.text);
        quoteContainer.appendChild(quoteText);
        let autorContainer = document.createElement("h5");
        let autorName = document.createTextNode(this.user);
        autorContainer.appendChild(autorName);

        let textContainer = document.createElement("div");
        textContainer.classList.add("user-text");
        textContainer.appendChild(quoteContainer);
        textContainer.appendChild(autorContainer);
        
        let img = document.createElement("img");
        img.setAttribute("src", `./assets/images/${this.image}.jpg`);
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("user-img");
        imgContainer.appendChild(img);

        let column = document.createElement("div");
        column.classList.add("slide-col");
        column.appendChild(imgContainer);
        column.appendChild(textContainer);

        let slide = document.getElementById("slide");
        slide.appendChild(column);
    }
}