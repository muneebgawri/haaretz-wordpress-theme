<?php
/**
 * The template for displaying search results pages
 */

get_header(); ?>

<main class="site-main">
    <div class="content-area">
        <?php if (have_posts()) : ?>
            <header class="page-header">
                <h1 class="page-title">
                    <?php
                    printf(
                        /* translators: %s: search query. */
                        esc_html__('Search Results for: %s', 'haaretz'),
                        '<span>' . get_search_query() . '</span>'
                    );
                    ?>
                </h1>
            </header>

            <div class="news-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('news-item'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('haaretz-thumbnail'); ?>
                            </a>
                        <?php endif; ?>
                        
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        
                        <div class="excerpt">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <div class="meta">
                            By <?php the_author(); ?> | <?php echo get_the_date(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => __('Previous', 'haaretz'),
                'next_text' => __('Next', 'haaretz'),
            ));
            ?>

        <?php else : ?>
            <header class="page-header">
                <h1 class="page-title">
                    <?php
                    printf(
                        /* translators: %s: search query. */
                        esc_html__('Nothing found for: %s', 'haaretz'),
                        '<span>' . get_search_query() . '</span>'
                    );
                    ?>
                </h1>
            </header>

            <div class="no-results">
                <p><?php _e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'haaretz'); ?></p>
                
                <?php get_search_form(); ?>
            </div>
        <?php endif; ?>
    </div>

    <?php get_sidebar(); ?>
</main>

<?php get_footer(); ?>
