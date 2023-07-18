import './util.js';
import './cafes.js';
import './api.js';
import './random.js';

import {renderCafeList} from './cafes.js';
import {getData} from './api.js';
import {showRandomCafe} from './random.js'

getData(
  (cafes) => {
    const cafeList = cafes.data;
    renderCafeList(cafeList);
    showRandomCafe(cafeList);
  }
);

