# Portfolio Website - Modular Structure

This portfolio website has been split into modular files for better organization and maintainability.

## File Structure

```
├── index_modular.html          # Main HTML file
├── css/                        # CSS modules
│   ├── variables.css          # CSS custom properties/variables
│   ├── base.css              # Base styles and resets  
│   ├── navigation.css        # Navigation/header styles
│   ├── hero.css             # Hero section styles
│   ├── about.css            # About section styles
│   ├── projects.css         # Projects/portfolio styles
│   ├── skills.css           # Skills section styles
│   ├── contact.css          # Contact section styles
│   ├── animations.css       # Keyframes and animations
│   └── responsive.css       # Media queries
├── js/                      # JavaScript modules
│   └── main.js             # Main JavaScript functionality
└── README.md               # This file
```

## Technologies Used

### Frontend Framework
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties, flexbox, grid, and animations
- **JavaScript ES6+**: Interactive functionality and animations

### External Libraries
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Typed.js**: Typing animation effects
- **Three.js**: 3D graphics and animations
- **Lottie**: Animation library for motion graphics
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter & Poppins)

### Features
- Responsive design
- Smooth scrolling navigation
- 3D background animations
- Typing effects
- Scroll-triggered animations
- Modern CSS techniques (flexbox, grid, custom properties)
- Progressive loading

## Development Setup

1. Clone or download the files
2. Serve the files using a local server (required for ES6 modules and CORS):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000/index_modular.html` in your browser

## Deployment

Upload all files maintaining the folder structure to your web server. Ensure all file paths remain relative as configured.

## Browser Support

- Modern browsers supporting ES6+ features
- CSS Grid and Flexbox support required
- WebGL support recommended for 3D features
