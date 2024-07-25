(function($) {
    $(document).ready(function() {
        // Vérifiez si le script est exécuté dans le front-end
        if (!$('body').hasClass('block-editor-iframe__body')) {
            var $accordionContainer = $('.is-style-accordeon');


            $accordionContainer.find('details.wp-block-details').each(function(){
                $(this).css('max-height','5rem');
            } );

            $accordionContainer.on('click', 'details.wp-block-details > summary', function(event) {
                event.preventDefault(); // Empêcher le comportement par défaut du navigateur

                var $currentDetails = $(this).parent();

                // Fermer tous les autres éléments <details>
                $accordionContainer.find('details.wp-block-details').not($currentDetails).each(function() {
                    var $details = $(this);
                    if ($details.attr('open')) {
                        $details.css('max-height', '5rem');
                        $details.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(event) {
                            if (event.originalEvent.propertyName === 'max-height') {
                                $details.removeAttr('open');
                            }
                        });
                    }
                });

                // Ouvrir ou fermer l'élément cliqué
                if ($currentDetails.attr('open')) {
                    $currentDetails.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(event) {
                        if (event.originalEvent.propertyName === 'max-height') {
                            $currentDetails.removeAttr('open');
                        }
                    });
                } else {
                    $currentDetails.attr('open', '');
                    var contentHeight = $currentDetails[0].scrollHeight + 'px';
                    $currentDetails.css('max-height', contentHeight);
                }
            });
        }
    });
})(jQuery);
