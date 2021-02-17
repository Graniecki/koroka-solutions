'use strict';

// Toggle workspace

const body = document.body;
const login = document.querySelector('.login');
const catalog = document.querySelector('.catalog');
const signButton = login.querySelector('.profile_sign');
const logo = catalog.querySelector('.catalog__logo');
const hidden = 'hidden';

body.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.closest('.profile_sign') && !target.closest('.catalog__logo')) {
    return;
  }

  login.classList.toggle(hidden);
  catalog.classList.toggle(hidden);
});

// Select logic

const select = document.querySelector('.select');
const selectHeader = select.querySelector('.select__header');
const selectBody = select.querySelector('.select__body');

const selectedCountry = select.querySelector('.select__current');
const removeCountry = select.querySelector('.select__close');
const selectLabel = select.querySelector('.select__label');

const label = 'Your country';
const open = 'open';

const colors = {
  black: '#111111',
  gray: 'rgba(17, 17, 17, 0.48)',
};

selectHeader.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.select__close')) {
    return
  }

  select.classList.toggle(open);
});

selectBody.addEventListener('click', (event) => {
  const target = event.target;

  selectedCountry.innerText = target.innerText;
  select.classList.remove(open);
  removeCountry.style.display = selectedCountry.innerText === label ? 'none' : 'block';
  selectLabel.style.display = 'block';
  selectedCountry.classList.add('select_transform');

  selectedCountry.style.color = selectedCountry.innerText === label ? colors.gray : colors.black;
});

removeCountry.addEventListener('click', () => {
  removeCountry.style.display = 'none';
  selectLabel.style.display = 'none';
  selectedCountry.classList.remove('select_transform');
  selectedCountry.innerText = label;

  selectedCountry.style.color = selectedCountry.innerText === label ? colors.gray : colors.black;
});
