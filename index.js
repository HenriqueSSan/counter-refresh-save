"use strict";

const result = document.getElementById('result');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function writeCookiesIsExist() {
  if (getCookie('count-num')) 
    return Number(getCookie('count-num'));
  else 
    return 0;
}
function colorsSelector() {
  if (count < 0) {
    result.classList.add('negative');
      result.classList.remove('neutral');
        result.classList.remove('positive');
  } else if (count > 0) {
    result.classList.add('positive');
      result.classList.remove('negative');
        result.classList.remove('neutral');
  } else {
    result.classList.add('neutral');
      result.classList.remove('negative');
        result.classList.remove('positive');
  }
}

let count = writeCookiesIsExist();

function increment() {
  count += 1;
    setCookie('count-num', count, 3);
      colorsSelector();
        result.textContent = count;
}
function decrement() {
  count -= 1;
    setCookie('count-num', count, 3);
      colorsSelector();
        result.textContent = count;
}
colorsSelector();

result.innerHTML = count;

btnIncrement.addEventListener('click', increment);

btnDecrement.addEventListener('click', decrement);
