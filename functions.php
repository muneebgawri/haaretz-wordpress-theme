<?php
/**
 * Haaretz theme functions and definitions
 */

if (!defined('_S_VERSION')) {
    define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function haaretz_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary', 'haaretz'),
        'footer'  => esc_html__('Footer', 'haaretz'),
    ));

    // Add image sizes
    add_image_size('haaretz-featured', 800, 400, true);
    add_image_size('haaretz-thumbnail', 300, 200, true);
}
add_action('after_setup_theme', 'haaretz_setup');

/**
 * Register widget area.
 */
function haaretz_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'haaretz'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'haaretz'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 1', 'haaretz'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add widgets here.', 'haaretz'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 2', 'haaretz'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add widgets here.', 'haaretz'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'haaretz_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function haaretz_scripts() {
    wp_enqueue_style('haaretz-style', get_stylesheet_uri(), array(), _S_VERSION);
    wp_style_add_data('haaretz-style', 'rtl', 'replace');

    wp_enqueue_script('haaretz-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'haaretz_scripts');

/**
 * Fallback menu for primary navigation
 */
function haaretz_fallback_menu() {
    echo '<ul id="primary-menu" class="menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">Home</a></li>';
    echo '<li><a href="' . esc_url(home_url('/news/')) . '">News</a></li>';
    echo '<li><a href="' . esc_url(home_url('/opinion/')) . '">Opinion</a></li>';
    echo '<li><a href="' . esc_url(home_url('/culture/')) . '">Culture</a></li>';
    echo '<li><a href="' . esc_url(home_url('/sports/')) . '">Sports</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about/')) . '">About</a></li>';
    echo '</ul>';
}

/**
 * Add custom meta boxes for featured posts and breaking news
 */
function haaretz_add_meta_boxes() {
    add_meta_box(
        'haaretz_post_options',
        'Post Options',
        'haaretz_post_options_callback',
        'post',
        'side',
        'high'
    );
}
add_action('add_meta_boxes', 'haaretz_add_meta_boxes');

function haaretz_post_options_callback($post) {
    wp_nonce_field('haaretz_save_post_options', 'haaretz_post_options_nonce');
    
    $featured = get_post_meta($post->ID, 'featured_post', true);
    $breaking = get_post_meta($post->ID, 'breaking_news', true);
    
    echo '<p>';
    echo '<label><input type="checkbox" name="featured_post" value="yes"' . checked($featured, 'yes', false) . '> Featured Post</label><br>';
    echo '<label><input type="checkbox" name="breaking_news" value="yes"' . checked($breaking, 'yes', false) . '> Breaking News</label>';
    echo '</p>';
}

function haaretz_save_post_options($post_id) {
    if (!isset($_POST['haaretz_post_options_nonce']) || !wp_verify_nonce($_POST['haaretz_post_options_nonce'], 'haaretz_save_post_options')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['featured_post'])) {
        update_post_meta($post_id, 'featured_post', 'yes');
    } else {
        delete_post_meta($post_id, 'featured_post');
    }

    if (isset($_POST['breaking_news'])) {
        update_post_meta($post_id, 'breaking_news', 'yes');
    } else {
        delete_post_meta($post_id, 'breaking_news');
    }
}
add_action('save_post', 'haaretz_save_post_options');

/**
 * Add post view counter
 */
function haaretz_set_post_views($postID) {
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if ($count == '') {
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    } else {
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}

function haaretz_get_post_views($postID) {
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if ($count == '') {
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0 View";
    }
    return $count . ' Views';
}

// Track post views
function haaretz_track_post_views() {
    if (is_single()) {
        global $post;
        haaretz_set_post_views($post->ID);
    }
}
add_action('wp_head', 'haaretz_track_post_views');

/**
 * Custom excerpt length
 */
function haaretz_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'haaretz_excerpt_length');

/**
 * Custom excerpt more
 */
function haaretz_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'haaretz_excerpt_more');

/**
 * Add custom post types for different news categories
 */
function haaretz_create_post_types() {
    // Breaking News post type
    register_post_type('breaking_news', array(
        'labels' => array(
            'name' => 'Breaking News',
            'singular_name' => 'Breaking News Item',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-megaphone',
    ));

    // Opinion post type
    register_post_type('opinion', array(
        'labels' => array(
            'name' => 'Opinion',
            'singular_name' => 'Opinion Piece',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-format-quote',
    ));
}
add_action('init', 'haaretz_create_post_types');
