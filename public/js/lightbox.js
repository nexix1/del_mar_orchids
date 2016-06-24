// Click img link to open
$(".lightbox-link").on('click', function() {
  // disable scrolling
  $("body").attr('style', 'overflow: hidden');
  // inserts lightbox html
  $("body").append( "<div id='lightbox'><img id='lightbox-img' src='' /></div>" );
  // replaces img src with data-img value
  var imgSrc = $(this).data("img")
  $("#lightbox-img").attr('src', imgSrc);
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