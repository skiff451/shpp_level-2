"use strict";
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