"use strict";
function createGrid(gridSize) {
    const body = document.querySelector('body')
    const containerDiv = document.createElement('div');
    containerDiv.style.setProperty('--col-num', gridSize);
    containerDiv.classList.add('container');
    document.body.appendChild(containerDiv);



    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const divs = document.createElement('div');
           containerDiv.appendChild(divs);
        }
    }
    return containerDiv;
}


const containerDiv = createGrid(2);


const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container'); 
document.body.appendChild(buttonContainer);


const colorButton = document.createElement('button');
colorButton.innerText = 'Color Picker';
buttonContainer.appendChild(colorButton);


const rainbowButton = document.createElement('button');
rainbowButton.innerText = 'Rainbow Effect';
buttonContainer.appendChild(rainbowButton);

const eraserButton = document.createElement('button');
eraserButton.innerText = 'Eraser';
buttonContainer.appendChild(eraserButton);

const clearButton = document.createElement('button');
clearButton.innerText = 'Clear';
buttonContainer.appendChild(clearButton);
