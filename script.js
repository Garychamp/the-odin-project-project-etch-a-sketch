const container = document.getElementById('container');

function createGrid(size) {
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.style.width = `${100 / size}%`;

    square.dataset.hover = 0;

    square.addEventListener('mouseover', () => {
    let hoverCount = Number(square.dataset.hover);
    if (hoverCount < 10) hoverCount++;
    square.dataset.hover = hoverCount;

    const opacity = hoverCount / 10;
    square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    });

    container.appendChild(square);
  }
}

createGrid(16);

const button = document.getElementById('resizeBtn');
button.addEventListener('click', () => {
  let newSize = prompt('Enter number of squares per side (max 100);');
  newSize = Number(newSize);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
});


const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

