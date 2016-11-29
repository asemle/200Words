$('#book').turn({gradients: true, acceleration: true, autoCenter: true, elevation: 100, inclination: 20});
// $(window).ready(function() {
//   $('#book').turn({
//     display: 'double',
//     acceleration: true,
//     elevation: 50,
//     autoCenter: true
//   });
// });
$(window).bind('keydown', function(e) {
  if(e.keyCode==37)
    $('#book').turn('previous');
    else if (e.keyCode==39)
    $('#book').turn('next');
})

$(document).ready(function() {
  //hide entry, hide button, hide date

  //on keypress, textarea.val()
  //if textarea.val().split(" ").length >= 200 {show submit button}

  //submit button on click {
  //
  // entry.text = taextarea.val()
  // hide textarea, show entry div
  //get date, add date to upper right corner

})
