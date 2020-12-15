"use strict";
const button = document.getElementById('btn'),
    input = document.getElementById('main-input');



button.addEventListener('click', () => {
    const inputValue = input.value,
        elements = document.querySelectorAll(inputValue);
    elements.forEach(element => {
        element.classList.toggle('hidden');
    })

})


