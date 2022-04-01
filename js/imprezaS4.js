const imprezaS4 = [
  {
    id: 1,
    car: 'impreza_s4_wrx',
    title: 'Subaru Impreza S4 WRX',
    img: 'img/car-img/subimpr.png',
    setups: [
      {
        country: 'Argentina',
        tyres: 'soft',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -1.25,
          toeAngleRear: -0,
          camberAngleRear: -1.13,
        },
        brakes: {
          brakingForce: 3.484,
          // add N-m
          brakeBias: 59,
          // add %
        },
        differential: {
          frontVisDif: 24,
          centerVisDif: 22,
          rearVisDif: 24,
          // kgf-m/100rpm
          frontLSDDrivingLock: 36,
          frontLSDBrakingLock: 40,
          // add N-m
          frontLSDPreload: 100,
        },
        gearing: {
          gear1: 0.311,
          gear2: 0.402,
          gear3: 0.538,
          gear4: 0.7,
          gear5: 0.887,
          gear6: 1.099,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: '6500 rpm',
        },
        damping: {
          slowBumpFront: 0,
          fastBumpFront: 3,
          bumpZoneDivFront: 0.96,
          //ms
          slowReboundFront: 2.0,
          slowBumpRear: 0,
          fastBumpRear: 3,
          bumpZoneDivRear: 0.96,
          //ms
          slowReboundRear: 2.0,
        },
        springs: {
          rideHeightFront: 30,
          // add mm
          springRateFront: 86.3,
          // add N/mm
          rollBarFront: 10.0,
          //add N/mm
          rideHeightRear: 30,
          // add mm
          springRateRear: 70.22,
          // add N/mm
          rollBarFront: 23.69,
          // N/mm
        },
      },
      {
        country: 'Australia',
        tyres: 'soft',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -1.75,
          toeAngleRear: 0,
          camberAngleRear: -1.63,
        },
        brakes: {
          brakingForce: 3.484,
          // add N-m
          brakeBias: 66,
          // add %
        },
        differential: {
          frontVisDif: 18,
          centerVisDif: 12,
          rearVisDif: 18,
          // kgf-m/100rpm
        },
        gearing: {
          gear1: 0.336,
          gear2: 0.451,
          gear3: 0.612,
          gear4: 0.8,
          gear5: 1.011,
          gear6: 1.247,
          finalDrive: 0.21,
          note: 'Final drive: Minimum ',
          optimalShift: '6500 rpm',
        },
        damping: {
          slowBumpFront: +1.0,
          fastBumpFront: +3.0,
          bumpZoneDivFront: 0.96,
          //mps
          slowReboundFront: +2.0,
          slowBumpRear: +1.0,
          fastBumpRear: +3.0,
          bumpZoneDivRear: 0.96,
          //mps
          slowReboundRear: +2.0,
        },
        springs: {
          rideHeightFront: 20.0,
          // add mm
          springRateFront: 89.73,
          // add N/mm
          rollBarFront: 10.0,
          //add N/mm
          rideHeightRear: 20.0,
          // add mm
          springRateRear: 73.01,
          // add N/mm
          rollBarFront: 23.69,
          // N/mm
        },
      },
      {
        country: 'Finland',
        tyres: 'soft',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -1.75,
          toeAngleRear: 0,
          camberAngleRear: -1.63,
        },
        brakes: {
          brakingForce: 3.484,
          // add N-m
          brakeBias: 66,
          // add %
        },
        differential: {
          frontVisDif: 24,
          centerVisDif: 22,
          rearVisDif: 24,
          // kgf-m/100rpm
        },
        gearing: {
          gear1: 0.286,
          gear2: 0.411,
          gear3: 0.582,
          gear4: 0.78,
          gear5: 1.001,
          gear6: 1.247,
          finalDrive: 0.24,
          note: 'Final drive: highest 0.240 ',
          optimalShift: '6500 rpm',
        },
        damping: {
          slowBumpFront: +5.0,
          fastBumpFront: +5.0,
          bumpZoneDivFront: 0.96,
          //mps
          slowReboundFront: +4.0,
          slowBumpRear: +5.0,
          fastBumpRear: +5.0,
          bumpZoneDivRear: 0.96,
          //mps
          slowReboundRear: +4.0,
        },
        springs: {
          rideHeightFront: 30.0,
          // add mm
          springRateFront: 117.09,
          // add N/mm
          rollBarFront: 18.0,
          //add N/mm
          rideHeightRear: 30.0,
          // add mm
          springRateRear: 95.28,
          // add N/mm
          rollBarFront: 40.92,
          // N/mm
        },
      },
      {
        country: 'Germany',
        tyres: 'soft',
        conditions: 'dry',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -1.95,
          toeAngleRear: 0,
          camberAngleRear: -1.83,
        },
        brakes: {
          brakingForce: 3.906,
          // add N-m
          brakeBias: 58,
          // add %
        },
        differential: {
          frontVisDif: 24,
          centerVisDif: 18,
          rearVisDif: 24,
          // kgf-m/100rpm
        },
        gearing: {
          gear1: 0.286,
          gear2: 0.411,
          gear3: 0.582,
          gear4: 0.78,
          gear5: 1.001,
          gear6: 1.247,
          finalDrive: 0.225,
          note: 'Final drive: highest 0.225 ',
          optimalShift: '6500 rpm',
        },
        damping: {
          slowBumpFront: +3.0,
          fastBumpFront: +4.0,
          bumpZoneDivFront: 0.14,
          //mps
          slowReboundFront: +4.0,
          slowBumpRear: +3.0,
          fastBumpRear: +4.0,
          bumpZoneDivRear: 0.14,
          //mps
          slowReboundRear: +4.0,
        },
        springs: {
          rideHeightFront: -40.0,
          // add mm
          springRateFront: 196.09,
          // add N/mm
          rollBarFront: 18.11,
          //add N/mm
          rideHeightRear: -40.0,
          // add mm
          springRateRear: 159.49,
          // add N/mm
          rollBarFront: 42.08,
          // N/mm
        },
      },
      {
        country: 'Germany',
        tyres: 'soft',
        conditions: 'wet',
        alignment: {
          toeAngleFront: -0.2,
          camberAngleFront: -1.65,
          toeAngleRear: 0,
          camberAngleRear: -1.5,
        },
        brakes: {
          brakingForce: 3.627,
          // add N-m
          brakeBias: 58,
          // add %
        },
        differential: {
          frontVisDif: 16,
          centerVisDif: 14,
          rearVisDif: 16,
          // kgf-m/100rpm
        },
        gearing: {
          gear1: 0.286,
          gear2: 0.411,
          gear3: 0.582,
          gear4: 0.78,
          gear5: 1.001,
          gear6: 1.247,
          finalDrive: 0.225,
          note: 'Final drive: highest 0.225 ',
          optimalShift: '6500 rpm',
        },
        damping: {
          slowBumpFront: +2.0,
          fastBumpFront: +3.0,
          bumpZoneDivFront: 0.14,
          //mps
          slowReboundFront: +3.0,
          slowBumpRear: +2.0,
          fastBumpRear: +3.0,
          bumpZoneDivRear: 0.14,
          //mps
          slowReboundRear: +3.0,
        },
        springs: {
          rideHeightFront: -36.0,
          // add mm
          springRateFront: 183.83,
          // add N/mm
          rollBarFront: 14.23,
          //add N/mm
          rideHeightRear: -36.0,
          // add mm
          springRateRear: 149.59,
          // add N/mm
          rollBarFront: 34.65,
          // N/mm
        },
      },
      //setups
    ],
  },
];

const s = [
  {
    country: 'Germany',
    tyres: 'soft',
    conditions: 'dry',
    alignment: {
      toeAngleFront: -0.2,
      camberAngleFront: -1.95,
      toeAngleRear: 0,
      camberAngleRear: -1.83,
    },
    brakes: {
      brakingForce: 3.906,
      // add N-m
      brakeBias: 58,
      // add %
    },
    differential: {
      frontVisDif: 24,
      centerVisDif: 18,
      rearVisDif: 24,
      // kgf-m/100rpm
    },
    gearing: {
      gear1: 0.286,
      gear2: 0.411,
      gear3: 0.582,
      gear4: 0.78,
      gear5: 1.001,
      gear6: 1.247,
      finalDrive: 0.225,
      note: 'Final drive: highest 0.225 ',
      optimalShift: '6500 rpm',
    },
    damping: {
      slowBumpFront: +3.0,
      fastBumpFront: +4.0,
      bumpZoneDivFront: 0.14,
      //mps
      slowReboundFront: +4.0,
      slowBumpRear: +3.0,
      fastBumpRear: +4.0,
      bumpZoneDivRear: 0.14,
      //mps
      slowReboundRear: +4.0,
    },
    springs: {
      rideHeightFront: -40.0,
      // add mm
      springRateFront: 196.09,
      // add N/mm
      rollBarFront: 18.11,
      //add N/mm
      rideHeightRear: -40.0,
      // add mm
      springRateRear: 159.49,
      // add N/mm
      rollBarFront: 42.08,
      // N/mm
    },
  },
  {
    country: 'Deutsch',
    tyres: 'soft',
    conditions: 'wet',
    alignment: {
      toeAngleFront: -0.2,
      camberAngleFront: -1.65,
      toeAngleRear: 0,
      camberAngleRear: -1.5,
    },
    brakes: {
      brakingForce: 3.627,
      // add N-m
      brakeBias: 58,
      // add %
    },
    differential: {
      frontVisDif: 16,
      centerVisDif: 14,
      rearVisDif: 16,
      // kgf-m/100rpm
    },
    gearing: {
      gear1: 0.286,
      gear2: 0.411,
      gear3: 0.582,
      gear4: 0.78,
      gear5: 1.001,
      gear6: 1.247,
      finalDrive: 0.225,
      note: 'Final drive: highest 0.225 ',
      optimalShift: '6500 rpm',
    },
    damping: {
      slowBumpFront: +2.0,
      fastBumpFront: +3.0,
      bumpZoneDivFront: 0.14,
      //mps
      slowReboundFront: +3.0,
      slowBumpRear: +2.0,
      fastBumpRear: +3.0,
      bumpZoneDivRear: 0.14,
      //mps
      slowReboundRear: +3.0,
    },
    springs: {
      rideHeightFront: -36.0,
      // add mm
      springRateFront: 183.83,
      // add N/mm
      rollBarFront: 14.23,
      //add N/mm
      rideHeightRear: -36.0,
      // add mm
      springRateRear: 149.59,
      // add N/mm
      rollBarFront: 34.65,
      // N/mm
    },
  },
];

let tree = document.querySelector('.main');

const btnLoad = document.querySelector('.load');
const btnBack = document.querySelector('.back');
const carCard = document.createElement('div');

btnLoad.addEventListener('click', (e) => {
  e.preventDefault();
  createCarCard(imprezaS4);
  btnLoad.style.display = 'none';
  createSetup();
});

btnBack.addEventListener('click', (e) => {
  e.preventDefault();
  carCard.remove();
  btnLoad.style.display = 'block';
});

//
const cardsParent = document.querySelector('.main');

cardsParent.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);
  if (target.tagName == 'IMG') {
    const carCards = document.querySelector('.car-card');
    carCards.classList.toggle('selected');
    document.querySelector('.car-card__setups').classList.toggle('show');
    console.log(setupsParent);
  }
});

//create car card
function createSetup() {
  s.forEach((item) => {
    const setups = document.querySelector('.car-card__setups');
    console.log(item.country);
    console.log(setups);
    const el = document.createElement('div');
    el.classList.add('setup-country');
    el.innerHTML = `
    ${item.country}
    
      <div class="setup-country__item">
      
        <div class="item__tyres">Tyres
          <span>${item.tyres}</span>
        </div>
        <div class="item__conditions">Conditions
        <span>${item.conditions}</span></div>

        <div class="item__alignment">Alignment
          <div>Toe Angle Front: ${item.alignment.toeAngleFront} °</div>
          <div>Camber Angle Front: ${item.alignment.camberAngleFront} °</div>
          <div>Toe Angle Rear: ${item.alignment.toeAngleRear} °</div>
          <div>Camber Angle Rear: ${item.alignment.camberAngleRear} °</div>
        </div>

        <div class="item__brakes">Brakes
          <div>Brake Bias: ${item.brakes.brakeBias} N-m</div>
          <div>Braking force: ${item.brakes.brakingForce} %</div>
        </div>

        <div class="item__dif">Differential
          <div>Front LSD Driving lock: ${item.differential.frontLSDDrivingLock} %</div>
          <div>Front LSD Braking Lock: ${item.differential.frontLSDBrakingLock} %</div>
          <div>Front LSD Preload: ${item.differential.frontLSDPreload} N-m</div>
        </div>

        <div class="item__gear">Gearing
          <div>1st Gear: ${item.gearing.fstGear}</div>
          <div>2nt Gear: ${item.gearing.sndGear}</div>
          <div>3rd Gear: ${item.gearing.thrdGear}</div>
          <div>4th Gear: ${item.gearing.forthGear}</div>
          <div>Final Drive: ${item.gearing.finalDrive}</div>
          <div>Note: ${item.gearing.note}</div>
          <div>Optimal Shift: ${item.gearing.optimalShift}</div>
        </div>

        <div class="item__damp">Damping
          <div>Slow Bump Front: ${item.damping.slowBumpFront}</div>
          <div>Slow Rebound Front: ${item.damping.slowReboundFront}</div>
          <div>Slow Bump Rear: ${item.damping.slowBumpRear}</div>
          <div>Slow Rebound Rear: ${item.damping.slowReboundRear}</div>
        </div>

        <div class="item__springs">Springs
          <div>Ride Height Front: ${item.springs.rideHeightFront} mm</div>
          <div>Spring Rate Front: ${item.springs.springRateFront} N/mm</div>
          <div>Ride Height Rear: ${item.springs.rideHeightRear} mm</div>
          <div>Spring Rate Rear: ${item.springs.springRateRear} N/mm</div>
        </div>
      </div>
    `;
    setups.append(el);
  });
}

//create countries for car card
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

const setupsParent = document.querySelectorAll('.car-card__setups');
const setupItems = document.querySelectorAll('.setup-country');

setupsParent.forEach((item) => {
  item.addEventListener('click', (e) => {
    const t = e.target;
    console.log(t);
    if (t && t.classList.contains('setup-country')) {
      setupItems.forEach((item, i) => {
        if (t == item) {
          h();
          s(i);
        }
      });
    }
  });
});
