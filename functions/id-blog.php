<?php
function ajouter_classe_blog_id($classes) {
    if (is_multisite()) {
        global $blog_id;
        $classes[] = 'blog-' . $blog_id;
    }
    return $classes;
}
add_filter('body_class', 'ajouter_classe_blog_id');
