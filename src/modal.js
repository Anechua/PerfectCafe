import {createCard} from './cafes.js';
import {getRandomInt, isEscapeKey} from './util.js';

const modalContainer = document.querySelector('.modal');
const modalTemplate = document.querySelector('#modal').content.querySelector('.modal__card');
const closeModalButton = modalContainer.querySelector('.modal__close-button');

// const clear = () => {
//   modalContainer.querySelector('.modal__card').innerHTML = '';
// }

// const add = (cafe) => {
//   const modalCard = createCard(modalTemplate, cafe);
//   modalContainer.querySelector('.modal__card').append(modalCard);
// }

const closeModal = () => {
  modalContainer.classList.add('modal--close');
  // clear();
  document.removeEventListener('keydown', onModalKeyDown);
};

const onCloseModalButtonClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

function onModalKeyDown (evt) {
  if(isEscapeKey(evt)) {
    closeModal();
  }
};

const renderModal = (cafes, callback) => {
  const cafe = callback(cafes);
  const modalCard = createCard(modalTemplate, cafe);

  modalContainer.querySelector('.modal__card').append(modalCard);

  closeModalButton.addEventListener('click', onCloseModalButtonClick);
  document.addEventListener('keydown', onModalKeyDown);

  modalContainer.classList.remove('modal--close');
};

export {renderModal};
