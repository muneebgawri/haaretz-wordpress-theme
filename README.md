# Haaretz News WordPress Theme

A WordPress theme based on the design and layout of the Haaretz news website. This theme provides a clean, professional news website layout with modern responsive design.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **News Layout**: Featured articles, breaking news section, and news grid
- **Custom Post Types**: Breaking news and opinion pieces
- **Custom Meta Fields**: Featured post and breaking news options
- **Widget Areas**: Sidebar and footer widget areas
- **SEO Friendly**: Proper heading structure and meta tags
- **Custom Navigation**: Primary and footer navigation menus
- **Post Views Counter**: Track and display post popularity
- **Search Functionality**: Built-in search with custom results page

## Installation

1. **Download WordPress**: Make sure you have WordPress installed on your server or local development environment.

2. **Upload Theme**: 
   - Copy the entire theme folder to your WordPress themes directory: `/wp-content/themes/haaretz-news/`
   - Or upload via WordPress admin: Appearance > Themes > Add New > Upload Theme

3. **Activate Theme**: 
   - Go to Appearance > Themes in your WordPress admin
   - Find "Haaretz News" and click "Activate"

## Setup Instructions

### 1. Create Navigation Menus

1. Go to **Appearance > Menus**
2. Create a new menu called "Primary Menu"
3. Add your main navigation items (News, Opinion, Culture, etc.)
4. Assign the menu to "Primary" location
5. Create a "Footer Menu" and assign it to "Footer" location

### 2. Set Up Widgets

1. Go to **Appearance > Widgets**
2. Add widgets to the "Sidebar" area:
   - Recent Posts
   - Categories
   - Tags
   - Custom HTML (for social media links)

### 3. Configure Homepage

1. Go to **Settings > Reading**
2. Set "Your homepage displays" to "Your latest posts"
3. The theme will automatically display featured posts and breaking news

### 4. Customize Theme

1. Go to **Appearance > Customize**
2. Upload your logo under "Site Identity"
3. Set your site title and tagline
4. Configure colors and fonts as needed

## Custom Post Options

The theme includes custom meta boxes for posts:

- **Featured Post**: Mark posts to appear in the featured section on the homepage
- **Breaking News**: Mark posts to appear in the breaking news section

To use these options:
1. Edit any post
2. Look for the "Post Options" meta box in the sidebar
3. Check the appropriate boxes to mark posts as featured or breaking news

## Custom Post Types

The theme includes two custom post types:

### Breaking News
- Use for urgent news items
- Automatically appears in the breaking news section
- Located at `/breaking-news/` archive page

### Opinion
- Use for opinion pieces and editorials
- Located at `/opinion/` archive page

## File Structure

```
haaretz-news/
├── style.css              # Main stylesheet
├── index.php              # Homepage template
├── header.php             # Header template
├── footer.php             # Footer template
├── sidebar.php            # Sidebar template
├── single.php             # Single post template
├── archive.php            # Archive pages template
├── search.php             # Search results template
├── functions.php          # Theme functions
├── js/
│   └── navigation.js      # Navigation JavaScript
└── README.md              # This file
```

## Customization

### Colors
The main theme colors are defined in `style.css`:
- Primary blue: `#0066cc`
- Text color: `#333`
- Background: `#fff`
- Breaking news red: `#ff4444`

### Fonts
The theme uses system fonts:
- Headings: Georgia, Times New Roman, serif
- Body text: Georgia, Times New Roman, serif

### Image Sizes
The theme defines custom image sizes:
- `haaretz-featured`: 800x400px (featured articles)
- `haaretz-thumbnail`: 300x200px (news grid items)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance

The theme is optimized for performance:
- Minimal JavaScript
- Optimized CSS
- Proper image sizing
- Clean HTML structure

## Support

For support and customization requests, please refer to the WordPress Codex or contact your developer.

## License

This theme is released under the GPL v2 or later license.

## Changelog

### Version 1.0.0
- Initial release
- Responsive design
- Custom post types
- Breaking news functionality
- Featured posts
- Widget areas
- Search functionality
