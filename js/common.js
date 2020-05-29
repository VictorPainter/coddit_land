$(function() {


    $('.list__button').click(function(){
        var th = $(this);
        $(th).find('.list__item').toggleClass('active');
        $(th).find('.list__description').toggleClass('open');
    })

    var lightboxVideo = GLightbox({
        selector: 'glightbox3',
    });


});
