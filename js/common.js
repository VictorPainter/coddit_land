$(function() {

    
    $('.service__carousel-inner').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.list__button').click(function(){
        var th = $(this);
        $('.faq__section-content').toggleClass('plus__height')
        $(th).find('.list__item').toggleClass('active');
        $(th).find('.list__description').toggleClass('open');
    })

    var lightboxVideo = GLightbox({
        selector: 'glightbox3',
    });

    $('#readMore').click(function(){
        $('.faq__section-content').toggleClass('allHeight');
        setTimeout(function(){ $('#lessMore').toggleClass('active'); }, 1000);
        if($('#lessMore').text() == 'Show Less'){
            setTimeout(function(){ $('#lessMore').text('see more'); }, 1000);
        }else{
            $('#lessMore').text('Show Less');
        }
    });

    var acc = document.getElementsByClassName('accordion');
	var i;
	for(i=0; i<acc.length; i++){
		acc[i].addEventListener('click', function(){
			this.classList.toggle('active');
			var panel = this.nextElementSibling;
			if(panel.style.display === "block"){
				panel.style.display = "none";
			}else{
				panel.style.display = "block";
			}
		});
	}

    

   


});
