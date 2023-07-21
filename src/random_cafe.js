import {getRandomElement} from './util.js';
import {renderModal, add, clear} from './modal.js';

const headerRandomButton = document.querySelector('.header__random');

const getRandomCafe = (cafes) => {
  const cafeData = cafes.slice();
  return getRandomElement(cafeData);
};


// const hiddenShowCatalogButton = () => {
//   document.querySelector('.card__catalog-button').style = "display: none";
// }

const addEventListeners = (modal, cafes) => {

  modal.querySelector('.card__random-button').addEventListener('click', () => {

    renderModal(cafes, getRandomCafe)
    console.log('2154')
  });
};

// const addEventListeners = () => {
//   document.querySelector('.card__random-button').addEventListener('click', () => {
//     clear();
//     add(getRandomCafe(cafes));
//     addCafeListener(cafes);
//     hiddenShowCatalogButton();
//   });
// }

const createRandomCafe = (cafes) => {
  // const randomCafe = getRandomCafe(cafes);
  const randomCafe = renderModal(cafes, getRandomCafe);
  addEventListeners(randomCafe, cafes);
  // addCafeListener(cafes);
  // hiddenShowCatalogButton();
};

const showRandomCafe = (cafes) => {
  headerRandomButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    createRandomCafe(cafes);
  });
};

export {showRandomCafe};
