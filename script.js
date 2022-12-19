const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);

const controlColor = document.createElement('div');
controlColor.setAttribute('class','controls');
body.insertBefore(controlColor,container);

const buttonBlack = document.createElement('button');
buttonBlack.textContent = 'Black';
buttonBlack.classList.toggle('btn');
controlColor.appendChild(buttonBlack);

const buttonRgb = document.createElement('button');
buttonRgb.textContent = 'Rainbow';
buttonRgb.classList.toggle('btn');
controlColor.appendChild(buttonRgb);

const buttonShade = document.createElement('button');
buttonShade.textContent = 'Shades';
buttonShade.classList.toggle('btn');
controlColor.appendChild(buttonShade);

const controlGrid = document.createElement('div');
controlGrid.setAttribute('class','controls');
body.appendChild(controlGrid);

const button = document.createElement('button');
button.textContent = 'New Grid';
button.classList.toggle('btn');
controlGrid.appendChild(button);

const buttonClear = document.createElement('button');
buttonClear.textContent = 'Clear';
buttonClear.classList.toggle('btn');
controlGrid.appendChild(buttonClear);


updateSize(16);
hover();

button.addEventListener('click', () => {
    let gridSize = prompt('Grid Size (1-100)', '16');

    if ((gridSize < 1) || (gridSize > 100) || (gridSize == null) || (!/^\d+$/.test(gridSize))) return;

    deleteGrid();
    updateSize(gridSize);
    hover();
})

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function updateSize(gridSize) {
    for( let i = 0; i < (gridSize * gridSize) ; i++) {
        const square = document.createElement('div');
        square.classList.toggle('squares');
        square.setAttribute('style', `width: calc(50vw / ${gridSize}); 
                            height: calc(50vw / ${gridSize})`);
        container.appendChild(square);
    }
}

function hover() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });
    });
}