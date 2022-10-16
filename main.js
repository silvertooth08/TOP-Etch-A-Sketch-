"use strict";

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const body = document.querySelector('body')
document.body.appendChild(containerDiv);
let isMouseDown = false;

window.addEventListener('mousedown', function (e) {
  isMouseDown = true;
})

window.addEventListener('mouseup', function (e) {
  isMouseDown = false;
})


function createGrid(gridSize) {
    containerDiv.style.setProperty('--col-num', gridSize);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const divs = document.createElement('div');
            containerDiv.appendChild(divs);
            divs.classList.add('grid-tile');
            
            divs.addEventListener('mouseover', () => {
                if ('mouseover' && isMouseDown) return divs.style.backgroundColor = pickedColor;
            })
        }
    }

    return containerDiv;
}

const gridSizeRange = document.createElement('input');
gridSizeRange.setAttribute('type', 'range');
gridSizeRange.max = 100;
gridSizeRange.min = 1;
gridSizeRange.defaultValue = 16;
gridSizeRange.addEventListener('input', updateGridInput);
gridSizeRange.addEventListener('input', deleteGrid);
gridSizeRange.addEventListener('input', updateCreateGrid);;
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

function deleteGrid() {
    while (containerDiv.firstChild) {
        containerDiv.firstChild.remove()
    }
}

function updateCreateGrid() {
    createGrid(gridSizeRange.value);
}

const colorButton = document.createElement('button');
colorButton.innerText = 'Color Picker';
colorButton.addEventListener('click', showColorPalette);
buttonContainer.appendChild(colorButton);


let colorInput = document.createElement("input");
colorInput.setAttribute("type", "color");
colorInput.setAttribute('id', 'colorInput');
colorInput.addEventListener('input', setColor)

// Color palette reveal function 
function showColorPalette() {
    let containerDiv = document.querySelector('.container')
    let divs = containerDiv.querySelectorAll('div');
    divs.forEach((div) => {
        div.removeEventListener('mouseover', pickRandomColor)
    })
    buttonContainer.appendChild(colorInput);
    colorButton.removeEventListener('click', showColorPalette)
    colorButton.addEventListener('click', setColor);
    pickedColor = colorInput.value;
};
//color picking function
let pickedColor;
function setColor() {
    let containerDiv = document.querySelector('.container')
    let divs = containerDiv.querySelectorAll('div');
    divs.forEach((div) => {
        div.removeEventListener('mouseover', pickRandomColor)
    })
    let colorInput = document.querySelector('#colorInput')
    pickedColor = colorInput.value;
}


const rainbowButton = document.createElement('button');
rainbowButton.innerText = 'Rainbow Effect';
rainbowButton.addEventListener('click', pickRandomColor);
buttonContainer.appendChild(rainbowButton);


// Random Color picking function with %10 contrast added every pass on the same div


function pickRandomColor() {
    let containerDiv = document.querySelector('.container')
    let divs = containerDiv.querySelectorAll('div');
    pickedColor = `hsl(${Math.random() * 360},100%,50%)`;
    divs.forEach((div) => {
        div.addEventListener('mouseover', pickRandomColor)
    })
};



const eraserButton = document.createElement('button');
eraserButton.innerText = 'Eraser';
eraserButton.addEventListener('click', eraseSketch)
buttonContainer.appendChild(eraserButton);

// Erasing divs button (making them the initial background color,e.g. White)

function eraseSketch() {
    pickedColor = 'white';
    let containerDiv = document.querySelector('.container')
    let divs = containerDiv.querySelectorAll('div');
    divs.forEach((div) => {
        div.removeEventListener('mouseover', pickRandomColor)
    })
}



const clearButton = document.createElement('button');
clearButton.innerText = 'Clear';
clearButton.addEventListener('click', clearSketch)
buttonContainer.appendChild(clearButton);

// Clearing all divs button (making them the initial background color,e.g. White)

function clearSketch() {
    let containerDiv = document.querySelector('.container')
    let divs = containerDiv.querySelectorAll('div');
    divs.forEach((div) => {
        div.removeEventListener('mouseover', pickRandomColor)
    });
    divs.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
    pickedColor = 'white'
}


