function openNav() {
    document.getElementById("myNav").style.width = "15%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


$(document).ready(function() {

    /*sticky navigation*/
 
    $('.placeholder-text').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('menu-banner-sticky');
        } else {
            $('nav').removeClass('menu-banner-sticky');
        }
 
    }, {
      offset: '60px;'
        
    });

});    

$('#foo').delay(3000).fadeIn(400);