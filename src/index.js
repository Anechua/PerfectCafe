import './util.js';
import './cafes.js';
import './api.js';
import './random_cafe.js';
import './modal.js';

import {renderCafeCatalog} from './cafes.js';
import {getData} from './api.js';
import {showRandomCafe} from './random_cafe.js'
import {renderModal} from './modal.js';

const getLocation = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const locationId = urlParams.get('id');
  return locationId;
};


getData(
  (cafes) => {
    const cafeList = cafes.data;
    const shareId = getLocation();
    renderCafeCatalog(cafeList);
    showRandomCafe(cafeList);

    if (shareId) {
      const cafe = cafeList.filter(cafe => cafe.id === parseInt(shareId, 10)).shift();
      renderModal(cafe, shareId);
    }
  }
);

