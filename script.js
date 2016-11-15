$(document).ready(function () {
  console.log(window.navigator.standalone);
  if (window.navigator.standalone === false) {
    $('#container').html('<p>It works</p>');
  }
});
