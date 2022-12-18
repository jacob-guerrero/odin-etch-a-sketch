const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);


for( let i = 0; i < (16*16) ; i++) {
    const square = document.createElement('div');
    square.classList.toggle('squares');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.squares');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('hover');
    });
})

const button = document.createElement('button');
button.textContent = 'New Grid';
button.classList.toggle('btn');
body.insertBefore(button, container);

