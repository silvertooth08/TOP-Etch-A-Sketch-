"use strict";

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const body = document.querySelector('body')
document.body.appendChild(containerDiv);

function createGrid(gridSize) {
    containerDiv.style.setProperty('--col-num', gridSize);


    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const divs = document.createElement('div');
            containerDiv.appendChild(divs);
        }
    }
    return containerDiv;
}

const gridSizeRange = document.createElement('input');
gridSizeRange.setAttribute('type','range');
gridSizeRange.max = 100;
gridSizeRange.min = 1;
gridSizeRange.defaultValue = 16;
gridSizeRange.addEventListener('input',updateGridInput);
gridSizeRange.addEventListener('input',deleteGrid);
gridSizeRange.addEventListener('input',updateCreateGrid);;
gridSizeRange.innerText = gridSizeRange.value;

let createdDivs = createGrid(gridSizeRange.value) 

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container'); 
document.body.appendChild(buttonContainer);

const rangeContainer = document.createElement('div');
rangeContainer.classList.add('range-container');
buttonContainer.appendChild(rangeContainer);

rangeContainer.appendChild(gridSizeRange);

const gridDisplay = document.createElement('span');
gridDisplay.id = 'gridDisplay';
gridDisplay.innerText = gridSizeRange.value;
rangeContainer.appendChild(gridDisplay);


function updateGridInput() {
    gridDisplay.innerText = gridSizeRange.value;
}

function deleteGrid (){
    while (containerDiv.firstChild) {
        containerDiv.firstChild.remove()
    }
}

function updateCreateGrid () {
 createGrid(gridSizeRange.value);
}

const colorButton = document.createElement('button');
colorButton.innerText = 'Color Picker';
buttonContainer.appendChild(colorButton);

// Color picking function 
function pickColor () {

}


const rainbowButton = document.createElement('button');
rainbowButton.innerText = 'Rainbow Effect';
buttonContainer.appendChild(rainbowButton);

// Random Color picking function with %10 contrast added every pass on the same div

function pickRandomColor(){

}

const eraserButton = document.createElement('button');
eraserButton.innerText = 'Eraser';
buttonContainer.appendChild(eraserButton);

// Erasing divs button (making them the initial background color,e.g. White)

function eraseSketch () {

}



const clearButton = document.createElement('button');
clearButton.innerText = 'Clear';
buttonContainer.appendChild(clearButton);

// Clearing all divs button (making them the initial background color,e.g. White)

function clearSketch () {
    
}




