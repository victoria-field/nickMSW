$(document).ready(function() {
  $('.button-collapse').sideNav();

  $('.submit_send').on('click', function(data) {
    event.preventDefault();
    alert('successfuly submitted');
    var fileName = $('#file_name')
      .val()
      .trim();
    var abstract = $('#abstract')
      .val()
      .trim();
    var passcode = $('#passcode')
      .val()
      .trim();
    var file = $('#file_link').val();
    console.log(data);
    console.log(
      fileName + '--- ' + abstract + '+----- ' + passcode + '------' + file
    );
  });
});
var attempt = 3;
function validate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username == 'abc' && password == '123') {
    alert('Login successfully');
    window.location.href = '../html/admin.html';
    console.log(this);
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert('You have left ' + attempt + ' attempt;');
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.getElementById('submit').disabled = true;
      return false;
    }
  }
}
