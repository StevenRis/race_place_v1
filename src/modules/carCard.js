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
              <div class="button">
                <button class="button__back">Back</button>
              </div>
          </div>
          <div class="car-card__countries"></div>
        `;
      tree.append(carCard);

      let carCardSetups = document.querySelectorAll('.car-card__countries');

      car.setup.map((x) => {
        const el = document.createElement('div');
        el.classList.add('setup-country');
        el.innerHTML = `${x.country}`;
        carCardSetups.forEach((item) => {
          item.appendChild(el);
        });
      });

      ///
      let stp = document.createElement('div');
      stp.classList.add('setups');
      setupsContainer.appendChild(stp);
      ///
      car.setup.forEach((setup) => {
        const e = document.createElement('div');
        e.classList.add('setups__country');
        e.innerHTML = `
          <div class="country">
            <div classs="country-title"><span>Country: ${setup.country}</span></div>

            <div class="item__tyres">
                <span>Tyres - </span>
                <span>${setup.tyres}</span>
            </div>

            <div class="item__conditions">
                <span>Conditions - </span>
                <span>${setup.conditions}</span>
            </div>

          </div>
          <div class="setup__item">
            <div class="item__alignment">
                <div>Alignment</div>
                <div>Toe Angle Front: ${setup.alignment.toeAngleFront} °</div>
                <div>Camber Angle Front: ${setup.alignment.camberAngleFront} °</div>
                <div>Toe Angle Rear: ${setup.alignment.toeAngleRear} °</div>
                <div>Camber Angle Rear: ${setup.alignment.camberAngleRear} °</div>
            </div>

            <div class="item__brakes">
                <div>Brakes</div> 
                <div>Brake Bias: ${setup.brakes.brakingForce} N-m</div>
                <div>Braking force: ${setup.brakes.brakeBias} %</div>
            </div>

            <div class="item__dif">
                <div>Differential</div>
                <div>Front LSD Driving lock: ${setup.differential.frontLSDDrivingLock} %</div>
                <div>Front LSD Braking Lock: ${setup.differential.frontLSDBrakingLock} %</div>
                <div>Front LSD Preload: ${setup.differential.frontLSDPreload} N-m</div>
                <div>Front Viscous Differential: ${setup.differential.frontVisDif} kgf-m/100 rpm</div>
                <div>Centre Viscous Differential: ${setup.differential.centerVisDif} kgf-m/100 rpm</div>
                <div>Rear Viscous Differential: ${setup.differential.rearVisDif} kgf-m/100 rpm</div>
                <div>Rear LSD Driving lock: ${setup.differential.rearLsdDrivLock} %</div>
                <div>Rear LSD Braking Lock: ${setup.differential.rearLsdBrakeLock} %</div>
                <div>Rear LSD Preload: ${setup.differential.rearLSDPreload} N-m</div>
            </div>

            <div class="item__gear">
                <div>Gearing</div>
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
                <div>Damping</div>
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
                <div>Springs</div>
                <div>Ride Height Front: ${setup.springs.rideHeightFront} mm</div>
                <div>Spring Rate Front: ${setup.springs.springRateFront} N/mm</div>
                <div>Ride Height Rear: ${setup.springs.rideHeightRear} mm</div>
                <div>Spring Rate Rear: ${setup.springs.springRateRear} N/mm</div>
            </div>
          </div>
          `;
        stp.appendChild(e);
      });

      carCards = document.querySelectorAll('.car-card');
      setupsParent = document.querySelectorAll('.car-card__countries');
      setupCountry = document.querySelectorAll('.setup-country');
      s = document.querySelectorAll('.setups__country');
      backBtn = document.querySelectorAll('.button');
      // console.log(s);
      // console.log(setupCountry);

      y();
      getSetups(setupsParent, setupCountry);
    });
    // console.log(setupsParent);
  } catch (error) {
    alert(error);
  }
}

// export default createCarCard;
