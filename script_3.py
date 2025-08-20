# Let's create a better organized structure and split CSS into modules
import os

# Read the CSS file we just created
with open('styles.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Let's analyze the CSS structure to identify logical sections
print("Analyzing CSS structure...")

# Look for major CSS sections based on comments or selectors
sections = {
    'variables': '',
    'base': '',
    'navigation': '',
    'hero': '',
    'about': '',
    'projects': '',
    'skills': '',
    'contact': '',
    'animations': '',
    'responsive': ''
}

# Split CSS into logical sections based on selectors and comments
lines = css_content.split('\n')
current_section = 'base'
current_content = []

for line in lines:
    line_lower = line.lower().strip()
    
    # Check for CSS variables (root)
    if ':root' in line or '--' in line:
        if current_section != 'variables':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'variables'
    
    # Check for navigation related styles
    elif any(nav_keyword in line_lower for nav_keyword in ['nav', 'header', 'menu', '.logo']):
        if current_section != 'navigation':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'navigation'
    
    # Check for hero section
    elif any(hero_keyword in line_lower for hero_keyword in ['.hero', '.wave', '.floating']):
        if current_section != 'hero':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'hero'
    
    # Check for about section
    elif '.about' in line_lower:
        if current_section != 'about':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'about'
    
    # Check for project section
    elif any(project_keyword in line_lower for project_keyword in ['.project', '.portfolio', '.work']):
        if current_section != 'projects':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'projects'
    
    # Check for skills section
    elif any(skill_keyword in line_lower for skill_keyword in ['.skill', '.tech', '.badge']):
        if current_section != 'skills':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'skills'
    
    # Check for contact section
    elif '.contact' in line_lower:
        if current_section != 'contact':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'contact'
    
    # Check for animations
    elif any(anim_keyword in line_lower for anim_keyword in ['@keyframes', 'animation', 'transform', 'transition']):
        if current_section != 'animations':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'animations'
    
    # Check for responsive styles
    elif '@media' in line_lower:
        if current_section != 'responsive':
            sections[current_section] += '\n'.join(current_content) + '\n'
            current_content = []
            current_section = 'responsive'
    
    current_content.append(line)

# Add the last section
sections[current_section] += '\n'.join(current_content)

# Create CSS folder structure
os.makedirs('css', exist_ok=True)
os.makedirs('js', exist_ok=True)

# Create modular CSS files
css_files_created = []
for section_name, section_content in sections.items():
    if section_content.strip():  # Only create file if there's content
        filename = f'css/{section_name}.css'
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(section_content.strip())
        css_files_created.append(filename)
        print(f"Created {filename} ({len(section_content)} characters)")

print(f"\nCreated {len(css_files_created)} CSS module files")