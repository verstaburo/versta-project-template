// const { $ } = window;


export default function burger() {
  const burgerBtns = document.querySelectorAll('.js-burger');

  function toggleClass() {
    this.classList.toggle('is-active');
  }

  burgerBtns.forEach((elem) => {
    elem.addEventListener('click', toggleClass);
  });
}
