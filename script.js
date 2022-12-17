const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);

for( let i = 0; i < (16*16) ; i++) {
    const squares = document.createElement('div');
    squares.classList.toggle('square');
    container.appendChild(squares);
}
