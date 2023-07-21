import {getRandomElement} from './util.js';
import {renderModal, clearModal} from './modal.js';


const headerRandomButton = document.querySelector('.header__random');

const getRandomCafe = (cafes) => {
  const cafeData = cafes.slice();
  return getRandomElement(cafeData);
};

const addEventListeners = (modal, cafes) => {

  modal.querySelector('.card__random-button').addEventListener('click', () => {
    clearModal();
    createRandomCafe(cafes);
  });
};

const createRandomCafe = (cafes) => {
  const randomModal = renderModal(cafes, getRandomCafe);

  randomModal.querySelector('.card__catalog-button').style = "display: none";

  addEventListeners(randomModal, cafes);
};

const showRandomCafe = (cafes) => {
  headerRandomButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    createRandomCafe(cafes);
  });
};

export {createRandomCafe, showRandomCafe};
