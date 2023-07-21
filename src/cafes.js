const cafeList = document.querySelector('.catalog__list');
const cardTemplate = document.querySelector('#cafe').content.querySelector('.catalog__item');

const generateLocation = (id) => {
  const url = new URL(window.location);
  url.searchParams.set('id', id);
  window.history.pushState(null, '', url.toString());
};

// const getLocation = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const myParam = urlParams.get('id');
//   return myParam
// };

const generateCardInfo = (template, keys) => {
  const {name, address, landmark, cuisine, distance, time, photo, business_lunch, price} = keys;
  template.querySelector('.card__picture').src = photo;
  template.querySelector('.card__picture').alt = name;
  template.querySelector('.card__name').textContent = name;
  template.querySelector('.card__address').textContent = address;
  template.querySelector('.card__distance').textContent = `${distance}м`;
  template.querySelector('.card__landmark').textContent = `Ориентир: ${landmark}`;
  template.querySelector('.card__cuisine').textContent = `Кухня: ${cuisine}`;
  template.querySelector('.card__time').textContent = `${time} мин`;

  if (business_lunch) {
    template.querySelector('.card__price').style = "display: block";
    template.querySelector('.card__lunch').textContent = "Бизнес-ланч: есть";
    template.querySelector('.card__price').textContent = `Стоимость бизнес-ланча: ${price} р.`;
  } else {
    template.querySelector('.card__lunch').textContent = "Бизнес-ланч: нет";
    template.querySelector('.card__price').style = "display: none";
  }
};

const openDetails = (item, button) => {
  item.querySelector('.card').classList.add('card--large');
  button.textContent = "Свернуть";
};

const closeDetails = (item, button) => {
  item.querySelector('.card').classList.remove('card--large');
  button.textContent = "Подробнее";
};

const onDetailsButtonClick = (item, button) => {
  if (item.querySelector('.card').classList.contains('card--large')) {
    closeDetails(item, button);
  } else {
    openDetails(item, button);
  }
};

const addCardListeners = (card, id) => {
  const detailsButton = card.querySelector('.card__details-button');
  const shareButton = card.querySelector('.card__share-button');

  detailsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    onDetailsButtonClick(card, detailsButton);
  });

  shareButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    generateLocation(id);
  });
};

const createCard = (template, keys) => {
  const card = template.cloneNode(true);
  generateCardInfo(card, keys);

  return card;
};

const renderCafeCatalog = (cafes) => {
  let cafeData = cafes.slice();
  cafeList.append(...cafeData.map((cafe) => {
    const newCard = createCard(cardTemplate, cafe);
    addCardListeners(newCard, cafe.id);
    return newCard;
  }));
};

export {createCard, renderCafeCatalog};
