$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.class1').addClass('class2');
    }
    else {
        $('.class1').removeClass('class2');
    }
});