<?php

/**
 * Ajoute les scripts et les styles pour le thème.
 * Cette fonction est actuellement commentée et n'est pas utilisée.
 */
function wpdocs_theme_name_scripts() {
    // Les enqueues de scripts et styles sont commentés ici
    // Ils incluaient Lottie, Slick Carousel et Fancybox
}
// L'action pour ajouter les scripts est également commentée
//add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );

/**
 * Crée un shortcode pour afficher l'année en cours.
 *
 * @return string L'année actuelle au format YYYY.
 */
function year_shortcode () {
    $year = date_i18n ('Y');
    return $year;
}
add_shortcode ('year', 'year_shortcode');

/**
 * Ajoute le slug du post en tant que classe au body.
 *
 * @param array $classes Les classes existantes du body.
 * @return array Les classes modifiées du body.
 */
function add_slug_body_class( $classes ) {
    global $post;
    if ( isset( $post ) ) {
        $classes[] = $post->post_type . '-' . $post->post_name;
    }
    return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );

/**
 * Remplace l'icône SVG du menu de navigation par une icône de hamburger personnalisée.
 *
 * @param string $block_content Le contenu HTML du bloc.
 * @param array $block Les attributs du bloc.
 * @return string Le contenu HTML modifié.
 */
function custom_render_block_core_navigation (string $block_content, array $block) {
    if (
        $block['blockName'] === 'core/navigation' &&
        !is_admin() &&
        !wp_is_json_request()
    ) {
        return preg_replace('/\<svg width(.*?)\<\/svg\>/', '<div class="burger-icon"><span></span><span></span><span></span></div>', $block_content);
    }
    return $block_content;
}
add_filter('render_block', 'custom_render_block_core_navigation', null, 2);

/**
 * Ajoute une nouvelle taille d'image personnalisée.
 */
function custom_image_sizes() {
  //  add_image_size('photo_equipe', 380, 380, true);
}
add_action('after_setup_theme', 'custom_image_sizes');



