///////// ENTER SCREEN /; //////
function enterScreen() {
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

  console.log('enterscreen module is on');
}
export default enterScreen;
