const getData = (onSuccess) => {
  fetch('https://bandaumnikov.ru/api/test/site/get-index')
    .then((response) => response.json())
    .then((cafes) => onSuccess(cafes));
};

export {getData};
