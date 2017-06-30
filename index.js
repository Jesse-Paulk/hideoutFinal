var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}


$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");


			  });
		});

  /*  $(document).ready(function() {

    $('body').css('display', 'none');

    $('body').fadeIn(3000);



    $('.link').click(function() {

    event.preventDefault();

    newLocation = this.href;

    $('body').fadeOut(1000, newpage);

    });

    function newpage() {

    window.location = newLocation;

    }

    });
