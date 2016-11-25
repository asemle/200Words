$('#book').turn({gradients: true, acceleration: true, autoCenter: true, elevation: 100});
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

$('#book')
