'use strict';
const openModelTriggerEl = document.querySelector('.trigger');
const closeModelTriggerEl = document.querySelector('.close');
const modelEl = document.querySelector('.modal');

function main() {
  openModelTriggerEl.addEventListener('click', () => modelEl.classList.add('open'));

  closeModelTriggerEl.addEventListener('click', () => modelEl.classList.remove('open'));
  // changed if statement to terinary operator.
  window.addEventListener('click', (event) => event.target === modelEl ? modelEl.classList.remove('open') : null
  );
}

main();


// MY WORK:
// const joinButton = document.querySelector('.trigger');
// const modal = document.querySelector('.modal');
// const closeButton = document.querySelector('.close');

// joinButton.addEventListener('click', () => modal.classList.add('open'));

// closeButton.addEventListener('click', () => modal.classList.remove('open'));





