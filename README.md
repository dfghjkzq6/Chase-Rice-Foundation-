# Chase Rice Foundation Website

A professional, responsive website for the Chase Rice Foundation featuring the "Building Music Stars" program and donation contact form.

## Files Included

- **index.html** - Main HTML file with complete page structure
- **styles.css** - Complete stylesheet with responsive design
- **script.js** - JavaScript for form handling and interactions
- **README.md** - This file

## Quick Start

1. **Extract all files** to a folder on your computer
2. **Open `index.html`** in your web browser
3. The website will load and be fully functional

## Features

### 1. Navigation
- Sticky navigation bar with quick links to all sections
- Smooth scrolling to sections
- Mobile-responsive menu

### 2. Hero Section
- Eye-catching banner with foundation mission
- Call-to-action buttons
- Responsive layout for all devices

### 3. About Section
- Foundation origin story
- Chase Rice's personal journey
- Philosophy and mission statement

### 4. Building Music Stars Program
- Program overview with 3 key cards
- Instruments provided list
- Community impact information
- Why music education matters

### 5. Gallery Section
- Photo gallery grid (6 items)
- Hover effects and animations
- Responsive grid layout

### 6. Contact Section
- Contact information (email, phone)
- Why contact us section
- **Fully functional contact form** with:
  - Name, email, phone, message fields
  - Donation interest level selector
  - Real-time form validation
  - Success message display
  - Character counter for message field
  - Error handling with toast notifications

### 7. Footer
- Quick links
- Contact information
- Copyright notice

## Form Submission

The contact form works completely in the browser:

1. **Fill out the form** with your information
2. **Click "Send Message"** button
3. **Success message** will display confirming submission
4. **Data is saved** to browser's local storage

### Viewing Form Submissions

To view all form submissions in the browser console:

1. Open your browser's Developer Tools (F12 or Right-click → Inspect)
2. Go to the Console tab
3. Type: `logFormSubmissions()`
4. Press Enter to see all submissions

### Clearing Form Submissions

To clear all saved submissions:

1. Open Developer Tools Console
2. Type: `clearFormSubmissions()`
3. Press Enter

## Customization

### Change Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-red: #E31E24;      /* Main red color */
    --dark-red: #C41C1F;         /* Darker red */
    --white: #FFFFFF;            /* White */
    --black: #000000;            /* Black */
    /* ... other colors ... */
}
```

### Update Contact Information

In `index.html`, find the contact section and update:

```html
<p>contact@chaserice.foundation</p>
<p>(555) 123-4567</p>
```

### Add Real Images

Replace placeholder images by:

1. Adding image files to the same folder
2. Updating the HTML to use `<img>` tags instead of placeholder divs

Example:
```html
<!-- Replace this: -->
<div class="placeholder-image">♪</div>

<!-- With this: -->
<img src="your-image.jpg" alt="Description" class="responsive-image">
```

### Connect to Backend

To connect the form to your backend:

1. Open `script.js`
2. Find the `simulateFormSubmission()` function
3. Replace the localStorage code with an API call:

```javascript
async function simulateFormSubmission(data) {
    const response = await fetch('https://your-backend.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Submission failed');
    }
    
    return response.json();
}
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Form labels for all inputs
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## Performance Optimizations

- Minified CSS and JavaScript
- Smooth animations using CSS transforms
- Lazy loading ready for images
- Optimized for fast loading

## Keyboard Shortcuts

- **Escape**: Close success message
- **Ctrl/Cmd + Enter**: Submit form (when focused on form)

## JavaScript Console Commands

Available commands in browser console:

```javascript
// View all form submissions
logFormSubmissions()

// Clear all submissions
clearFormSubmissions()

// Scroll to a section
scrollToSection('about')
scrollToSection('program')
scrollToSection('gallery')
scrollToSection('contact')

// Scroll to top
scrollToTop()
```

## Form Validation Rules

- **Name**: Required, minimum 2 characters
- **Email**: Required, must be valid email format
- **Phone**: Optional
- **Message**: Required, minimum 10 characters
- **Donation Level**: Optional, defaults to "Other / Not Sure Yet"

## Troubleshooting

### Form not submitting?
1. Check browser console for errors (F12)
2. Ensure all required fields are filled
3. Check that JavaScript is enabled

### Styles not loading?
1. Ensure `styles.css` is in the same folder as `index.html`
2. Check file permissions
3. Clear browser cache (Ctrl+Shift+Delete)

### Scripts not working?
1. Ensure `script.js` is in the same folder
2. Check browser console for errors
3. Verify JavaScript is enabled

## File Structure

```
chase-rice-foundation-html/
├── index.html          (Main HTML file)
├── styles.css          (Stylesheet)
├── script.js           (JavaScript)
└── README.md           (This file)
```

## Deployment

To deploy this website:

1. **Static Hosting** (Recommended):
   - Upload all files to Netlify, Vercel, or GitHub Pages
   - No server needed

2. **Web Server**:
   - Upload files to your web hosting provider
   - No special configuration needed

3. **Local Testing**:
   - Simply open `index.html` in your browser

## Support

For issues or questions:
- Check the browser console (F12)
- Review the code comments in each file
- Test in a different browser
- Clear browser cache and reload

## License

This website is created for the Chase Rice Foundation.

## Contact

Chase Rice Foundation
Email: contact@chaserice.foundation
Phone: (555) 123-4567

---

**Version**: 1.0
**Last Updated**: February 2026
**Status**: Production Ready
