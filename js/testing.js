'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const carsDB = [
    {
      id: 1,
      car: 'Subaru Impreza',
    },

    {
      id: 2,
      car: 'Mitsubishi Lancer Evolution VI',
    },

    {
      id: 3,
      car: 'Subaru Legacy',
    },

    {
      id: 4,
      car: 'Lancia Delta',
    },

    {
      id: 5,
      car: 'Ford Escort',
    },
  ];

  const countriesDB = [
    {
      country: [
        'Argentina',
        'Australia',
        'Finland',
        'Germany',
        'Greece',
        'Monaco',
        'New Zealand',
        'Poland',
        'Spain',
        'Sweden',
        'USA',
        'Wales',
        'Scotland',
      ],
    },
  ];

  //   creates div with countries
  function createCountries(countries) {
    const element = document.createElement('div');
    // console.log(countries);
    countries.forEach((country) => {
      element.classList.add('country-card');
      element.innerHTML += `
        <div class="country-card__item">${country}</div>`;
    });
    document.querySelector('.countries').append(element);
  }

  //   creates div with cars
  function createCars(cars) {
    const element = document.createElement('div');
    cars.forEach((car) => {
      element.classList.add('car-cards');
      element.innerHTML += `
            <div class="car-cards__item">${car.car}</div>`;
    });
    document.querySelector('.cars').append(element);
  }
  createCars(carsDB);

  const cardsParent = document.querySelector('.car-cards');
  const carItem = document.querySelectorAll('.car-cards__item');
  const countryItem = document.querySelectorAll('.country-cards__item');

  const countriesDiv = document.querySelector('.countries');
  const countriesParent = document.querySelector('.country-card');

  let carSelectedIndex;
  let countrySelectedIndex;

  //   shows the list of countries when the car card is clicked
  function showCountryList() {
    cardsParent.addEventListener('click', (e) => {
      const target = e.target;
      countriesDiv.innerHTML = '';
      if (target.classList.contains('car-cards__item')) {
        carItem.forEach((item, i) => {
          if (target == item) {
            //   console.log(item);
            //   console.log(i);
            carSelectedIndex = i;
            console.log(`car index is ${carSelectedIndex}`);
            createCountries(countriesDB[0].country);
          }
        });
      }
    });
  }
  showCountryList();

  function showSetup() {
    countriesDiv.addEventListener('click', (e) => {
      const t = e.target;
      if (t.classList.contains('country-card__item')) {
        console.log('ok');
        countryItem.forEach((item, i) => {
          if (t == item) {
            console.log(item);
            console.log(i);
          }
        });
      }
    });
  }
  showSetup();
});
