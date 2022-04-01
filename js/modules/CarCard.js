function carCard() {
  function createCarCard(carDataBase) {
    carDataBase.forEach((setup) => {
      carCard.classList.add('car-card');
      carCard.innerHTML = `
              <div class="car-card__title">${setup.title}</div>
                <div class='car-card__image'>
                  <img src="${setup.img}" alt="">
                </div>
                <div class="car-card__setups setups"></div>
              `;
      tree.append(carCard);
    });
  }
}

module.exports = carCard;
