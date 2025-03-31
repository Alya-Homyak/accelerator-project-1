const buttons = document.querySelectorAll('.price__button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((element) => element.classList.remove('price__button--active'));
    button.classList.add('price__button--active');
    onClicked(button);
  });
});


function onClicked(button) {
  document.querySelector('.price__list--active').classList.remove('price__list--active');

  if (button.classList.contains('price__button--one-month')) {
    document.querySelector('.price__one-month').classList.add('price__list--active');
  }

  if (button.classList.contains('price__button--six-month')) {
    document.querySelector('.price__six-month').classList.add('price__list--active');
  }

  if (button.classList.contains('price__button--twelfe-month')) {
    document.querySelector('.price__twelfe-month').classList.add('price__list--active');
  }
}
