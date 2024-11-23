// Mouse Event: Change text on hover
const hoverButton = document.getElementById('hover-button');
const mouseMessage = document.getElementById('mouse-message');

// Hover event
hoverButton.addEventListener('mouseover', () => {
  mouseMessage.textContent = "You hovered over the button!";
});

// Mouse leave event
hoverButton.addEventListener('mouseout', () => {
  mouseMessage.textContent = "You left the button!";
});

// Click event
hoverButton.addEventListener('click', () => {
  mouseMessage.textContent = "You clicked the button!";
});

const keyboardInput = document.getElementById('keyboard-input');
const keyPressed = document.getElementById('key-pressed');

keyboardInput.addEventListener('keyup', (event) => {
  keyPressed.textContent = `You pressed: ${event.key}`;
});

const simpleForm = document.getElementById('simple-form');
const formMessage = document.getElementById('form-message');

simpleForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = "Form submitted successfully!";
});

