/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/enterScreen.js":
/*!************************************!*\
  !*** ./src/modules/enterScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n///////// ENTER SCREEN /; //////\r\nfunction enterScreen() {\r\n  const enterBtn = document.querySelector('.enter-screen__title');\r\n  const enterScreen = document.querySelector('.enter-screen');\r\n  const main = document.querySelector('.main-bg');\r\n\r\n  enterBtn.addEventListener('click', loadSelectionPage);\r\n\r\n  function loadSelectionPage() {\r\n    addHide();\r\n    removeHide();\r\n    changeBG();\r\n  }\r\n\r\n  function addHide() {\r\n    enterScreen.classList.add('hide');\r\n  }\r\n\r\n  function removeHide() {\r\n    main.classList.remove('hide');\r\n  }\r\n\r\n  function changeBG() {\r\n    document.querySelector('.main').style.backgroundImage =\r\n      'url(../img/selectionPage-bg.jpg)';\r\n  }\r\n\r\n  console.log('enterscreen module is on');\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enterScreen);\r\n\n\n//# sourceURL=webpack://race_place/./src/modules/enterScreen.js?");

/***/ }),

/***/ "./src/modules/test.js":
/*!*****************************!*\
  !*** ./src/modules/test.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction say() {\r\n  console.log('Hi!');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (say);\r\n\n\n//# sourceURL=webpack://race_place/./src/modules/test.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/test */ \"./src/modules/test.js\");\n/* harmony import */ var _modules_enterScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/enterScreen */ \"./src/modules/enterScreen.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  let tree = document.querySelector('.wrapper');\r\n  let setupsContainer = document.querySelector('.setups-container');\r\n  const url = 'db.json';\r\n  let carCards;\r\n  let setupsParent;\r\n  let setupCountry;\r\n  let s;\r\n  let backBtn;\r\n\r\n  //creating cards with cars and setups\r\n  async function createCarCard() {\r\n    try {\r\n      let res = await fetch(url);\r\n      let db = await res.json();\r\n\r\n      db.forEach((car) => {\r\n        const carCard = document.createElement('div');\r\n        carCard.classList.add('car-card');\r\n        carCard.innerHTML = `\r\n          <div class='car-card__image'>\r\n              <img src=\"${car.img}\" alt=\"\">\r\n              <div class=\"car-card__title\"><span>${car.carName}</span></div>\r\n              <div class=\"button\">\r\n                <button class=\"button__back\">Back</button>\r\n              </div>\r\n          </div>\r\n          <div class=\"car-card__countries\"></div>\r\n        `;\r\n        tree.append(carCard);\r\n\r\n        let carCardSetups = document.querySelectorAll('.car-card__countries');\r\n\r\n        car.setup.map((x) => {\r\n          const el = document.createElement('div');\r\n          el.classList.add('setup-country');\r\n          el.innerHTML = `${x.country}`;\r\n          carCardSetups.forEach((item) => {\r\n            item.appendChild(el);\r\n          });\r\n        });\r\n\r\n        ///\r\n        let stp = document.createElement('div');\r\n        stp.classList.add('setups');\r\n        setupsContainer.appendChild(stp);\r\n        ///\r\n        car.setup.forEach((setup) => {\r\n          const e = document.createElement('div');\r\n          e.classList.add('setups__country');\r\n          e.innerHTML = `\r\n          <div class=\"country\">\r\n            <div classs=\"country-title\"><span>Country: ${setup.country}</span></div>\r\n\r\n            <div class=\"item__tyres\">\r\n                <span>Tyres - </span>\r\n                <span>${setup.tyres}</span>\r\n            </div>\r\n\r\n            <div class=\"item__conditions\">\r\n                <span>Conditions - </span>\r\n                <span>${setup.conditions}</span>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"setup__item\">\r\n            <div class=\"item__alignment\">\r\n                <div>Alignment</div>\r\n                <div>Toe Angle Front: ${setup.alignment.toeAngleFront} °</div>\r\n                <div>Camber Angle Front: ${setup.alignment.camberAngleFront} °</div>\r\n                <div>Toe Angle Rear: ${setup.alignment.toeAngleRear} °</div>\r\n                <div>Camber Angle Rear: ${setup.alignment.camberAngleRear} °</div>\r\n            </div>\r\n\r\n            <div class=\"item__brakes\">\r\n                <div>Brakes</div> \r\n                <div>Brake Bias: ${setup.brakes.brakingForce} N-m</div>\r\n                <div>Braking force: ${setup.brakes.brakeBias} %</div>\r\n            </div>\r\n\r\n            <div class=\"item__dif\">\r\n                <div>Differential</div>\r\n                <div>Front LSD Driving lock: ${setup.differential.frontLSDDrivingLock} %</div>\r\n                <div>Front LSD Braking Lock: ${setup.differential.frontLSDBrakingLock} %</div>\r\n                <div>Front LSD Preload: ${setup.differential.frontLSDPreload} N-m</div>\r\n                <div>Front Viscous Differential: ${setup.differential.frontVisDif} kgf-m/100 rpm</div>\r\n                <div>Centre Viscous Differential: ${setup.differential.centerVisDif} kgf-m/100 rpm</div>\r\n                <div>Rear Viscous Differential: ${setup.differential.rearVisDif} kgf-m/100 rpm</div>\r\n                <div>Rear LSD Driving lock: ${setup.differential.rearLsdDrivLock} %</div>\r\n                <div>Rear LSD Braking Lock: ${setup.differential.rearLsdBrakeLock} %</div>\r\n                <div>Rear LSD Preload: ${setup.differential.rearLSDPreload} N-m</div>\r\n            </div>\r\n\r\n            <div class=\"item__gear\">\r\n                <div>Gearing</div>\r\n                <div>1st Gear: ${setup.gearing.gear1}</div>\r\n                <div>2nt Gear: ${setup.gearing.gear2}</div>\r\n                <div>3rd Gear: ${setup.gearing.gear3}</div>\r\n                <div>4th Gear: ${setup.gearing.gear4}</div>\r\n                <div>4th Gear: ${setup.gearing.gear5}</div>\r\n                <div>4th Gear: ${setup.gearing.gear6}</div>\r\n                <div>Final Drive: ${setup.gearing.finalDrive}</div>\r\n                <div>Note: ${setup.gearing.note}</div>\r\n                <div>Optimal Shift: ${setup.gearing.optimalShift}</div>\r\n            </div>\r\n\r\n            <div class=\"item__damp\">\r\n                <div>Damping</div>\r\n                <div>Slow Bump Front: ${setup.damping.slowBumpFront}</div>\r\n                <div>Fast Bump Front: ${setup.damping.fastBumpFront}</div>\r\n                <div>Bump Zone Division Front: ${setup.damping.bumpZoneDivFront}</div>\r\n                <div>Slow Rebound Front: ${setup.damping.slowReboundFront}</div>\r\n\r\n                <div>Slow Bump Rear: ${setup.damping.slowBumpRear}</div>\r\n                <div>Fast Bump Rear: ${setup.damping.fastBumpRear}</div>\r\n                <div>Bump Zone Division Rear: ${setup.damping.bumpZoneDivRear}</div>\r\n                <div>Slow Rebound FroRearnt: ${setup.damping.slowReboundRear}</div>\r\n            </div>\r\n\r\n            <div class=\"item__springs\">\r\n                <div>Springs</div>\r\n                <div>Ride Height Front: ${setup.springs.rideHeightFront} mm</div>\r\n                <div>Spring Rate Front: ${setup.springs.springRateFront} N/mm</div>\r\n                <div>Ride Height Rear: ${setup.springs.rideHeightRear} mm</div>\r\n                <div>Spring Rate Rear: ${setup.springs.springRateRear} N/mm</div>\r\n            </div>\r\n          </div>\r\n          `;\r\n          stp.appendChild(e);\r\n        });\r\n\r\n        carCards = document.querySelectorAll('.car-card');\r\n        setupsParent = document.querySelectorAll('.car-card__countries');\r\n        setupCountry = document.querySelectorAll('.setup-country');\r\n        s = document.querySelectorAll('.setups__country');\r\n        backBtn = document.querySelectorAll('.button');\r\n        // console.log(s);\r\n        // console.log(setupCountry);\r\n\r\n        y();\r\n        getSetups(setupsParent, setupCountry);\r\n      });\r\n      // console.log(setupsParent);\r\n    } catch (error) {\r\n      alert(error);\r\n    }\r\n  }\r\n  createCarCard();\r\n\r\n  function y() {\r\n    backBtn.forEach((btn) => {\r\n      btn.addEventListener('click', () => {\r\n        closeCarCard();\r\n        btn.classList.remove('show');\r\n      });\r\n    });\r\n  }\r\n\r\n  // const carCards = document.querySelectorAll('.car-card'), // not working\r\n  const cardsParent = document.querySelector('.wrapper');\r\n\r\n  // click on car card to open country list\r\n  function clickOnCarCard() {\r\n    cardsParent.addEventListener('click', (e) => {\r\n      const target = e.target;\r\n      // console.log(target);\r\n      if (target.tagName == 'IMG') {\r\n        carCards.forEach((item, i) => {\r\n          console.log(carCards);\r\n          if (target.parentElement.parentNode == item) {\r\n            // console.log(item);\r\n            closeCarCard();\r\n            openCarCard(i);\r\n          }\r\n        });\r\n      }\r\n    });\r\n  }\r\n  clickOnCarCard();\r\n\r\n  // click on country to open setup\r\n  function getSetups(parent, set) {\r\n    parent.forEach((item) => {\r\n      item.addEventListener('click', (e) => {\r\n        const t = e.target;\r\n        //   console.log(t);\r\n        if (t && t.classList.contains('setup-country')) {\r\n          set.forEach((item, i) => {\r\n            if (t == item) {\r\n              closeSetups();\r\n              openSetups(i);\r\n            }\r\n          });\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  function closeCarCard() {\r\n    carCards.forEach((item) => {\r\n      item.classList.remove('hide');\r\n      item.classList.remove('selected');\r\n      item.lastElementChild.classList.remove('car-card__setups-active');\r\n    });\r\n    closeSetups();\r\n  }\r\n\r\n  function openCarCard(item) {\r\n    carCards[item].classList.add('selected');\r\n    carCards[item].lastElementChild.classList.add('car-card__setups-active');\r\n    carCards.forEach((card) => {\r\n      if (!card.classList.contains('selected')) {\r\n        card.classList.add('hide');\r\n      }\r\n    });\r\n    backBtn[item].classList.add('show');\r\n  }\r\n\r\n  function closeSetups() {\r\n    setupCountry.forEach((item) => {\r\n      item.classList.remove('chosen');\r\n    });\r\n\r\n    setupCountry.forEach((item) => {\r\n      item.classList.add('shadow');\r\n    });\r\n\r\n    s.forEach((item) => {\r\n      item.classList.remove('setup-country__item--active');\r\n    });\r\n  }\r\n\r\n  function openSetups(item) {\r\n    setupCountry[item].classList.add('chosen');\r\n    setupCountry[item].classList.remove('shadow');\r\n\r\n    s[item].classList.add('setup-country__item--active');\r\n  }\r\n\r\n  // cardsParent.addEventListener('click', (e) => {\r\n  //   if (e.target.classList.contains('wrapper')) {\r\n  //     closeCarCard();\r\n  //   }\r\n  // });\r\n\r\n  //\r\n  (0,_modules_enterScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://race_place/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;