// $(window).scroll(function() {

//     var st = $(this).scrollTop();

//     $('.parallax').css({
//         "transform": "translate(0%, " + st + "%"
//     });
// });
$(window).scroll(function(e){
 
    parallax();
});
   function parallax(){
    var scrolled = $(window).scrollTop();
    $('.content').css('top', -(scrolled * 0.2) + 'px');
}