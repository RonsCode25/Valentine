document.getElementById('naughty').addEventListener('click', function() {
  moveButtonAway();
});

document.getElementById('naughty').addEventListener('mouseover', function() {
  moveButtonAway();
});

function moveButtonAway() {
  const viewportWidth = window.innerWidth / 2 ; // Full viewport width
  const viewportHeight = window.innerHeight / 2 ; // Full viewport height
  const button = document.getElementById('naughty');

  let cursorX, cursorY;

  // Get cursor position
  window.addEventListener('mousemove', function(event) {
      cursorX = event.clientX;
      cursorY = event.clientY;
  });

  // Function to get a random position for the button within the viewport
  function getRandomPosition() {
      let randomX, randomY;
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      // Ensure the button stays within the viewport
      const maxX = viewportWidth - buttonWidth; // Max X position
      const maxY = viewportHeight - buttonHeight; // Max Y position

      // Loop until the button doesn't overlap with the cursor
      do {
          randomX = Math.random() * maxX; // Ensure button stays within max X
          randomY = Math.random() * maxY; // Ensure button stays within max Y
      } while (Math.abs(randomX - cursorX) < buttonWidth && Math.abs(randomY - cursorY) < buttonHeight);

      return { x: randomX, y: randomY };
  }

  // Get a new random position for the button
  const newPosition = getRandomPosition();

  // Apply the new position to the button
  button.style.left = `${newPosition.x}px`;
  button.style.top = `${newPosition.y}px`;

  // Set the button's position to 'fixed' to keep it in place
  button.style.position = 'fixed';
}

// Array to store messages
const messages = [
  'Can i have a kiss on our date?',
  'can i have a hug?.',
  'Are you sure about this?',
];

// Initialize currentMessageIndex outside the function so it persists
let currentMessageIndex = 0;

function change() {
  // Update the text content of the h2 element with the current message
  document.getElementById('txtContent').textContent = messages[currentMessageIndex];

  if (currentMessageIndex === messages.length - 1) {
    document.getElementById('c1').style.display = 'none';      
    document.getElementById('c2').style.display = 'flex';  
  }
  
  // Update the index for the next click, wrapping around using modulo
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
