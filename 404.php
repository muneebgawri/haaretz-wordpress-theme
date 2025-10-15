<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header(); ?>

<main class="site-main">
    <div class="content-area">
        <section class="error-404 not-found">
            <header class="page-header">
                <h1 class="page-title"><?php _e('Oops! That page can&rsquo;t be found.', 'haaretz'); ?></h1>
            </header>

            <div class="page-content">
                <p><?php _e('It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'haaretz'); ?></p>

                <?php get_search_form(); ?>

                <div class="widget">
                    <h3><?php _e('Most Used Categories', 'haaretz'); ?></h3>
                    <ul>
                        <?php
                        wp_list_categories(array(
                            'orderby'    => 'count',
                            'order'      => 'DESC',
                            'show_count' => 1,
                            'title_li'   => '',
                            'number'     => 10,
                        ));
                        ?>
                    </ul>
                </div>

                <div class="widget">
                    <h3><?php _e('Archives', 'haaretz'); ?></h3>
                    <ul>
                        <?php
                        wp_get_archives(array(
                            'type'  => 'monthly',
                            'limit' => 12,
                        ));
                        ?>
                    </ul>
                </div>

                <div class="widget">
                    <h3><?php _e('Recent Posts', 'haaretz'); ?></h3>
                    <ul>
                        <?php
                        $recent_posts = wp_get_recent_posts(array(
                            'numberposts' => 5,
                            'post_status' => 'publish'
                        ));
                        foreach ($recent_posts as $post) : ?>
                            <li>
                                <a href="<?php echo get_permalink($post['ID']); ?>">
                                    <?php echo $post['post_title']; ?>
                                </a>
                            </li>
                        <?php endforeach;
                        wp_reset_query();
                        ?>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <?php get_sidebar(); ?>
</main>

<?php get_footer(); ?>
