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

let containerDiv = createGrid(16);

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container'); 
document.body.appendChild(buttonContainer);

const rangeContainer = document.createElement('div');
rangeContainer.classList.add('range-container');
buttonContainer.appendChild(rangeContainer);

const gridSizeRange = document.createElement('input');
gridSizeRange.setAttribute('type','range');
gridSizeRange.max = 100;
gridSizeRange.min = 1;
gridSizeRange.defaultValue = 16;
gridSizeRange.onchange = "updateTextInput(this.value);"
gridSizeRange.innerText = gridSizeRange.value;
rangeContainer.appendChild(gridSizeRange);

const gridDisplay = document.createElement('span');
gridDisplay.id = 'gridDisplay';
gridDisplay.innerText = 16;
rangeContainer.appendChild(gridDisplay)


function updateGridInput(val) {
    let output = document.getElementById('gridDisplay');
    output.innerText = val;
  }

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

let gridSize ;

