$(document).ready(function() {
  $('.button-collapse').sideNav();

  $('#submit').on('click', function(data) {
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
    var file = $('.file-path-wrapper').val();
    console.log(
      fileName + '--- ' + abstract + '+----- ' + passcode + '------' + file
    );
  });
});
