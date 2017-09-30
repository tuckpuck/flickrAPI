$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&id=136839724@N02&jsoncallback=?";
    var country = $(this).text();
    console.log(country);
    var flickrOptions = {
      tags: country,
      format: "json"
    };
    function displayPhotos(data) {
      console.log(data);
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready
