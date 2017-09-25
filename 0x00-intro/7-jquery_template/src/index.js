import $ from 'jquery';

window.onload = () => {
  let firstValue = 'Holberton School';
  let secValue = 'HBTN';

  function showFirstValue () {
    $('h1').text(firstValue);
    setTimeout(showSecValue, 2000);
  }

  function showSecValue () {
    $('h1').text(secValue);
    setTimeout(showFirstValue, 2000);
  }

  setTimeout(showFirstValue, 0);
};
