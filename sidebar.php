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
    
    <!-- Essential Reads Widget -->
    <div class="widget">
        <h3>Essential Reads</h3>
        <ul>
            <?php
            $essential_query = new WP_Query(array(
                'posts_per_page' => 5,
                'meta_key' => 'post_views_count',
                'orderby' => 'meta_value_num',
                'order' => 'DESC'
            ));
            
            if ($essential_query->have_posts()) :
                while ($essential_query->have_posts()) : $essential_query->the_post(); ?>
                    <li>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </li>
                <?php endwhile;
                wp_reset_postdata();
            else : ?>
                <li><a href="#">Sponsored by Israeli Donations, a Village Is Built for Gaza's Orphaned Children</a></li>
                <li><a href="#">Analysis | Why the pro-Palestinian Left Is Wrong to Reject Trump's Gaza Peace Plan</a></li>
                <li><a href="#">'Defending What I No Longer Believed': Two Years of the Gaza War Changed Jewish Students</a></li>
                <li><a href="#">They Survived the Nova Party Massacre. Two Years On, They Are Still Hiding</a></li>
                <li><a href="#">What Happens When an Israeli Meets Two Gazans on a French Buddhist Retreat</a></li>
            <?php endif; ?>
        </ul>
    </div>

    <!-- Trending Now Widget -->
    <div class="widget">
        <h3>Trending Now</h3>
        <ul>
            <?php
            $trending_query = new WP_Query(array(
                'posts_per_page' => 5,
                'orderby' => 'comment_count',
                'order' => 'DESC'
            ));
            
            if ($trending_query->have_posts()) :
                while ($trending_query->have_posts()) : $trending_query->the_post(); ?>
                    <li>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </li>
                <?php endwhile;
                wp_reset_postdata();
            else : ?>
                <li><a href="#">Trump's Most Important Words Came Before His Knesset Speech</a></li>
                <li><a href="#">Eurovision Song Contest Organizer Calls Off November Vote on Israel Participation</a></li>
                <li><a href="#">Nearly 2,000 Palestinian Detainees Released in Gaza Cease-fire, Including 250 Lifers</a></li>
                <li><a href="#">Mother of Freed Israeli Hostage Says Son Was Beaten Unconscious During Gaza Captivity</a></li>
                <li><a href="#">'As Soon as I Say the Word' | Trump: Israel Could Resume Gaza Fighting if Hamas Won't Uphold Cease-fire Deal</a></li>
            <?php endif; ?>
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
