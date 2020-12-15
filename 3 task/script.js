"use strict";
const button = document.getElementById('btn'),
    rectangles = document.querySelectorAll('#rect');

button.addEventListener('click', () => {
    rectangles.forEach(i => {
        i.classList.toggle("hidden");
    })
})


