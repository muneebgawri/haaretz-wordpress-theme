<?php
/**
 * The main template file
 */

get_header(); ?>

<main class="site-main">
    <div class="content-area">
        <?php if (have_posts()) : ?>
            
            <!-- Featured Article -->
            <?php
            $featured_query = new WP_Query(array(
                'posts_per_page' => 1,
                'meta_query' => array(
                    array(
                        'key' => 'featured_post',
                        'value' => 'yes',
                        'compare' => '='
                    )
                )
            ));
            
            if ($featured_query->have_posts()) :
                while ($featured_query->have_posts()) : $featured_query->the_post(); ?>
                    <article class="featured-article">
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('large'); ?>
                            </a>
                        <?php endif; ?>
                        
                        <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
                        
                        <div class="excerpt">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <div class="meta">
                            By <?php the_author(); ?> | <?php echo get_the_date(); ?> | <?php comments_number('0 Comments', '1 Comment', '% Comments'); ?>
                        </div>
                    </article>
                <?php endwhile;
                wp_reset_postdata();
            endif; ?>

            <!-- Breaking News Section -->
            <section class="breaking-news">
                <h2>Israel-Hamas Cease-fire</h2>
                <ul>
                    <?php
                    $breaking_query = new WP_Query(array(
                        'posts_per_page' => 5,
                        'meta_query' => array(
                            array(
                                'key' => 'breaking_news',
                                'value' => 'yes',
                                'compare' => '='
                            )
                        )
                    ));
                    
                    if ($breaking_query->have_posts()) :
                        while ($breaking_query->have_posts()) : $breaking_query->the_post(); ?>
                            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
                        <?php endwhile;
                        wp_reset_postdata();
                    else : ?>
                        <li><a href="#">Bodies of Two Hostages Arrive in Israel From Gaza, on Way to Forensic Identification</a></li>
                        <li><a href="#">Trump's Middle East Visions Face a Long Road to Reality</a></li>
                        <li><a href="#">'Fortunate to Embrace Our Loved Ones' | Families of Freed Israeli Hostages Ready Themselves for Journey to Recovery</a></li>
                        <li><a href="#">Thousands Attend Funeral of Daniel Peretz, Whose Body Was Returned From Gaza</a></li>
                        <li><a href="#">'You Are a Hero!' Relatives of Slain Nepali Hostage Grieve His Death in Hamas Captivity</a></li>
                    <?php endif; ?>
                </ul>
            </section>

            <!-- News Grid -->
            <section class="news-grid">
                <?php
                // Get regular posts (excluding featured and breaking)
                $regular_query = new WP_Query(array(
                    'posts_per_page' => 6,
                    'meta_query' => array(
                        'relation' => 'OR',
                        array(
                            'key' => 'featured_post',
                            'compare' => 'NOT EXISTS'
                        ),
                        array(
                            'key' => 'featured_post',
                            'value' => 'yes',
                            'compare' => '!='
                        )
                    )
                ));
                
                if ($regular_query->have_posts()) :
                    while ($regular_query->have_posts()) : $regular_query->the_post(); ?>
                        <article class="news-item">
                            <?php if (has_post_thumbnail()) : ?>
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium'); ?>
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
                    <?php endwhile;
                    wp_reset_postdata();
                endif; ?>
            </section>

        <?php else : ?>
            <p><?php _e('No posts found.', 'haaretz'); ?></p>
        <?php endif; ?>
    </div>

    <?php get_sidebar(); ?>
</main>

<?php get_footer(); ?>
