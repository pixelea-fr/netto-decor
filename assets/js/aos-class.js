(function($){

    function addAOSAttributes(element, animation, duration= 3000,delay=0) {

  
    // Ajoutez les attributs AOS à l'élément
    element.attr('data-aos', animation);
    element.attr('data-aos-duration', duration);
    element.attr('data-aos-delay',delay);

    //element.attr('data-aos-anchor-placement', 'top-bottom');

   AOS.refreshHard();
   

    }


$('document').ready(function(){

    $('h1 > s , h2 > s , h3  > s, h4 > s, h5 > s, h6 > s').addClass('ng1Aos ng1Aos-HighlightText-1000');
    $('.is-style-h1 > s, .is-style-h2 > s, .is-style-h3 > s, .is-style-h4 > s, .is-style-h5 > s, .is-style-h6 > s').addClass('ng1Aos ng1Aos-HighlightText-1000');
    $('.has-h-1-font-size >s, .has-h-2-font-size >s, .has-h-3-font-size >s, .has-h-4-font-size >s, .has-h-5-font-size >s, .has-h-6-font-size >s').addClass('ng1Aos ng1Aos-HighlightText-1000');
// Sélectionnez tous les éléments avec une classe commençant par ng1Aos-
    $('.ng1Aos').each(function() {
     
        if (!$(this).parents('.no-anim').length) {
            // Récupérez toutes les classes commençant par 'ng1Aos-'
            var classes = $(this).attr('class').split(' ');
            
            // Filtrer les classes qui commencent par 'ng1Aos-'
            var ng1AosClasses = classes.filter(function(className) {
                return className.startsWith('ng1Aos-');
            });

            // Traitez chaque classe 'ng1Aos-'
            ng1AosClasses.forEach(function(className) {

                // Extrait le nom de l'animation et la durée
                var parts = className.split('-');
                var animationNameCamelCase= parts[1]; // Le nom de l'animation
                var duration = parts[2]; // La durée de l'animation
                var delay = parts[3]; // La durée de l'animation
                // Convertir le nom de l'animation en format avec des tirets
                var animationNameWithHyphens = animationNameCamelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                // Ajoutez les attributs AOS à chaque élément
                addAOSAttributes($(this), animationNameWithHyphens, duration,delay);
                $(this).removeClass(className);
                $(this).removeClass("ng1Aos");
            }.bind(this)); // assure que "this" se réfère à l'élément actuel
        }

    });

    AOS.init();
    });
    
})(jQuery);