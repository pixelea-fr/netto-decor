
jQuery(document).ready(function($) {

if ($('.is-style-references-logos .wp-block-gallery').length > 0) {

    $('.is-style-references-logos .wp-block-gallery').removeClass('wp-block-gallery');


    var direction = 1; // Direction initiale: 1 pour droite, -1 pour gauche
    var autoScrollInterval;
 //   var $scrollContainer =  $('.is-style-references-logos [class^="wp-block-gallery-"]');
    var $scrollContainer =  $('.is-style-references-logos .wp-block-gallery-3');
    console.log($scrollContainer );
    function autoScroll() {

        if ($scrollContainer.length === 0) {
            return; // Sortie de la fonction si l'élément n'est pas trouvé
        }

        $scrollContainer.removeClass('is-overflow');
        var scrollWidth = $scrollContainer[0].scrollWidth;
        var viewWidth = $scrollContainer.width();
        var currentPosition = $scrollContainer.scrollLeft();
        var scrollAmount = direction > 0 ? scrollWidth - viewWidth - currentPosition : currentPosition;

        var scrollTime = (scrollAmount / 100) * 1000; // Temps calculé pour le défilement

        $scrollContainer.animate({scrollLeft: currentPosition + scrollAmount * direction}, scrollTime, 'linear', function() {
            direction *= -1; // Changement de direction
            autoScrollInterval = setTimeout(autoScroll, 50); // Relancer après un délai
        });
    }

    function startAutoScroll() {
        if (!autoScrollInterval) { // Vérifie si le défilement n'est pas déjà actif
            autoScrollInterval = setTimeout(autoScroll, 50);
        }
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearTimeout(autoScrollInterval);
            autoScrollInterval = null; // Assurez-vous de nettoyer l'intervalle
        }
        $scrollContainer.stop();
        $scrollContainer.addClass('is-overflow');
    }
    $scrollContainer.on('mouseenter', function() {
        stopAutoScroll();

    });

    $scrollContainer.on('mouseleave', function() {
        startAutoScroll();
    });

    startAutoScroll(); // Initialisation du défilement



    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    // Élément sur lequel appliquer le drag and scroll
    const dragged_div = $('.is-style-references-logos .wp-block-gallery-2');

    // Commencer le drag
    dragged_div.on('pointerdown', function(e) {
        isDragging = true;
        startX = e.originalEvent.pageX - dragged_div.offset().left;
        scrollLeft = dragged_div.scrollLeft();
        dragged_div.addClass('active');  // Optionnel: Ajouter une classe pour le style lors du drag
    });

    // Finir le drag
    $(document).on('pointerup', function() {
        isDragging = false;
        dragged_div.removeClass('active');  // Optionnel: Retirer la classe après le drag
    });

    // Gérer le mouvement de la souris
    dragged_div.on('pointermove', function(e) {
        if (!isDragging) return;
        e.preventDefault();  // Empêcher le comportement par défaut pour améliorer la fluidité
        const x = e.originalEvent.pageX - dragged_div.offset().left;  // Position actuelle de la souris
        const walk = (x - startX) * 3; // Multiplier pour augmenter la sensibilité du drag
        dragged_div.scrollLeft(scrollLeft - walk);
    });
        
}

});