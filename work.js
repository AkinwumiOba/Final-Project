const button = document.getElementById('button-container');
const importedButton = document.importNode(button, true);
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.appendChild(importedButton);

menuToggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== menuToggle && event.target !== importedButton) {
    menu.style.display = 'none';
  }
});

