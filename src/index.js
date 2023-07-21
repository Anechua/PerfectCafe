import "../styles/styles.scss";

import './util.js';
import './cafes.js';
import './api.js';
import './random_cafe.js';
import './modal.js';
import './shared_cafe.js'

import {renderCafeCatalog} from './cafes.js';
import {getData} from './api.js';
import {showRandomCafe} from './random_cafe.js'
import {showSharedCafe} from './shared_cafe.js';


const showCafe = (cafeData) => {
  const cafes = cafeData.slice();
  renderCafeCatalog(cafes);
  showRandomCafe(cafes);
  showSharedCafe(cafes);
};

getData(
  (cafes) => {
    const cafeData = cafes.data;
    showCafe(cafeData);
  }
);
