const cafeList = document.querySelector('.catalog__list');
const cardTemplate = document.querySelector('#cafe').content.querySelector('.catalog__item');

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

const chooseCafe = (item, button) => {
  const chosen = cafeList.querySelector('.card--chosen');
  if (chosen) {
    chosen.classList.remove('card--chosen');
    chosen.querySelector('.card__choice-button').textContent = "Выбрать";
  }

  item.querySelector('.card').classList.add('card--chosen');
  button.textContent = "Отменить выбор";
};

const cancelCafe = (item, button) => {
  item.querySelector('.card').classList.remove('card--chosen');
  button.textContent = "Выбрать";
};

const onChoiceButtonClick = (item, button) => {
  if (item.querySelector('.card').classList.contains('card--chosen')) {
    cancelCafe(item, button);
  } else {
    chooseCafe(item, button);
  }
};

const generateCardInfo = (pattern, keys) => {
  const {name, address, landmark, cuisine, distance, time, photo, business_lunch, price} = keys;
  pattern.querySelector('.card__picture').src = photo;
  pattern.querySelector('.card__picture').alt = name;
  pattern.querySelector('.card__name').textContent = name;
  pattern.querySelector('.card__address').textContent = address;
  pattern.querySelector('.card__distance').textContent = `${distance}м`;
  pattern.querySelector('.card__landmark').textContent = `Ориентир: ${landmark}`;
  pattern.querySelector('.card__cuisine').textContent = `Кухня: ${cuisine}`;
  pattern.querySelector('.card__time').textContent = `${time} мин`;

  if (business_lunch) {
    pattern.querySelector('.card__price').style = "display: block";
    pattern.querySelector('.card__lunch').textContent = "Бизнес-ланч: есть";
    pattern.querySelector('.card__price').textContent = `Стоимость бизнес-ланча: ${price} р.`;
  } else {
    pattern.querySelector('.card__lunch').textContent = "Бизнес-ланч: нет";
    pattern.querySelector('.card__price').style = "display: none";
  }
};

const createCard = (keys) => {

  const card = cardTemplate.cloneNode(true);
  const detailsButton = card.querySelector('.card__details-button');
  const choiceButton = card.querySelector('.card__choice-button');

  generateCardInfo(card, keys);

  detailsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    onDetailsButtonClick(card, detailsButton);
  });

  choiceButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    onChoiceButtonClick(card, choiceButton);
  });

  return card;
};

const renderCafeList = (cafes) => {
  let cafeData = cafes.slice();
  cafeList.append(...cafeData.map(createCard));
};

export {generateCardInfo, renderCafeList};
