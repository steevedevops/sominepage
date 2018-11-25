// hide password input, forgot password and button submit
$('#password').hide();
$('#btn-submit').hide();
$('#olvida-password').hide();

$('#email').keyup(function () {
  // if email input is not empty fadeIn password input
  if($(this).val() !== ''){
    $('#password').fadeIn(500);
    $('#olvida-password').fadeIn(500);
  }
  else if ($('#btn-submit').is(":visible")){
    $('#btn-submit').fadeOut(500);
    $('#password').delay(500).fadeOut(500);
    $('#olvida-password').delay(500).fadeOut(500);
  }
  else{
    $('#password').fadeOut(500);
    $('#olvida-password').fadeOut(500);
  }
});

$('#password').keyup(function () {
  // if password input is not empty fadeIn submit button
  if($(this).val() !== ''){
    $('#btn-submit').fadeIn(500);
  }
  else{
    $('#btn-submit').fadeOut(500);
  }
});