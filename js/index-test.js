'use strict';

const setupsDB = [
  {
    id: 1,
    car: 'subaru impreza wrx',
    // countries: ['argentina', 'australia', 'finland', 'germany'],
    setup: [
      {
        country: 'argentina',
        tyres: 'soft',
        conditions: 'wet',
        brakes: {
          // add N-m
          brakingforce: '1.298',
          // add %
          brakeBias: '58',
        },
      },
      {
        country: 'australia',
        tyres: 'medium',
        conditions: 'wet',
        brakes: {
          // add N-m
          brakingforce: '1.298',
          // add %
          brakeBias: '58',
        },
      },
      {
        country: 'finland',
        tyres: 'hard',
        conditions: 'wet',
        brakes: {
          // add N-m
          brakingforce: '1.298',
          // add %
          brakeBias: '58',
        },
      },
      {
        country: 'germany',
        tyres: 'hard',
        conditions: 'wet',
        brakes: {
          // add N-m
          brakingforce: '1.298',
          // add %
          brakeBias: '58',
        },
      },
    ],
  },
  {
    id: 2,
    car: 'ford focus st',
    countries: ['argentina', 'australia', 'germany', 'scotland'],
    setup: [
      {
        country: 'argentina',
        tyres: 'soft',
        conditions: 'dry',
        brakes: {
          // add N-m
          brakingforce: '2.298',
          // add %
          brakeBias: '68',
        },
      },

      {
        country: 'finland',
        tyres: 'soft',
        conditions: 'wet',
        brakes: {
          // add N-m
          brakingforce: '1.298',
          // add %
          brakeBias: '58',
        },
      },

      {
        country: 'scotland',
        tyres: 'soft',
        conditions: 'wet',
        brakes: {
          // add N-m
          brakingforce: '1.298',
          // add %
          brakeBias: '58',
        },
      },
    ],
  },
  {
    id: 3,
    car: 'Mitsu lancer',
    countries: ['brazil', 'russia', 'poland', 'wales'],
    setup: [
      {
        country: 'brazil',
        tyres: 'hard',
        conditions: 'dry',
        brakes: {
          // add N-m
          brakingforce: '2.298',
          // add %
          brakeBias: '68',
        },
      },
      {
        country: 'russia',
        tyres: 'not hard',
        conditions: 'dry',
        brakes: {
          // add N-m
          brakingforce: '2.298',
          // add %
          brakeBias: '68',
        },
      },
    ],
  },
];

// console.log(setupsDB);

let tree = document.querySelector('.tree');

setupsDB.forEach((item) => {
  const carCard = document.createElement('div');
  carCard.classList.add('car-card');
  carCard.innerHTML = `
    <span>${item.car}</span>
    <div class="setups"></div>
  `;
  tree.append(carCard);

  let setups = document.querySelectorAll('.setups');

  item.setup.forEach((item) => {
    const el = document.createElement('div');
    el.classList.add('setup__country');
    el.innerHTML = `
    <span>${item.country}</span>
      <div class="setup__item">
        <p>Tyres: ${item.tyres}</p>
        <p>Conditions: ${item.conditions}</p>
        <p>Brake Bias: ${item.brakes.brakeBias}</p>
        <p>Braking force: ${item.brakes.brakingforce}</p>
      </div>
    `;
    setups.forEach((item) => {
      item.appendChild(el);
    });
  });
});

// document.querySelectorAll('.car-card').forEach((event) => {
//   let card = document.querySelectorAll('.car-card');
//   event.addEventListener('click', (e) => {
//     e.target.classList.add('selected');
//   });
// });

//ЭТО Я ДОПИСАЛ
const carCards = document.querySelectorAll('.car-card');
const tabsContent = document.querySelectorAll('.tabcontent');
const cardsParent = document.querySelector('.tree');

function hideTabContent() {
  carCards.forEach((item) => {
    item.classList.remove('selected');
  });
}

function showtabContent(item) {
  carCards[item].classList.add('selected');
}

cardsParent.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('car-card')) {
    carCards.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showtabContent(i);
      }
    });
  }
});

// carCard.addEventListener('click', (event) => {
//   //   if (event.target.tagName != 'SPAN') {
//   //     return;
//   //   }

//   //   let childrenContainer = event.target.parentNode.querySelector('div');
//   //   if (!childrenContainer) return;

//   //   childrenContainer.hidden = !childrenContainer.hidden;

//   if (event.target.classList.contains('selected')) {
//     event.target.classList.remove('selected');
//   } else {
//     event.target.classList.add('selected');
//   }
// });

///////// ENTER SCREEN /; //////
const enterBtn = document.querySelector('.enter-screen__title');
const enterScreen = document.querySelector('.enter-screen');
const main = document.querySelector('.main__bg');

enterBtn.addEventListener('click', () => {
  loadSelectionPage();
});

function loadSelectionPage() {
  addHide();
  removeHide();
  changeBG();
}

function addHide() {
  enterScreen.classList.add('hide');
}

function removeHide() {
  main.classList.remove('hide');
}

function changeBG() {
  document.querySelector('.tree').style.backgroundImage =
    'url(../img/selectionPage-bg.jpg)';
}
