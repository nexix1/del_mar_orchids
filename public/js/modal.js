// Click img link to open
$( "form" ).submit(function( event ) {
  // disable scrolling
  $("body").attr('style', 'overflow: hidden');
  // inserts lightbox html
  $("body").append( "<div id='lightbox'>Insert Message</div>" );
  // fade in
  $("#lightbox").fadeIn(200);
});

// Click lightbox to close
$("body").on('click', "#lightbox", function() {
  close()
});

// Close with 'esc' key
$(document).keyup(function (e) {
    if (e.keyCode == 27) close();
});

function close() {
  // fade out
  $( "#lightbox" ).fadeOut(200);
  // remove lightbox after setTimeout
  setTimeout(function() { 
    $( "#lightbox" ).remove();
  }, 150);
  // enable scrolling
  $("body").attr('style', 'overflow: auto');
}