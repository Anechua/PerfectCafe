import {createCard} from './cafes.js';
import {isEscapeKey} from './util.js';
import {generateLocation} from './cafes.js';

const modal = document.querySelector('.modal');
const modalTemplate = document.querySelector('#modal').content.querySelector('.modal__card');
const closeModalButton = modal.querySelector('.modal__close-button');

const clearModal = () => {
  modal.querySelector('.modal__card-container').innerHTML = '';
}

const daleteLocation = () => {
  const url = new URL(window.location);
  url.searchParams.delete('id');
  window.history.pushState(null, '', url.toString());
};

const closeModal = () => {
  modal.classList.add('modal--close');
  clearModal();
  daleteLocation();
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

const addModalListeners = (modal, id) => {
  closeModalButton.addEventListener('click', onCloseModalButtonClick);
  document.addEventListener('keydown', onModalKeyDown);

  modal.querySelector('.card__share-button').addEventListener('click', (evt) => {
    evt.preventDefault();
    generateLocation(id);
  });
};

const renderModal = (cafes, callback) => {
  const cafe = callback(cafes);
  const modalCard = createCard(modalTemplate, cafe);

  modal.querySelector('.modal__card-container').append(modalCard);

  addModalListeners(modalCard, cafe.id);

  modal.classList.remove('modal--close');

  return(modalCard);
};


export {renderModal,clearModal, closeModal};
