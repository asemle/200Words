
// $(window).ready(function() {
//   $('#book').turn({
//     display: 'double',
//     acceleration: true,
//     elevation: 50,
//     autoCenter: true
//   });
// });


var i = 1
 var addpages = function() {
  for(var key in localStorage) {
    var dateString = key.split(" ");
    var dateof = dateString[1] + " " + dateString[2] + " " + dateString[3];
    if(i % 2 !== 0) {
      console.log()

      var pageE = "<div class='rightGradient'><h5 class='date'>"+ dateof +"</h5><p class='entry'>" + localStorage[key] + "</p><span class='text'>" + (i++) + "</span></div>"
      $(pageE).insertBefore("#backInner");
    }
    else {
      var pageO = "<div class='leftGradient'><h5 class='date'>"+ dateof +"</h5><p class='entry'>" + localStorage[key] + "</p><span class='text'>" + (i++) + "</span></div>"
      $(pageO).insertBefore("#backInner");
    }
  }
  if(i % 2 === 0) {
    var entryPage = "<div class='leftGradient'><h5 class='date' style='display: none'></h5><textarea class='textInput' name='name' rows='8' cols='80'></textarea><p class='entry' style='display: none'></p><button type='button' class='save' style='display: none' name='button'>save</button><span class='text'>"+ (i++) +"</span></div>"
    $(entryPage).insertBefore("#backInner");
  }
  else {
    var entryPages = "<div class='rightGradient'><h5 class='date' style='display: none'></h5><textarea class='textInput' name='name' rows='8' cols='80'></textarea><p class='entry' style='display: none'></p><button type='button' style='display: none' class='save' name='button'>save</button><span class='text'>" + (i++) + "</span></div><div class='leftGradient'><h5 class='date' style='display: none'></h5><textarea class='textInput' name='name' rows='8' cols='80'></textarea><p class='entry' style='display: none'></p><button type='button' style='display: none' class='save' name='button'>save</button><span class='text'>"+ i++ +"</span></div>";
    $(entryPages).insertBefore("#backInner");
  }
}


// <div class='rightGradient'>
//   <h5 class="date"></h5>
//   <textarea class="textInput" name="name" rows="8" cols="80" onkeydown="if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"></textarea>
//   <p class="entry">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//   <button type="button" class="save" name="button">save</button><span class="text">1</span>
// </div>
//
//
// <div class='leftGradient'>
//   <h5 class="date"></h5>
//   <textarea class="textInput" name="name" rows="8" cols="80"></textarea>
//   <p class="entry"></p>
//   <button type="button" class="save" name="button">save</button><span class="text">2</span>
// </div>
// $(function(){
//
//
// })
$(window).bind('keydown', function(e) {
  if(e.keyCode==189)
    $('#book').turn('previous');
    else if (e.keyCode==187)
    $('#book').turn('next');
})


  // addpages()
  $.when(addpages()).done(function() {
    $('#book').turn({gradients: true, acceleration: true, autoCenter: true, elevation: 100, inclination: 20});
  })

  $(document).on('keyup', '.textInput', function() {
     console.log("fufu")
       if($(this).val().split(" ").length >= 200) {
         console.log(this)
         if($(this).siblings('.save').is(':hidden')) {
         $(this).siblings('.save').show().animate({
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

     $(document).on('click', '.save',function() {
       var entryDate = new Date;
       var newEntry = $(this).siblings('.textInput').val().replace( /\r?\n/g, "<br> &nbsp;");
       $(this).siblings('.date').html(entryDate.getMonth() + '/' + entryDate.getDate() + '/' + entryDate.getFullYear());
       var newDate = $(this).siblings('.date').val();
       $(this).siblings('.save').hide();
       $(this).siblings('.date').show();
       $(this).siblings('.textInput').hide();
       $(this).siblings('.entry').html(newEntry).show()
       $(this).hide();
       localStorage.setItem(entryDate, newEntry)
      //  addpages();

       // element = $("<div />").html("Loading...");
       // $("#book").turn("addPage", element, 3);
       // $("#book").turn("addPage", element, 4);
       // var el2 = $("<div class='hard' id='backInner'><img src='media/innercover.jpg' alt='' /></div>")
       // var el3 = $("<div class='hard' id='back'></div>")
       // $("#book").turn("addPage", el2, 4);
       // $("#book").turn("addPage", el3, 5);
       console.log(localStorage)

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
