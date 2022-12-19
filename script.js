const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);

const controlColor = document.createElement('div');
controlColor.classList.add('controls');
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
controlGrid.classList.add('controls');
body.appendChild(controlGrid);

const buttonGrid = document.createElement('button');
buttonGrid.textContent = 'New Grid';
buttonGrid.classList.toggle('btn');
controlGrid.appendChild(buttonGrid);

const buttonClear = document.createElement('button');
buttonClear.textContent = 'Clear';
buttonClear.classList.toggle('btn');
controlGrid.appendChild(buttonClear);


updateSize(16);
hover();

buttonGrid.addEventListener('click', () => {
    let gridSize = prompt('Grid Size (1-100)', '16');

    if ((gridSize < 1) || (gridSize > 100) || (gridSize == null) || (!/^\d+$/.test(gridSize))) return;

    deleteGrid();
    updateSize(gridSize);
    shades();
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

function rgb() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = `#${randomColor}`;
        });
    });
}

function shades() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        let shade = 100;
        square.addEventListener('mouseenter', () => {
            shade -= 10;
            square.style.backgroundColor = `hsl(0, 0%, ${shade}%)`;
        });
    });
}