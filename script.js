document.getElementById('naughty').addEventListener('click', function() {
  moveButtonAway();
});

document.getElementById('naughty').addEventListener('mouseover', function() {
  moveButtonAway();
});

function moveButtonAway() {
  const viewportWidth = window.innerWidth / 1.2 ; 
  const viewportHeight = window.innerHeight / 1.2 ; 
  const button = document.getElementById('naughty');

  let cursorX, cursorY;

  // Get cursor position
  window.addEventListener('mousemove', function(event) {
      cursorX = event.clientX;
      cursorY = event.clientY;
  });

  function getRandomPosition() {
      let randomX, randomY;
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      const maxX = viewportWidth - buttonWidth; 
      const maxY = viewportHeight - buttonHeight; 

      do {
          randomX = Math.random() * maxX; 
          randomY = Math.random() * maxY; 
      } while (Math.abs(randomX - cursorX) < buttonWidth && Math.abs(randomY - cursorY) < buttonHeight);

      return { x: randomX, y: randomY };
  }

  const newPosition = getRandomPosition();

  button.style.left = `${newPosition.x}px`;
  button.style.top = `${newPosition.y}px`;

  button.style.position = 'fixed';
}

const messages = [
  'Can you be my Valentine?',
];

let currentMessageIndex = 0;

function change() {
  document.getElementById('txtContent').textContent = messages[currentMessageIndex];

  if (currentMessageIndex === messages.length - 1) {
    document.getElementById('c1').style.display = 'none';      
    document.getElementById('c2').style.display = 'flex';  
  }
  
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
