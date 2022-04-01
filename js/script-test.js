'use sctrict';

const carsDB = [
  {
    id: 1,
    car: 'Mini Cooper S',
    setup: [
      {
        argentina: {
          tyres: 'Soft',
          conditions: 'Dry',
          alignment: {
            'Toe Angle Front': -0.2,
            'Camber Angle Front': -0.9,
            'Toe Angle Rear': -0,
            'Camber Angle Rear': -0.97,
          },
          brakes: {
            // add N-m
            'Braking Force': 1.298,
            // add %
            'Brake Bias': 58,
          },
          differential: {
            // add %
            'Front LSD Driving Lock': 36,
            'Front LSD Braking Lock': 40,
            // add N-m
            'Front LSD Preload': 100,
          },
          gearing: {
            '1st Gear': 0.393,
            '2nd Gear': 0.524,
            '3rd Gear': 0.73,
            '4th Gear': 1.009,
            'Final Drive': 0.21,
            Note: 'Final drive: Minimum ',
            'Optimal Shift': 'Redline',
          },
          damping: {
            'Slow Bump Front': -2,
            'Slow Rebound Front': -1,
            'Slow Bump Rear': -2,
            'Slow Rebound': -1,
          },
          springs: {
            // add mm
            'Ride Height Front': -20,
            // add N/mm
            'Spring Rate Front': 102.26,
            // add mm
            'ride Height Rear': -20,
            // add N/mm
            'Spring Rate Rear': 12.5,
          },
        },
      },
      {
        australia: {
          tyres: 'Medium',
          conditions: 'Wet',
        },
      },
      {
        finland: {
          tyres: 'Medium',
          conditions: 'Wet',
        },
      },
    ],
  },

  {
    id: 2,
    car: 'Lancia Fulvia HF',
  },

  {
    id: 3,
    car: 'Citroen DS 21',
  },
];

// console.log(carsDB[0].setup[0].argentina.alignment['Toe Angle Front']);
console.log(JSON.stringify(carsDB));

const countryDB = [
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

class MenuCard {
  constructor(
    src,
    alt,
    title,
    country,
    tyres,
    conditions,
    alignment,
    parentSelector,
    ...classes
  ) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.country = country;
    this.tyres = tyres;
    this.conditions = conditions;
    this.alignment = alignment;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement('div');
    if (this.classes.length === 0) {
      this.element = 'car__item';
      element.classList.add(this.element);
    } else {
      this.classes.forEach((className) => element.classList.add(className));
    }

    element.innerHTML = `
      <img src=${this.src} alt=${this.alt} />
      <h3 class="car__item-title">Car: ${this.title}</h3>
      <div class="car__item-country">Country: ${this.country}</div>
      <div class="car__item-setup">
        <div class="menu__item-tyres">Tyres: ${this.tyres}</div>
        <div class="menu__item-conditions">Conditions: ${this.conditions}</div>
        <div class="menu__item-conditions">Toe Angle Front: ${this.alignment}</div>
      </div>
      `;
    this.parent.append(element);
  }
}

// first card
// new MenuCard(
//   'img/carInfo/Mini_Copper_S.png',
//   'Mini Cooper S',
//   'Mini Cooper S',
//   'Argentina',
//   'Soft',
//   'Dry',
//   -0.2,
//   '.cars__setup'
// ).render();

// variables
const countryList = document.querySelector('#country');
const enterBtn = document.querySelector('.enter-screen__title');
const enterScreen = document.querySelector('.enter-screen');
const cars = document.querySelector('.cars');
const countries = document.querySelector('.countries');
const selectCar = document.querySelector('#cars');
const selectCountry = document.querySelector('#country');

// 1st select - load the list of cars
function setCar(car) {
  for (let i = 0; i < car.length; i++) {
    const el = document.createElement('option');
    el.innerHTML = car[i].car;
    el.value = car[i].car;
    document.querySelector('#cars').append(el);
  }
}
setCar(carsDB);

// 2nd select - load the list of countries
function setCountry(country) {
  for (let i = 0; i < country.length; i++) {
    const el = document.createElement('option');
    el.innerHTML = country[i];
    el.value = country[i];
    document.querySelector('#country').append(el);
  }
}

// show the country list if the car is chosen
function chooseCarName() {
  selectCar.addEventListener('change', () => {
    console.log(`${selectCar.selectedIndex} ${selectCar.value}`);

    if (selectCar.selectedIndex <= 8) {
      setCountry(countryDB[0].country);
    } else {
      console.log(`FUCK OFF`);
    }
  });

  // checks index of the 2nd select and calls the functions, that set Country and compare a car with a country
  selectCountry.addEventListener('change', () => {
    console.log(`${selectCountry.selectedIndex} ${selectCountry.value}`);
    switch (selectCountry.selectedIndex) {
      case 1:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 2:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 3:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 4:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 5:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 6:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 7:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 8:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 9:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 10:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 11:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 12:
        setCountry(countryDB[0].country);
        compare();
        break;
      case 13:
        setCountry(countryDB[0].country);
        compare();
        break;
      default:
        console.log('error');
    }
  });
}
chooseCarName();

const setup = document.querySelector('.cars__setup');

function showSetup(setups, parent, tyres, alignment) {
  parent.innerHTML = '';
  const el = document.createElement('div');
  el.innerHTML += `
    <span>Conditions: ${setups}</span>
    <span>Tyres: ${tyres}</span>
    <span>Alignment: ${alignment}</span>


    `;
  parent.append(el);
}

function compare() {
  if (selectCar.selectedIndex === 1 && selectCountry.selectedIndex === 1) {
    console.log('this will show the setup');
    new MenuCard(
      'img/carInfo/Mini_Copper_S.png',
      'Mini Cooper S',
      'Mini Cooper S',
      'Argentina',
      'Soft',
      'Dry',
      -0.2,
      '.cars__setup'
    ).render();
    // showSetup(
    //   carsDB[0].setup[0].argentina.conditions,
    //   setup,
    //   carsDB[0].setup[0].argentina.tyres,
    //   carsDB[0].setup[0].argentina.alignment['Toe Angle Front']
    // );
  } else if (
    selectCar.selectedIndex === 1 &&
    selectCountry.selectedIndex === 2
  ) {
    console.log('this will show the setup');
    showSetup(
      carsDB[0].setup[1].australia.conditions,
      setup,
      carsDB[0].setup[1].australia.tyres
    );
  } else {
    setup.innerHTML = '';
    console.log('error');
  }
}

// ENTER SCREEN ///////
enterBtn.addEventListener('click', () => {
  loadSelectionPage();
});

function loadSelectionPage() {
  addHide();
  removeHide();
  cars.classList.add('show');
  countries.classList.add('show');
  changeBG();
}

function addHide() {
  enterScreen.classList.add('hide');
}

function removeHide() {
  cars.classList.remove('hide');
  countries.classList.remove('hide');
}

function changeBG() {
  document.querySelector('main').style.backgroundImage =
    'url(../img/selectionPage-bg.jpg)';
}

// const cars = document.querySelector('.cars');

// //show 3 cards with car name, country and so on
// function showcarDB(cars) {
//   const element = document.createElement('div');
//   console.log(cars);
//   cars.forEach((car) => {
//     element.classList.add('car-card');
//     element.innerHTML += `
//         <div class="car-card__item">
//             <span>${car.car}</span>
//             <span>${car.setup[0].country}</span>
//             <span>${car.setup[0].conditions}</span>
//             <span>${car.setup[0].tyres}</span>
//         </div>
//     `;
//   });
//   document.querySelector('.cars').append(element);
// }
// showcarDB(carsDB);
