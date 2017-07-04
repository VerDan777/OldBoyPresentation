import $ from 'jquery';

class Parallax {
    constructor() {
        this.content = $('.content');
        this.st = $(this).scrollTop();
        this.events();
    }
    events() {
        $(window).scroll(function() {

            $('.content').css({
                "transform" : "translate(0%, " + this.st + "%" 
            });
        
        }) 
    }
}
export default Parallax;    