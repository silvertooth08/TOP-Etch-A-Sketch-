"use strict";
function createGrid(gridSize) {
    const body = document.querySelector('body')
    const containerDiv = document.createElement('div');
    containerDiv.style.setProperty('--col-num', gridSize);
    containerDiv.classList.add('container');
    body.appendChild(containerDiv);



    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const divs = document.createElement('div')
           containerDiv.appendChild(divs)
        }
    }
    return containerDiv;
}


const containerDiv = createGrid(16);

