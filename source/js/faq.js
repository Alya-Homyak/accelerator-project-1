const faqButtons = document.querySelectorAll('.faq__button');
const faqItems = document.querySelectorAll('.faq__item');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    faqButtons.forEach((element) => element.classList.remove('faq__button--active'));
    button.classList.add('faq__button--active');
    openFaqSection(button);
  });
});

function openFaqSection(button) {
  document.querySelector('.faq__item-container--active').classList.remove('faq__item-container--active');

  if (button.classList.contains('faq__button--center')) {
    document.querySelector('.faq__item-container--center').classList.add('faq__item-container--active');
  }

  if (button.classList.contains('faq__button--pass')) {
    document.querySelector('.faq__item-container--pass').classList.add('faq__item-container--active');
  }

  if (button.classList.contains('faq__button--service')) {
    document.querySelector('.faq__item-container--service').classList.add('faq__item-container--active');
  }

  if (button.classList.contains('faq__button--rules')) {
    document.querySelector('.faq__item-container--rules').classList.add('faq__item-container--active');
  }
}

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    openQuestion(item);
  });
});

function openQuestion(item) {
  if (item.classList.contains('faq__item--active')) {
    const button = item.querySelector('.faq__item-button--active');
    button.classList.remove('faq__item-button--active');
    item.classList.remove('faq__item--active');
  } else {
    const button = item.querySelector('.faq__item-button');
    button.classList.add('faq__item-button--active');
    item.classList.add('faq__item--active');
  }
}
