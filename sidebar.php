<?php
/**
 * The sidebar containing the main widget area
 */

if (!is_active_sidebar('sidebar-1')) {
    return;
}
?>

<aside id="secondary" class="sidebar">
    <?php dynamic_sidebar('sidebar-1'); ?>
    
    <!-- Popular Articles Widget -->
    <div class="widget">
        <h3>Most Popular</h3>
        <ul>
            <?php
            $popular_query = new WP_Query(array(
                'posts_per_page' => 5,
                'meta_key' => 'post_views_count',
                'orderby' => 'meta_value_num',
                'order' => 'DESC'
            ));
            
            if ($popular_query->have_posts()) :
                while ($popular_query->have_posts()) : $popular_query->the_post(); ?>
                    <li>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </li>
                <?php endwhile;
                wp_reset_postdata();
            endif; ?>
        </ul>
    </div>

    <!-- Recent Comments Widget -->
    <div class="widget">
        <h3>Recent Comments</h3>
        <ul>
            <?php
            $recent_comments = get_comments(array(
                'number' => 5,
                'status' => 'approve',
                'post_status' => 'publish'
            ));
            
            foreach ($recent_comments as $comment) : ?>
                <li>
                    <a href="<?php echo get_comment_link($comment); ?>">
                        <?php echo wp_trim_words($comment->comment_content, 10); ?>
                    </a>
                    <small>by <?php echo $comment->comment_author; ?></small>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>

    <!-- Categories Widget -->
    <div class="widget">
        <h3>Categories</h3>
        <ul>
            <?php wp_list_categories(array(
                'orderby' => 'count',
                'order' => 'DESC',
                'show_count' => true,
                'title_li' => '',
                'number' => 10
            )); ?>
        </ul>
    </div>

    <!-- Tags Widget -->
    <div class="widget">
        <h3>Tags</h3>
        <?php
        $tags = get_tags(array(
            'orderby' => 'count',
            'order' => 'DESC',
            'number' => 20
        ));
        
        if ($tags) : ?>
            <div class="tagcloud">
                <?php foreach ($tags as $tag) : ?>
                    <a href="<?php echo get_tag_link($tag->term_id); ?>" class="tag-link">
                        <?php echo $tag->name; ?> (<?php echo $tag->count; ?>)
                    </a>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</aside><!-- #secondary -->
