"use strict";
const body = document.querySelector('body')
const containerDiv = document.createElement('div')
containerDiv.classList.add('container')
body.appendChild(containerDiv)


function createDivs(x,y) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            const divs = document.createElement('div')
           containerDiv.appendChild(divs)
        }
    }

}

createDivs(16,16);