const form = document.querySelector('#form');
const errorMsg = document.querySelector('#error-msg');
const errorIcon = document.querySelector('#error-icon');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  const email = e.target[0].value;

  const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  // if (regExp.test(email)) {
  //   errorMsg.classList.remove('visible');
  //   errorIcon.classList.remove('visible');
  // } else {
  //   errorMsg.classList.add('visible');
  //   errorIcon.classList.add('visible');
  // }

  const isValid = regExp.test(email);
  errorMsg.classList.toggle('visible', !isValid);
  errorIcon.classList.toggle('visible', !isValid);

})