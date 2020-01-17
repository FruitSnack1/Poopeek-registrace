$(document).ready(function() {
  console.log("ready");
  $('form').submit(function() {
    // submit the form
    $(this).ajaxSubmit(()=>{
      $('input').val('')
      $('#alert').slideDown().delay(1500).fadeOut()
    });
    return false;
  });
  $('form').ajaxForm();
});
