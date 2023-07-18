import {getRandomElement} from './util.js';
import {isEscapeKey} from './util.js';
import {generateCardInfo} from './cafes.js';

const randomModal = document.querySelector('.modal__container');
const randomButton = document.querySelector('.header__random');
const closeModalButton = randomModal.querySelector('.modal__close-button');

const closeModal = (evt) => {
  evt.preventDefault();
  randomModal.classList.add('modal__container-close');
};

const onCloseModalButtonClick = (evt) => {
  closeModal(evt);
};

const onRandomModalKeyDown = (evt) => {
  if(isEscapeKey(evt)) {
    closeModal(evt);
  }
};

const getRandomCafe = (cafes) => {
  const cafeData = cafes.slice();
  return getRandomElement(cafeData);
};

const createModal = (cafes) => {
  const modalRandomButton = randomModal.querySelector('.card__random-button');

  generateCardInfo(randomModal, getRandomCafe(cafes));
  randomModal.classList.remove('modal__container-close');

  modalRandomButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    generateCardInfo(randomModal, getRandomCafe(cafes));
  });

  closeModalButton.addEventListener('click', onCloseModalButtonClick);

  document.addEventListener('keydown', onRandomModalKeyDown);
};

const onRandomButtonClick = (cafes) => {
  createModal(cafes);
};

const showRandomCafe = (cafes) => {
  randomButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    onRandomButtonClick(cafes);
  });
};

export {showRandomCafe};
