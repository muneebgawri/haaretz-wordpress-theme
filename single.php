<?php
/**
 * The template for displaying all single posts
 */

get_header(); ?>

<main class="site-main">
    <div class="content-area">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('single-post'); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    
                    <div class="entry-meta">
                        <span class="author">By <?php the_author(); ?></span> |
                        <span class="date"><?php echo get_the_date(); ?></span> |
                        <span class="comments"><?php comments_number('0 Comments', '1 Comment', '% Comments'); ?></span>
                        <?php if (has_category()) : ?>
                            | <span class="categories"><?php the_category(', '); ?></span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php the_content(); ?>
                    
                    <?php
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'haaretz'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <footer class="entry-footer">
                    <?php if (has_tag()) : ?>
                        <div class="post-tags">
                            <strong>Tags:</strong> <?php the_tags('', ', ', ''); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="post-navigation">
                        <?php
                        the_post_navigation(array(
                            'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'haaretz') . '</span> <span class="nav-title">%title</span>',
                            'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'haaretz') . '</span> <span class="nav-title">%title</span>',
                        ));
                        ?>
                    </div>
                </footer>
            </article>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>
    </div>

    <?php get_sidebar(); ?>
</main>

<?php get_footer(); ?>
