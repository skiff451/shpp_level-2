"use strict";
const buttons = document.querySelectorAll("button"),
    rectangle = document.getElementById('rect');

buttons.forEach(i => {
    i.addEventListener('click', event => {
        console.log(event.target.id);

        if (event.target.id == "one") {
            
            rectangle.style.display = "none";

        } else if (event.target.id == "two") {
            
            rectangle.remove();

        } else if (event.target.id == "three") {
           
            rectangle.className = "hidden";

        }

        else if (event.target.id == "forth") {
           
            rectangle.classList.toggle("hidden");

        }
    })
});