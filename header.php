<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <div class="header-top">
            <div class="header-top-container">
                <div class="header-date">
                    <?php echo date('l, F j, Y'); ?>
                </div>
                <nav class="header-top-nav">
                    <ul>
                        <li><a href="#">Daily Brief</a></li>
                        <li><a href="#">Newsletters</a></li>
                        <li><a href="#">Podcast</a></li>
                        <li><a href="#">هآرتس بالعربي</a></li>
                    </ul>
                </nav>
                <div class="header-top-actions">
                    <a href="#" class="login-link">LOG IN</a>
                    <a href="#" class="subscribe-link">SUBSCRIBE NOW</a>
                </div>
            </div>
        </div>
        
        <div class="header-main">
            <div class="header-container">
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <h1 class="site-logo">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                haaretz
                            </a>
                        </h1>
                    <?php endif; ?>
                </div>

                <nav id="site-navigation" class="main-navigation">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'fallback_cb'    => 'haaretz_fallback_menu',
                    ));
                    ?>
                </nav>

                <div class="header-actions">
                    <form class="search-form" method="get" action="<?php echo esc_url(home_url('/')); ?>">
                        <input type="search" name="s" placeholder="Search..." value="<?php echo get_search_query(); ?>">
                        <button type="submit">🔍</button>
                    </form>
                    
                    <a href="#" class="subscribe-btn">Subscribe Now</a>
                </div>
            </div>
        </div>
    </header>

    <div id="content" class="site-content">
