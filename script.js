$(document).ready(function () {
  if (window.Navigator.standalone === false) {
    $('#container').html('<p>It works</p>');
  }
});
