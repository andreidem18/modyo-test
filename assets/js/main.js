import Testimonial from "./classes/Testimonial.js";
import Button from "./classes/Button.js";

let buttons = document.getElementsByClassName("show");
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = () => {
        document.getElementById("menu").classList.toggle('hidden');
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => testimonialCreator(users, posts));
    })


const testimonialCreator = (users, posts) => {
    let images = ['person_3', 'person_4', 'person_1', 'person_2'];
    let slide = document.getElementById("slide");
    slide.style.width = `${users.length * 100}%`;

    users.forEach(user => {
        const quote = posts.find(post => post.userId === user.id);
        const randomNumber = Math.floor(Math.random() * 4);
        new Testimonial(quote.body, user.name, images[randomNumber]);
        user.id === 1 ? new Button(true) : new Button(false);
    });

    sliceHandle(users.length);
}



const sliceHandle = (num_slides) => {
    let btn = document.getElementsByClassName("btn");
    const fragment = 100 / num_slides;
    for(let i = 0; i < btn.length; i++){
        btn[i].onclick = () => {
            slide.style.transform = `translateX(-${fragment * i}%)`;
            for(let j = 0; j < btn.length; j++){
                btn[j].classList.remove("active");
            }
            btn[i].classList.add("active");
        }
    }
}