const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);


for( let i = 0; i < (16*16) ; i++) {
    const square = document.createElement('div');
    square.classList.toggle('squares');
    square.setAttribute('style', `width: calc(40vw / 16); 
                        height: calc(40vw / 16)`);
    container.appendChild(square);
}
hover();

function hover() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
        });
    });
}

const button = document.createElement('button');
button.textContent = 'New Grid';
button.classList.toggle('btn');
body.insertBefore(button, container);

button.addEventListener('click', () => {
    let gridSize = prompt('Grid Size (1-100)', '16');
    deleteGrid();
    updateSize(gridSize);
    hover();
})

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
//width and height fix

function updateSize(gridSize) {
    for( let i = 0; i < (gridSize * gridSize) ; i++) {
        const square = document.createElement('div');
        square.classList.toggle('squares');
        square.setAttribute('style', `width: calc(40vw / ${gridSize}); 
                            height: calc(40vw / ${gridSize})`);
        container.appendChild(square);
    }
}