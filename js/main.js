console.log('%c Ращектаев Евгений ПИ-228', 'background: #222; color: #bada55');
(function(){
    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {

        wow = new WOW({
            mobile: false
        });
        wow.init();



        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('a[href="#totop"]').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });


 


        $('.count-item').each(function(i) {
            console.log(i)
            console.log(this)
            $(this).appear(function() {
                var number = $(this).find('.count-to').data('countto');
                $(this).find('.count-to').countTo({from: 0, to: number, speed: 1200, refreshInterval: 30});
            });
        });


        function removeBackgroundStyle(){
                
            $('.startapps-block').each(function(i) {
                var elem2=$(this)
                elem2.css('opacity', 1);
            });

        }
        function setBackgroundStyle(elem){
            $('.startapps-block').each(function(i){
                var elem2=$(this)
                elem2.css('opacity', 0.2);
            });
            elem.css('opacity', (1));
        }
        $('.startapps-block').each(function(i){

           var elem=$(this)
           elem.mouseenter(
                function(){
                setBackgroundStyle(elem)
            })
            elem.mouseleave(function(){
                removeBackgroundStyle()
            })
        })
        // $('.owl-carousel').each(function(i) {

        //     // Check items number
        //     if ($(this).data('items') > 0) {
        //         items = $(this).data('items');
        //     } else {
        //         items = 4;
        //     }
        //     if (($(this).data('pagination') > 0) && ($(this).data('pagination') === true)) {
        //         pagination = true;
        //     } else {
        //         pagination = false;
        //     }

        //     // Check navigation true/false
        //     if (($(this).data('navigation') > 0) && ($(this).data('navigation') === true)) {
        //         navigation = true;
        //     } else {
        //         navigation = false;
        //     }

        //     $(this).owlCarousel( {
        //         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        //         nav: navigation,
        //         dots: pagination,
        //         loop: false,
        //         dotsSpeed: 400,
        //         items: items,
        //         navSpeed: 300,
        //         autoplay: 2000
        //     });

        // });


    



    });
})(jQuery);

