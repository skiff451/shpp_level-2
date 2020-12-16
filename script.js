"use strict";

// first and second
const buttons = document.querySelectorAll("button"),
    rectangle = document.querySelector('.rect');
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

// third

const button = document.getElementById('btn'),
    rectangles = document.querySelectorAll('.sqr');

button.addEventListener('click', () => {
    rectangles.forEach(i => {
        i.classList.toggle("hidden");
    })
})

//forth

const hideButton = document.getElementById('hide-btn'),
    input = document.querySelector('.main-input');



hideButton.addEventListener('click', () => {
    const inputValue = input.value,
        elements = document.querySelectorAll(inputValue);
    elements.forEach(element => {
        element.classList.toggle('hidden');
    })

})

//fifth

const yellowSqr = document.querySelector('.yellow-sqr');

yellowSqr.addEventListener('click', hello);

function hello() {
    alert('Hello');
    yellowSqr.removeEventListener('click', hello);
    yellowSqr.addEventListener('click', remove);
}

function remove() {
    yellowSqr.className = 'hidden';
}

// sixth

const redSqr = document.querySelector('.red-square'),
    btnForRed = document.querySelector('.btn-for-red');

btnForRed.addEventListener('mouseover', () => {
    redSqr.classList.toggle("hidden");
})

btnForRed.addEventListener('mouseout', () => {
    redSqr.classList.toggle("hidden");
})

// seventh

const focusInput = document.querySelector('.focus-input'),
    greenRect = document.querySelector('.green-rect');

focusInput.addEventListener('focus', () => {
    greenRect.classList.remove('hidden');
})

focusInput.addEventListener('input', () => {
    greenRect.classList.add('hidden'); 
})