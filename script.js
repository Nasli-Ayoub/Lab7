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

