'use strict';

// Variable declaration
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Function open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Esc to close modal
const onEsc = function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
};

// Click to close modal
const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Showing modal
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

// Closing modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Closing modal when ESC is pressed
window.addEventListener('keydown', onEsc);
