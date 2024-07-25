(function($) {
    $(document).ready(function() {
        var count=0;
        $('.wp-block-group.is-style-equipe .wp-block-columns .wp-block-column > .wp-block-group').each(function(index) {
            count ++;
            $(this).attr('data-index',count);
            
        })
        $('.wp-block-group.is-style-equipe .wp-block-columns .wp-block-column > .wp-block-group').on('click', function() {
                if ( $(this).hasClass('active')){
                    $('.wp-block-group.is-style-equipe .wp-block-columns .wp-block-column > .wp-block-group').removeClass('active');
                    $('.wp-block-group.is-style-equipe .wp-block-columns .wp-block-column > .wp-block-group').removeAttr('style');
                }else{
                    $('.wp-block-group.is-style-equipe .wp-block-columns .wp-block-column > .wp-block-group').removeClass('active');
                    $('.wp-block-group.is-style-equipe .wp-block-columns .wp-block-column > .wp-block-group').removeAttr('style');
                    $(this).addClass('active');
                    margin_mooved =  $(this).find('.wp-block-group .wp-block-group:last-child').height();
                    real_height = $(this).height();
                    $(this).css('height',real_height);
                    var index = $(this).attr("data-index");
            
                    if (window.innerWidth > 1024){
                        index_to_move = parseInt(index) +2;
                        if  (index % 2 === 0) {
                            $('[data-index="'+index_to_move+'"]').css('margin-top',margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+2) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+4) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+6) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+8) +'"]').css('margin-top','-'+margin_mooved+'px');
                        }else{
                            $('[data-index="'+index_to_move+'"]').css('margin-top',margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+2) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+4) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+6) +'"]').css('margin-top','-'+margin_mooved+'px');
                            $('[data-index="' + (index_to_move+1+8) +'"]').css('margin-top','-'+margin_mooved+'px');
                        } 
                    }else{
                            index_to_move = parseInt(index) +1;
                            $('[data-index="'+index_to_move+'"]').css('margin-top',margin_mooved+'px');
                    }

                }
        });
    });
})(jQuery);
