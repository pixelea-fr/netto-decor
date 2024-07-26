<?php
function ajouter_classe_blog_id($classes) {
    if (is_multisite()) {
        global $blog_id;
        $classes[] = 'blog-' . $blog_id;
    }
    return $classes;
}
add_filter('body_class', 'ajouter_classe_blog_id');

function desactiver_jetpack_block_slideshow() {
    if ( ! is_admin() && is_multisite()) {
        global $blog_id;
        if ( $blog_id == 1 ){
            wp_dequeue_script( 'jetpack-block-slideshow' );
            wp_deregister_script( 'jetpack-block-slideshow' );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'desactiver_jetpack_block_slideshow', 100 );