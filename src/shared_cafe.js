import {renderModal, closeModal} from './modal.js';

const getLocation = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const locationId = urlParams.get('id');
  return locationId;
};

const getSharedCafe = (cafes) => {
  const sharedId = parseInt(getLocation(), 10);
  const cafeData = cafes.slice();
  return cafeData.find(cafe => cafe.id === sharedId);
};

const addEventListeners = (modal) => {
  modal.querySelector('.card__catalog-button').addEventListener('click', () => {
    closeModal();
  });
};

const showSharedCafe = (cafes) => {
  const cafeData = cafes.slice();
  const sharedCafe = renderModal(cafeData, getSharedCafe);

  sharedCafe.querySelector('.card__random-button').style = "display: none";
  sharedCafe.querySelector('.card__catalog-button').style = "display: block";

  addEventListeners(sharedCafe);

  return sharedCafe;
};

export {showSharedCafe};
