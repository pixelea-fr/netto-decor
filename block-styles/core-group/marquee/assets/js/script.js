jQuery(document).ready(function($) {
    function initializeMarquee() {
        $('.is-style-marquee').each(function() {
            var $container = $(this);
            var $content = $container.find('.wp-block-group').first();
            
            // Réinitialiser les styles
            $container.css({
                'height': 'auto',
                'overflow': 'hidden',
                'position': 'relative'
            });
            $content.css({
                'width': 'auto',
                'position': 'static',
                'transform': 'none',
                'white-space': 'nowrap'
            });

            // Mesurer et ajuster
            var containerWidth = $container.width();
            var contentWidth = $content.width();
            var contentHeight = $content.height();

            // Ajuster la hauteur du conteneur
            $container.css('height', contentHeight);

            // Cloner le contenu si nécessaire
            if ($container.children('.wp-block-group').length === 1) {
                var $clone = $content.clone();
                $container.append($clone);
            } else {
                var $clone = $container.children('.wp-block-group').last();
            }

            // Configurer l'animation
            var duration = contentWidth / 50; // Ajustez pour changer la vitesse
            
            $content.css({
                'position': 'absolute',
                'left': '0',
                'width': contentWidth
            });

            $clone.css({
                'position': 'absolute',
                'left': contentWidth + 'px',
                'width': contentWidth
            });

            // Appliquer l'animation
            $content.add($clone).css({
                'animation': 'marquee ' + duration + 's linear infinite'
            });

            // Gestion du survol
            $container.hover(
                function() {
                    $content.add($clone).css('animation-play-state', 'paused');
                },
                function() {
                    $content.add($clone).css('animation-play-state', 'running');
                }
            );
        });
    }

    // Fonction pour réinitialiser le marquee
    function resetMarquee() {
        $('.is-style-marquee').each(function() {
            var $container = $(this);
            $container.find('.wp-block-group').css({
                'animation': 'none',
                'transform': 'none'
            });
        });
        setTimeout(initializeMarquee, 50);
    }

    // Initialiser le marquee
    initializeMarquee();

    // Réinitialiser lors du redimensionnement de la fenêtre
    $(window).on('resize', resetMarquee);
});
