$(document).ready(function(){

//============ menu ==================

    var slideIn = true;
    $('.HBBox').click(function () {
        if (slideIn) {
            $('.mobileMenu').animate({ right: '+=75%' });//menu??
        } else {
            $('.mobileMenu').animate({ right: '-=75%' }); //menu??
        }
        slideIn = !slideIn;
    });


	

});