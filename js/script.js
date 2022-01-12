'use sctrict';

const carsDB = [
  {
    car: 'Mini Cooper S',
    setup: [
      {
        country: 'Argentina',
        conditions: 'Dry',
        tyres: 'Soft',
      },

      {
        country: 'Spain',
        conditions: 'Dry',
        tyres: 'medium',
      },
    ],
  },

  {
    car: 'Lancia Fulvia HF',
    setup: [
      {
        country: 'Spain',
        conditions: 'Dry',
        tyres: 'medium',
      },
    ],
  },

  {
    car: 'Citroen DS 21',
    setup: [
      {
        country: 'Spain',
        conditions: 'Dry',
        tyres: 'medium',
      },
    ],
  },
];

// const cars = document.querySelector('.cars');

//show 3 cards with car name, country and so on
function showcarDB(cars) {
  const element = document.createElement('div');
  cars.forEach((car) => {
    element.classList.add('car-card');
    element.innerHTML += `
        <div class="car-card__item">
            <span>${car.car}</span>
            <span>${car.setup[0].country}</span>
            <span>${car.setup[0].conditions}</span>
            <span>${car.setup[0].tyres}</span>
        </div>
    `;
  });
  document.querySelector('.cars').append(element);
}
showcarDB(carsDB);

//clicking on car card
// const carCards = document.querySelectorAll('.car-card__item');
// carCards.forEach((card) => {
//   card.addEventListener('click', () => {
//     console.log('clicked');
//   });
// });

const enterBtn = document.querySelector('.enter-screen__title');
const enterScreen = document.querySelector('.enter-screen');
const cars = document.querySelector('.cars');
const country = document.querySelector('.country');

enterBtn.addEventListener('click', () => {
  loadSelectionPage();
});

function addHide() {
  enterScreen.classList.add('hide');
}

function removeHide() {
  cars.classList.remove('hide');
  country.classList.remove('hide');
}

function changeBG() {
  document.querySelector('main').style.backgroundImage =
    'url(../img/selectionPage-bg.jpg)';
}

function loadSelectionPage() {
  addHide();
  removeHide();
  cars.classList.add('show');
  country.classList.add('show');
  changeBG();
}
