<?php
function ajouter_classe_blog_id($classes) {
    if (is_multisite()) {
        global $blog_id;
        $classes[] = 'blog-' . $blog_id;
    }
    return $classes;
}
add_filter('body_class', 'ajouter_classe_blog_id');
function add_slick_to_blog_1() {
    if (is_multisite()) {
        global $blog_id;
        if($blog_id == 1) {
            wp_enqueue_script("slick");
            wp_enqueue_style("slick");
        }
    }
}
add_action('init','add_slick_to_blog_1');
