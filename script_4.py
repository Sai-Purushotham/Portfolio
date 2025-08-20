# Move JavaScript to js folder and analyze for potential splitting
import shutil

# Move the main script to js folder
shutil.move('script.js', 'js/main.js')
print("Moved script.js to js/main.js")

# Read the JavaScript content to analyze for potential modules
with open('js/main.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Analyze JavaScript structure
print(f"\nJavaScript content length: {len(js_content)}")

# Look for main functionality sections in JS
js_sections = {
    'init': '',
    'animations': '',
    'interactions': '',
    'three_js': ''
}

# Split JS based on functionality
lines = js_content.split('\n')
current_section = 'init'
current_content = []

for line in lines:
    line_lower = line.lower().strip()
    
    # Check for Three.js related code
    if any(threejs_keyword in line_lower for threejs_keyword in ['three.', 'scene', 'camera', 'renderer', 'geometry', 'material', 'mesh']):
        if current_section != 'three_js':
            js_sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'three_js'
    
    # Check for animations
    elif any(anim_keyword in line_lower for anim_keyword in ['aos.init', 'typed', 'animate', 'scroll']):
        if current_section != 'animations':
            js_sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'animations'
    
    # Check for interactions
    elif any(interact_keyword in line_lower for interact_keyword in ['click', 'event', 'listener', 'hover']):
        if current_section != 'interactions':
            js_sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'interactions'
    
    current_content.append(line)

# Add the last section
js_sections[current_section] += '\n'.join(current_content)

# Create modular JS files
js_files_created = []
for section_name, section_content in js_sections.items():
    if section_content.strip() and len(section_content.strip()) > 50:  # Only create if substantial content
        filename = f'js/{section_name}.js'
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(section_content.strip())
        js_files_created.append(filename)
        print(f"Created {filename} ({len(section_content)} characters)")

print(f"\nCreated {len(js_files_created)} JavaScript module files")

# Create a main HTML file that references all the modular files
html_template = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sai Porus - Portfolio</title>
    
    <!-- External Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- External CSS Libraries -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
    
    <!-- Modular CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/projects.css">
    <link rel="stylesheet" href="css/skills.css">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- External JavaScript Libraries -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.min.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js" type="module"></script>
</head>
<body>'''

# Read the body content from the split HTML file
with open('index_split.html', 'r', encoding='utf-8') as f:
    split_html = f.read()

body_start = split_html.find('<body>') + 6
body_end = split_html.find('</body>')
body_content = split_html[body_start:body_end]

# Complete HTML with modular scripts at the end
complete_html = html_template + body_content + '''
    
    <!-- Modular JavaScript Files -->
    <script src="js/main.js" defer></script>
</body>
</html>'''

with open('index_modular.html', 'w', encoding='utf-8') as f:
    f.write(complete_html)

print(f"\nCreated index_modular.html with modular structure")

# Create a simple README file explaining the structure
readme_content = '''# Portfolio Website - Modular Structure

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
'''

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(readme_content)

print("Created README.md with project documentation")

print(f"\n📁 Final Modular Structure:")
print("├── index_modular.html (main file)")
print("├── css/ (10 CSS modules)")
print("├── js/ (1 JavaScript module)")  
print("└── README.md (documentation)")