$(document).ready(function(){
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click',function(){
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    $('.close').click(function(){
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    })
});