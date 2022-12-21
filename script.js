const body = document.querySelector('body');

// title
const parentTitle = document.createElement('div');
parentTitle.setAttribute('id','title');
body.appendChild(parentTitle);
const h1 = document.createElement('h1');
h1.textContent = 'Etch a Sketch';
parentTitle.appendChild(h1);

// Parent main
const main = document.createElement('div');
main.setAttribute('id','main');
body.appendChild(main);

// Container squares
const container = document.createElement('div');
container.setAttribute('id','container');
main.appendChild(container);

// Parent Color Buttons
const controlColor = document.createElement('div');
controlColor.classList.add('controls');
main.insertBefore(controlColor,container);

// Color Buttons
const buttonBlack = document.createElement('button');
buttonBlack.textContent = 'Black';
buttonBlack.classList.add('btn', 'colors', 'active');
buttonBlack.setAttribute('id', 'black');
controlColor.appendChild(buttonBlack);

const buttonRgb = document.createElement('button');
buttonRgb.textContent = 'Rainbow';
buttonRgb.classList.add('btn', 'colors');
buttonRgb.setAttribute('id', 'rainbow');
controlColor.appendChild(buttonRgb);

const buttonShade = document.createElement('button');
buttonShade.textContent = 'Shades';
buttonShade.classList.add('btn', 'colors');
buttonShade.setAttribute('id', 'shades');
controlColor.appendChild(buttonShade);

// Parent Control Buttons
const controlGrid = document.createElement('div');
controlGrid.classList.add('controls');
main.appendChild(controlGrid);

// Control Buttons
const buttonGrid = document.createElement('button');
buttonGrid.textContent = 'New Grid';
buttonGrid.classList.add('btn', 'change');
buttonGrid.setAttribute('id', 'new-grid');
controlGrid.appendChild(buttonGrid);

const buttonClear = document.createElement('button');
buttonClear.textContent = 'Clear';
buttonClear.classList.add('btn', 'change');
buttonClear.setAttribute('id', 'clear');
controlGrid.appendChild(buttonClear);


updateSize(16);
hover();

buttonGrid.addEventListener('click', () => {
    let gridSize = prompt('Grid Size (1-100)', '16');

    if ((gridSize < 1) || (gridSize > 100) || (gridSize == null) || (!/^\d+$/.test(gridSize))) return;

    deleteGrid();
    updateSize(gridSize);

    if (buttonRgb.classList.contains('active')) {
        rgb();
    } else if (buttonShade.classList.contains('active')) {
        shades();
    } else {
        hover();
    }

})

const selectedButton = document.querySelectorAll('button.colors');
selectedButton.forEach(button => {
    button.addEventListener('click', (e) => {
        updateColor();
        
        let target = e.target.id;
        if (target == 'rainbow') {
            e.currentTarget.classList.add('active');
            rgb();
        } else if (target == 'shades') {
            e.currentTarget.classList.add('active');
            shades();
        } else {
            e.currentTarget.classList.add('active');
            hover();
        }
    });
})

function updateColor() {
    selectedButton.forEach(button => {
        button.classList.remove('active')
    })
}

buttonClear.addEventListener('click', () => {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.style.backgroundColor = '';
        
        if (buttonShade.classList.contains('active')) {
            let shade = 100;
            square.addEventListener('mouseenter', () => {
            shade -= 10;
            square.style.backgroundColor = `hsl(0, 0%, ${shade}%)`;
            });
        };
    });
});


function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function updateSize(gridSize) {
    for( let i = 0; i < (gridSize * gridSize) ; i++) {
        const square = document.createElement('div');
        square.classList.toggle('squares');

        if(window.innerWidth >= 900) {
            container.setAttribute('style', 'width: 30vw; height: 30vw');
            square.setAttribute('style', `width: calc(30vw / ${gridSize}); 
                                height: calc(30vw / ${gridSize})`);
        } else {
            container.setAttribute('style', 'width: 50vw; height: 50vw')
            square.setAttribute('style', `width: calc(50vw / ${gridSize}); 
                                height: calc(50vw / ${gridSize})`);
        }

        /* square.setAttribute('style', `width: calc(50vw / ${gridSize}); 
                            height: calc(50vw / ${gridSize})`); */
        container.appendChild(square);
    }
}

function hover() {
    const squares = document.querySelectorAll('.squares');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = '#070707';
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

/* Fix container responsiveness */
window.addEventListener('resize', () => {
    if(window.innerWidth >= 1250) {
        const squares = document.querySelectorAll('.squares');
        const numberSquares = Math.sqrt(document.getElementById('container').childElementCount);
        container.setAttribute('style', 'width: 30vw; height: 30vw');
        squares.forEach((square) => {
            square.setAttribute('style', `width: calc(30vw / ${numberSquares}); 
                                height: calc(30vw / ${numberSquares})`);
        });

    } else if (window.innerWidth >= 1000) {
        const squares = document.querySelectorAll('.squares');
        const numberSquares = Math.sqrt(document.getElementById('container').childElementCount);
        container.setAttribute('style', 'width: 40vw; height: 40vw');
        squares.forEach((square) => {
            square.setAttribute('style', `width: calc(40vw / ${numberSquares}); 
                                height: calc(40vw / ${numberSquares})`);
        });
    } else if(window.innerWidth >= 700) {
        const squares = document.querySelectorAll('.squares');
        const numberSquares = Math.sqrt(document.getElementById('container').childElementCount);
        container.setAttribute('style', 'width: 50vw; height: 50vw');
        squares.forEach((square) => {
            square.setAttribute('style', `width: calc(50vw / ${numberSquares}); 
                                height: calc(50vw / ${numberSquares})`);
        });
    } else {
        const squares = document.querySelectorAll('.squares');
        const numberSquares = Math.sqrt(document.getElementById('container').childElementCount);
        container.setAttribute('style', 'width: 70vw; height: 70vw');
        squares.forEach((square) => {
            square.setAttribute('style', `width: calc(70vw / ${numberSquares}); 
                                height: calc(70vw / ${numberSquares})`);
        });
    }
});