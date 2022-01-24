'use strict';

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

//   // 'menu__item',
//   // 'big'
// ).render();
