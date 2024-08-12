
(function($){
  $(document).ready(function($) {

    var lastScrollTop = 0;
    
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 200) {
            if (scrollTop > lastScrollTop) {
                // L'utilisateur défile vers le bas
                $('body').addClass('menu-not-on-top');
            } else {
                // L'utilisateur défile vers le haut
                $('body').removeClass('menu-not-on-top');
            }
        } else {
            // Si la position de défilement est en haut de la page
            $('body').removeClass('menu-not-on-top');
        }

        lastScrollTop = scrollTop;
    });
      //_________ AJOUT de la hauteur du header au body (comme variable CSS)__________
      // Obtenez la hauteur de l'élément header avec la classe .fixed
      header_height = $('header.wp-block-template-part>.fixed').height();

      // Fonction pour mettre à jour la variable CSS
      function updateHeaderHeight() {
          var headerHeight = $('header.wp-block-template-part>.fixed').height();

          if (headerHeight) {
              // Définir une variable CSS au body avec la hauteur de l'élément header
              $('body').css('--header-height', headerHeight + 'px');
          }
      }

      // Initialiser la hauteur au chargement de la page
      updateHeaderHeight();

      // Utiliser ResizeObserver pour surveiller les changements de taille
      var headerElement = document.querySelector('header.wp-block-template-part>.fixed');
      if (headerElement) {
          var resizeObserver = new ResizeObserver(function(entries) {
              for (let entry of entries) {
                  if (entry.target === headerElement) {
                      // Mettre à jour la hauteur du header si elle change
                      updateHeaderHeight();
                  }
              }
          });

          // Observer les changements de taille de l'élément header
          resizeObserver.observe(headerElement);
      }
      //__________ FIN AJOUT de la hauteur du header au body (comme variable CSS)__________
      //__________ SCROLL TO TOP __________
      // Fonction pour un défilement fluide vers une cible
      function smoothScrollTo(target) {
          var $id = $(target);
          if ($id.length === 0) {
              return;
          }

          // Position supérieure relative au document
          var pos = $id.offset().top - header_height;
          // Défilement animé vers le haut
          $('body, html').animate({scrollTop: pos});

          var urlWithoutAnchor = window.location.href.split('#')[0];

          // Mettre à jour l'URL dans la barre d'adresse du navigateur
          window.history.replaceState(null, null, urlWithoutAnchor);
      }

      // Gérer les liens avec @href commençant par '#'
      $(document).on('click', 'a[href^="#"]', function(e) {
          // Empêcher le comportement par défaut du lien
          e.preventDefault();
          // ID de l'élément cible
          var id = $(this).attr('href');
          smoothScrollTo(id);
      });

      // Gérer les liens avec @href commençant par '/#'
      $(document).on('click', 'a[href^="/#"]', function(e) {
          if (location.hash) {
              e.preventDefault();
              // ID de l'élément cible
              var id = $(this).attr('href');
              id = id.replace('/', ''); 
              smoothScrollTo(id);
          } else {
              if (window.location.pathname == '/') {
                  e.preventDefault();
                  // ID de l'élément cible
                  var id = $(this).attr('href');
                  id = id.replace('/', ''); 
                  smoothScrollTo(id);
              }
          }
      });

      // Après un court délai, vérifier si un hash est présent dans l'URL et défiler vers l'élément cible
      setTimeout(function() {
          if (location.hash) {
              window.scrollTo(0, 0);
              target = location.hash.split('#');
              smoothScrollTo('#' + target[1]);
          }
      }, 1);

      // Gérer le clic sur l'élément avec la classe .top pour défiler vers le haut de la page
      $( ".top" ).on( "click", function() {
          window.scrollTo({top: 0, behavior: 'smooth'});
      });

      // Gérer l'événement de défilement de la fenêtre
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();

          if (scroll >= 500) {
              if (!$("body").hasClass("scrolled")) {
                  $("body").addClass("scrolled");
              }
          } else {
              if ($("body").hasClass("scrolled")) {
                  $("body").removeClass("scrolled");
              }
          }
      });

      if ( $('body.page-newsletters.blog-2').length > 0 ) {
          
   
      var gal = $('body.page-newsletters.blog-2 .entry-content .wp-block-columns');    
        var galcount = 1;
        gal.each(function() {
      //    galcount ++;
          this_gal = $(this);
          if (this_gal.find('.wp-block-image ').length >0 ){
  
                this_gal.find('.wp-block-image img').each(function() {
                //var photos = $(this);
                if($(this).attr("srcset")){
                // urls = get_big_srcset(photos);
                  urls = $(this).attr('src');
                  $(this).wrap('<a href="'+urls+'" class="fancy-galery-'+galcount+'" data-fancybox="gallery">');
                }
              });
            }
          });
  
  
          for(var i = 1; i <= galcount; i++){
            Fancybox.bind(".fancy-galery-"+i, fancyoptions);
          }
    
        }

        
    });
    $(document).ready(function($) {
        function initializeSlickSliders() {
            // Sélectionner tous les éléments avec la classe 'is-style-slick'
            $('.is-style-slick').each(function() {
                // Ajouter la classe 'slick' à l'élément
                $(this).addClass('slick');
    
                // Vérifier si l'élément a un ID
                if (this.id) {
                    // Initialiser Slick slider sur cet élément
                    $('#' + this.id).slick({
                        // Options de Slick slider
                        dots: false,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        // Ajoutez d'autres options selon vos besoins
                         prevArrow: '<git type="button" class="slick-prev is-style-slick__prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></butt>',
                    nextArrow: '<git type="button" class="slick-next is-style-slick__next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></butt>'
                    });
                }else{
                    $(".slick").slick({
                        // Options de Slick slider
                        dots: false,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        // Ajoutez d'autres options selon vos besoins
                         prevArrow: '<git type="button" class="slick-prev is-style-slick__prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></butt>',
                        nextArrow: '<git type="button" class="slick-next is-style-slick__next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></butt>'
                    });
                }
            });
        }
    
        // Exécuter la fonction
        initializeSlickSliders();
    });
})(jQuery);
