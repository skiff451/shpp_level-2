"use strict";

// first and second
const buttons = document.querySelectorAll("button"),
    rectangle = document.querySelector('.rect');
buttons.forEach(i => {
    i.addEventListener('click', event => {


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

// eighth
const imgInput = document.querySelector('.img-input'),
    imgBtn = document.querySelector('.img-btn'),
    imgContainer = document.querySelector('.img-container');

imgBtn.addEventListener('click', () => {
    const imgUrl = imgInput.value,
        img = document.createElement('img');

    img.setAttribute('src', imgUrl);
    imgContainer.append(img);

})

// ninth
const imgsText = document.querySelector('#imgs-text'),
    imgsBtn = document.querySelector('.imgs-btn'),
    imgsContainer = document.querySelector('.imgs-container');

imgsBtn.addEventListener('click', () => {
    let urls = imgsText.value.split('\n');

    urls.forEach(url => {
        const img = document.createElement('img');
        img.setAttribute('src', url);
        imgsContainer.append(img);
    })

})


//tenth

const doc = document.querySelector("html"),
    lang = document.querySelector(".lang"),
    coordX = document.querySelector(".x-coordinate"),
    coordY = document.querySelector(".y-coordinate");

doc.addEventListener('mousemove', (event) => {
    coordX.textContent = `Х:${event.pageX}`;
    coordY.textContent = `Y:${event.pageY}`;
})

// eleventh
lang.textContent = window.navigator.language;

// twelfth
const latitude = document.querySelector('.latitude'),
    longitude = document.querySelector('.longitude');


function success(pos) {
    let crd = pos.coords;
    latitude.textContent = `Ш:${crd.latitude}`;
    longitude.textContent = `Д:${crd.longitude}`;
};
window.navigator.geolocation.getCurrentPosition(success);


//thirteenth

const textBlocks = document.querySelectorAll('.block-item'),
    textWrapper = document.querySelector('.text-block-wrapper');

const myLocalStorage = window.localStorage,
    mySessionStorage = window.sessionStorage;


textBlocks.forEach(item => {
    if (item.classList.contains('local-storage')) {
        item.textContent = myLocalStorage.getItem('local-storage');
    } else if (item.classList.contains('cookies')) {
        item.textContent = document.cookie.split('=')[1];
    } else if (item.classList.contains('session-storage')) {
        item.textContent = mySessionStorage.getItem('session-storage');
    }

})

textWrapper.addEventListener('input', (event) => {
    let element = event.target;

    if (element.classList.contains('local-storage')) {
        myLocalStorage.setItem('local-storage', element.textContent);
    } else if (element.classList.contains('cookies')) {
        document.cookie = `cookies=${element.textContent}`;
    } else if (element.classList.contains('session-storage')) {
        mySessionStorage.setItem('session-storage', element.textContent);
    }
});

// fourteenth

const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
    let clientHeight = document.documentElement.clientHeight,
        scrollTop = document.documentElement.scrollTop,
        scrollHeight = document.documentElement.scrollHeight;

    if ((clientHeight + scrollTop) >= scrollHeight) {
        upButton.classList.add('visible');
        upButton.classList.remove('hidden');
    } else {
        upButton.classList.add('hidden');
        upButton.classList.remove('visible');
    }
});

upButton.addEventListener('click', () => {
    const myInterval = setInterval(scrolling, 10);

    function scrolling() {
        window.scrollBy(0, -10);

        if (document.documentElement.scrollTop <= 0) {
            clearInterval(myInterval);
            console.log("ALARM")
        }
    }
});

//fifteenth

const firstBlock = document.querySelector('.first-block'),
    secondBlock = document.querySelector('.second-block');


firstBlock.addEventListener('click', (event) => {
    if (event.target.classList.contains('first-block')) {
        alert('first-block');
    }
});

secondBlock.addEventListener('click', () => {
    alert('second-block');
});

//sixteenth

const modalButton = document.querySelector('.modal-button'),
    contentWrapper = document.querySelector('.wrapper'),
    modalWindow = document.createElement('div');

modalButton.addEventListener('click', () => {

    if (!document.querySelector('.modal-window')) {
        modalWindow.classList.add('modal-window');
        contentWrapper.append(modalWindow);
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "hidden";
        modalWindow.style.display = '';
    }
});

modalWindow.addEventListener('click', () => {
    console.log('out');
    document.body.style.overflow = "";
        modalWindow.style.display = 'none';
});





