'use strict';

window.addEventListener('DOMContentLoaded', () => {
  let tree = document.querySelector('.wrapper');
  const url = 'db.json';
  let carCards;
  let setupsParent;
  let setupItems;

  //create cards with cars and setups
  async function createCarCard() {
    try {
      let res = await fetch(url);
      let db = await res.json();

      db.forEach((car) => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
        <div class='car-card__image'>
            <img src="${car.img}" alt="">
            <div class="car-card__title"><span>${car.carName}</span></div>
        </div>
        <div class="car-card__setups setups">
        </div>
        `;
        tree.append(carCard);
        let setups = document.querySelectorAll('.car-card__setups');

        car.setup.forEach((setup) => {
          const el = document.createElement('div');
          el.classList.add('setup-country');
          el.innerHTML = `
        ${setup.country}
    
        <div class="setup-country__item">
            <div class="item__tyres">
                <span>Tyres</span>
                <span>${setup.tyres}</span>
            </div>
            
            <div class="item__conditions">
                <span>Conditions</span>
                <span>${setup.conditions}</span>
            </div>

            <div class="item__alignment">
                <span>Alignment</span> 
                <div>Toe Angle Front: ${setup.alignment.toeAngleFront} °</div>
                <div>Camber Angle Front: ${setup.alignment.camberAngleFront} °</div>
                <div>Toe Angle Rear: ${setup.alignment.toeAngleRear} °</div>
                <div>Camber Angle Rear: ${setup.alignment.camberAngleRear} °</div>
            </div>

            <div class="item__brakes">
                <span>Brakes</span> 
                <div>Brake Bias: ${setup.brakes.brakingForce} N-m</div>
                <div>Braking force: ${setup.brakes.brakeBias} %</div>
            </div>

            <div class="item__dif">
                <span>Differential</span>
                <div>Front LSD Driving lock: ${setup.differential.frontLSDDrivingLock} %</div>
                <div>Front LSD Braking Lock: ${setup.differential.frontLSDBrakingLock} %</div>
                <div>Front LSD Preload: ${setup.differential.frontLSDPreload} N-m</div>
                <div>Front Viscous Differential: ${setup.differential.frontVisDif} kgf-m/100 rpm</div>
                <div>Centre Viscous Differential: ${setup.differential.centerVisDif} kgf-m/100 rpm</div>
                <div>Rear Viscous Differential: ${setup.differential.rearVisDif} kgf-m/100 rpm</div>
            </div>

            <div class="item__gear">
                <span>Gearing</span>
                <div>1st Gear: ${setup.gearing.gear1}</div>
                <div>2nt Gear: ${setup.gearing.gear2}</div>
                <div>3rd Gear: ${setup.gearing.gear3}</div>
                <div>4th Gear: ${setup.gearing.gear4}</div>
                <div>4th Gear: ${setup.gearing.gear5}</div>
                <div>4th Gear: ${setup.gearing.gear6}</div>
                <div>Final Drive: ${setup.gearing.finalDrive}</div>
                <div>Note: ${setup.gearing.note}</div>
                <div>Optimal Shift: ${setup.gearing.optimalShift}</div>
            </div>

            <div class="item__damp">
                <span>Damping</span>
                <div>Slow Bump Front: ${setup.damping.slowBumpFront}</div>
                <div>Fast Bump Front: ${setup.damping.fastBumpFront}</div>
                <div>Bump Zone Division Front: ${setup.damping.bumpZoneDivFront}</div>
                <div>Slow Rebound Front: ${setup.damping.slowReboundFront}</div>

                <div>Slow Bump Rear: ${setup.damping.slowBumpRear}</div>
                <div>Fast Bump Rear: ${setup.damping.fastBumpRear}</div>
                <div>Bump Zone Division Rear: ${setup.damping.bumpZoneDivRear}</div>
                <div>Slow Rebound FroRearnt: ${setup.damping.slowReboundRear}</div>
            </div>

            <div class="item__springs">
                <span>Springs</span>
                <div>Ride Height Front: ${setup.springs.rideHeightFront} mm</div>
                <div>Spring Rate Front: ${setup.springs.springRateFront} N/mm</div>
                <div>Ride Height Rear: ${setup.springs.rideHeightRear} mm</div>
                <div>Spring Rate Rear: ${setup.springs.springRateRear} N/mm</div>
            </div>
        </div>
        `;
          setups.forEach((item) => {
            item.appendChild(el);
          });
        });
        carCards = document.querySelectorAll('.car-card');
        setupsParent = document.querySelectorAll('.car-card__setups');
        setupItems = document.querySelectorAll('.setup-country');
        getSetups(setupsParent, setupItems);
      });
      console.log(setupsParent);
    } catch (error) {
      alert(error);
    }
  }
  createCarCard();

  // const carCards = document.querySelectorAll('.car-card'), // not working
  const cardsParent = document.querySelector('.wrapper');

  //click on the class main (event delegations)
  cardsParent.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    if (target.tagName == 'IMG') {
      carCards.forEach((item, i) => {
        if (target.parentElement.parentNode == item) {
          console.log(item);
          closeCarCard();
          openCarCard(i);
        }
      });
    }
  });

  // click on the class setups
  function getSetups(parent, set) {
    parent.forEach((item) => {
      item.addEventListener('click', (e) => {
        const t = e.target;
        //   console.log(t);
        if (t && t.classList.contains('setup-country')) {
          set.forEach((item, i) => {
            if (t == item) {
              closeSetups();
              openSetups(i);
            }
          });
        }
      });
    });
  }

  // remove class selected and class setups--active
  function closeCarCard() {
    carCards.forEach((item) => {
      item.classList.remove('hide');
      item.classList.remove('selected');
      item.lastElementChild.classList.remove('car-card__setups-active');
    });
    closeSetups();
  }

  // add class 'selected' to car card
  // and class 'setup--active' to car-card__setups
  function openCarCard(item) {
    carCards[item].classList.add('selected');
    carCards[item].lastElementChild.classList.add('car-card__setups-active');
    carCards.forEach((card) => {
      if (!card.classList.contains('selected')) {
        card.classList.add('hide');
      }
    });
  }

  // remove class selected and setup__item--active
  function closeSetups() {
    setupItems.forEach((item) => {
      item.classList.remove('selected');
      item.lastElementChild.classList.remove('setup-country__item--active');
    });
  }

  // add class selected and clas setup__item--active
  function openSetups(item) {
    setupItems[item].classList.add('selected');
    setupItems[item].lastElementChild.classList.add(
      'setup-country__item--active'
    );
  }

  //click on background closes each car card
  cardsParent.addEventListener('click', (e) => {
    if (e.target.classList.contains('wrapper')) {
      closeCarCard();
    }
  });

  ///////// ENTER SCREEN /; //////
  const enterBtn = document.querySelector('.enter-screen__title');
  const enterScreen = document.querySelector('.enter-screen');
  const main = document.querySelector('.main-bg');

  enterBtn.addEventListener('click', loadSelectionPage);

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
    document.querySelector('.main').style.backgroundImage =
      'url(../img/selectionPage-bg.jpg)';
  }
});
