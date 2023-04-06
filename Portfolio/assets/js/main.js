$(".top-content").backstretch ("./assets/images/anime-.jpg")
$(".testimonials-container").backstretch ("./assets/images/bg-image.png")

function scroll_to(clicked_link, nav_height) {
    var ele_id = clicked_link.attr('href');
    var scroll_top = 0;

    scroll_top = $(ele_id).offset().top - nav_height;

    if ($(window).scrollTop() != scroll_top) {
        $('html, body').animate({ scrollTop: scroll_top }, 1000);
    }
}

$('a.scroll-link').on('click', function (e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
});

$(document).ready(function () {
    new WOW().init();
})

// $('a.scroll-link').on('click',function(e){
//     e.preventDefault();
//     scroll_top($(this),$('nav').outerHeight());
// }) 

// function scroll_top (clicked_link,nav_height){
//     var ele_id =clicked_link.attr('herf');
//     var scroll_top = 0;
//     scroll_top = $(ele_id).offset().top - nav_height;

//     if($(window).scrollTop != scroll_top) {
//         $('html,body').animate({scrollTop : scroll_top},1000)
//     }
// }