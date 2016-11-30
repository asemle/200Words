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
  $('.date').hide();
  $('.entry').hide();
  $('.save').hide();

  $('.textInput').keyup(function() {
      if($(this).val().split(" ").length >= 200) {
        if($('.save').is(':hidden')) {
        $('.save').show().animate({
          fontSize: '250%'
        }).animate({
          fontSize: '200%'
        })
      }
        // prop('disabled', false);
      }
      else {
        $('.save').hide();
      }
    });
    $('.save').click(function() {
      var entryDate = new Date;
      var newEntry = $(this).siblings('.textInput').val().replace( /\r?\n/g, "<br> &nbsp;");
      $(this).siblings('.date').html(entryDate.getMonth() + '/' + entryDate.getDate() + '/' + entryDate.getFullYear());
      $(this).siblings('.save').hide();
      $(this).siblings('.date').show();
      $(this).siblings('.textInput').hide();
      $(this).siblings('.entry').html(newEntry).show()
      $(this).hide();
    })
// .replace(/\n/g, '<br>')
})
  //hide entry, hide button, hide date h5
  //on keypress, textarea.val()
  //if textarea.val().split(" ").length >= 200 {show submit button}

  //submit button on click {
  //
  // entry.text = taextarea.val()
  // hide textarea, show entry div
  //hide button
  //get date, add date to upper right corner
