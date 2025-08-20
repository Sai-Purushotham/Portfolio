# Create final optimized HTML file that properly loads all JavaScript modules
final_html = '''<!DOCTYPE html>
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

# Read the body content from the original index_split.html
with open('index_split.html', 'r', encoding='utf-8') as f:
    split_html = f.read()

body_start = split_html.find('<body>') + 6
body_end = split_html.find('</body>')
body_content = split_html[body_start:body_end]

# Add the JavaScript modules at the end
final_html += body_content + '''
    
    <!-- Modular JavaScript Files -->
    <script src="js/animations.js"></script>
    <script src="js/interactions.js"></script>
    <script src="js/three_js.js"></script>
    <script src="js/main.js"></script>
</body>
</html>'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("✅ Created final index.html with complete modular structure")

# Create a project structure summary
print("\n🎯 FINAL PROJECT STRUCTURE:")
print("```")
print("portfolio-website/")
print("├── index.html              # Main HTML file (FINAL VERSION)")
print("├── README.md              # Documentation")
print("├── css/                   # CSS Modules (10 files)")
print("│   ├── variables.css      # CSS custom properties")
print("│   ├── base.css          # Base styles & resets")
print("│   ├── navigation.css    # Header & navigation")
print("│   ├── hero.css         # Hero section styles")
print("│   ├── about.css        # About section")
print("│   ├── projects.css     # Portfolio projects")
print("│   ├── skills.css       # Skills & technologies")
print("│   ├── contact.css      # Contact section")
print("│   ├── animations.css   # Keyframes & animations")
print("│   └── responsive.css   # Media queries")
print("└── js/                   # JavaScript Modules (4 files)")
print("    ├── animations.js     # AOS & Typed.js setup")
print("    ├── interactions.js  # User interactions")
print("    ├── three_js.js      # 3D graphics")
print("    └── main.js          # Main initialization")
print("```")

print("\n🚀 DEPLOYMENT INSTRUCTIONS:")
print("1. Upload ALL files maintaining the folder structure")
print("2. Use a web server (cannot run from file:// protocol)")
print("3. Access via: http://yourserver.com/index.html")
print("4. All external dependencies load from CDN")
print("5. Works with any standard web hosting service")

print("\n📋 TECHNOLOGIES ORGANIZED:")
print("• HTML5: Semantic structure")
print("• CSS3: 10 modular stylesheets")
print("• JavaScript: 4 functional modules")
print("• External: AOS, Typed.js, Three.js, Lottie, FontAwesome")

# Clean up intermediate files
import os
if os.path.exists('index_split.html'):
    os.remove('index_split.html')
if os.path.exists('index_modular.html'):
    os.remove('index_modular.html')
if os.path.exists('styles.css'):
    os.remove('styles.css')
    
print("\n🧹 Cleaned up intermediate files")
print("\n✨ Ready for live server deployment!")