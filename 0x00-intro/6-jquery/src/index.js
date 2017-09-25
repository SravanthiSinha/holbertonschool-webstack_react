import $ from 'jquery';

window.onload = () => {
  let firstValue = 'Holberton School';
  let secValue = 'HBTN';

  $('body').append('<h1></h1>');

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
