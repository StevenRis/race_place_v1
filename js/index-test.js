'use strict';

const setupsDB = [
  {
    id: 1,
    car: 'Subaru Impreza WRX',
    img: 'img/carinfo/Mini_Copper_S-removebg-preview.png',
    setup: [
      {
        country: 'Argentina',
        tyres: 'soft',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },
      {
        country: 'australia',
        tyres: 'medium',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },
      {
        country: 'finland',
        tyres: 'hard',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },
      {
        country: 'germany',
        tyres: 'hard',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },
    ],
  },
  {
    id: 2,
    car: 'Ford Focus ST',
    setup: [
      {
        country: 'argentina',
        tyres: 'soft',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },

      {
        country: 'finland',
        tyres: 'soft',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },

      {
        country: 'scotland',
        tyres: 'soft',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },
    ],
  },
  {
    id: 3,
    car: 'Mitsubishi Lancer VII',
    setup: [
      {
        country: 'brazil',
        tyres: 'hard',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
        },
      },
      {
        country: 'russia',
        tyres: 'not hard',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -0.9,
          toeAngleRear: -0,
          camberAngleRear: -0.97,
        },
        brakes: {
          // add N-m
          brakingForce: 1.298,
          // add %
          brakeBias: 58,
        },
        differential: {
          // add %
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          fstGear: 0.393,
          sndGear: 0.524,
          thrdGear: 0.73,
          forthGear: 1.009,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: 'Redline',
        },
        damping: {
          slowBumpFront: -2,
          slowReboundFront: -1,
          slowBumpRear: -2,
          slowRebound: -1,
        },
        springs: {
          // add mm
          rideHeightFront: -20,
          // add N/mm
          springRateFront: 102.26,
          // add mm
          rideHeightRear: -20,
          // add N/mm
          springRateRear: 12.5,
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
    ${item.car}
    <img src="${item.img}" alt="">
    
    <div class="setups"></div>
  `;
  tree.append(carCard);

  let setups = document.querySelectorAll('.setups');

  item.setup.forEach((item) => {
    const el = document.createElement('div');
    el.classList.add('setup__country');
    el.innerHTML = `
    ${item.country}
    
      <div class="setup__item">
        <div class="setup__item-tyres">Tyres
          <span>${item.tyres}</span>
        </div>
        <div class="setup__item-conditions">Conditions
        <span>${item.conditions}</span></div>

        <div class="setup__item-alignment">Alignment
          <div>Toe Angle Front: ${item.alignment.toeAngleFront} °</div>
          <div>Camber Angle Front: ${item.alignment.camberAngleFront} °</div>
          <div>Toe Angle Rear: ${item.alignment.toeAngleRear} °</div>
          <div>Camber Angle Rear: ${item.alignment.camberAngleRear} °</div>
        </div>

        <div class="setup__item-brakes">Brakes
          <div>Brake Bias: ${item.brakes.brakeBias} N-m</div>
          <div>Braking force: ${item.brakes.brakingForce} %</div>
        </div>

        <div class="setup__item-dif">Differential
          <div>Front LSD Driving lock: ${item.differential.frontLSDDrivingLock} %</div>
          <div>Front LSD Braking Lock: ${item.differential.frontLSDBrakingLock} %</div>
          <div>Front LSD Preload: ${item.differential.frontLSDPreload} N-m</div>
        </div>

        <div class="setup__item-gear">Gearing
          <div>1st Gear: ${item.gearing.fstGear}</div>
          <div>2nt Gear: ${item.gearing.sndGear}</div>
          <div>3rd Gear: ${item.gearing.thrdGear}</div>
          <div>4th Gear: ${item.gearing.forthGear}</div>
          <div>Final Drive: ${item.gearing.finalDrive}</div>
          <div>Note: ${item.gearing.note}</div>
          <div>Optimal Shift: ${item.gearing.optimalShift}</div>
        </div>

        <div class="setup__item-damp">Damping
          <div>Slow Bump Front: ${item.damping.slowBumpFront}</div>
          <div>Slow Rebound Front: ${item.damping.slowReboundFront}</div>
          <div>Slow Bump Rear: ${item.damping.slowBumpRear}</div>
          <div>Slow Rebound Rear: ${item.damping.slowReboundRear}</div>
        </div>

        <div class="setup__item-springs">Springs
          <div>Ride Height Front: ${item.springs.rideHeightFront} mm</div>
          <div>Spring Rate Front: ${item.springs.springRateFront} N/mm</div>
          <div>Ride Height Rear: ${item.springs.rideHeightRear} mm</div>
          <div>Spring Rate Rear: ${item.springs.springRateRear} N/mm</div>
        </div>
      </div>
    `;
    setups.forEach((item) => {
      item.appendChild(el);
    });
  });
});

console.log(setupsDB[0].img);
// document.querySelectorAll('.car-card').forEach((event) => {
//   let card = document.querySelectorAll('.car-card');
//   event.addEventListener('click', (e) => {
//     e.target.classList.add('selected');
//   });
// });

//ЭТО Я ДОПИСАЛ
const carCards = document.querySelectorAll('.car-card');
const cardsParent = document.querySelector('.tree');
const setupsParent = document.querySelectorAll('.setups');
const setupItems = document.querySelectorAll('.setup__country');

// remove class selected and class setups--active
function hide() {
  carCards.forEach((item) => {
    item.classList.remove('selected');
    item.lastElementChild.classList.remove('setups--active');
  });
}

// add class selected and clas setup--active
function show(item) {
  carCards[item].classList.toggle('selected');
  carCards[item].lastElementChild.classList.toggle('setups--active');
}

//click on the class tree
cardsParent.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);

  if (target.classList.contains('car-card')) {
    carCards.forEach((item, i) => {
      if (target == item) {
        // hide();
        show(i);
      }
    });
  }
});

// remove class selected and setup__item--active
function h() {
  setupItems.forEach((item) => {
    // item.classList.remove('selected');
    // item.lastElementChild.classList.remove('setup__item--active');
  });
}

// add class selected and clas setup__item--active
function s(item) {
  setupItems[item].classList.toggle('selected');
  setupItems[item].lastElementChild.classList.toggle('setup__item--active');
}

// click on the class setups
setupsParent.forEach((item) => {
  item.addEventListener('click', (e) => {
    const t = e.target;
    console.log(t);
    if (t && t.classList.contains('setup__country')) {
      setupItems.forEach((item, i) => {
        if (t == item) {
          h();
          s(i);
        }
      });
    }
  });
});

cardsParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('tree')) {
    hide();
  }
});

// document.querySelectorAll('.setups').forEach((item) => {
//   item.addEventListener('click', (e) => {
//     if (e.target.classList.contains('selected')) {
//       e.target.classList.remove('selected');
//     } else {
//       e.target.classList.add('selected');
//     }
//   });
// });

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
