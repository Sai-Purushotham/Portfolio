# Let's extract different sections and create separate files
import os

with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract CSS styles
style_start = html_content.find('<style>') + 7
style_end = html_content.find('</style>')
css_content = html_content[style_start:style_end].strip()

# Extract the main JavaScript (the last script tag)
last_script_start = html_content.rfind('<script>') + 8
last_script_end = html_content.rfind('</script>')
js_content = html_content[last_script_start:last_script_end].strip()

# Extract HTML structure without embedded styles and scripts
html_without_embedded = html_content[:style_start-7] + html_content[style_end+8:last_script_start-8] + html_content[last_script_end+9:]

print(f"CSS content length: {len(css_content)}")
print(f"JavaScript content length: {len(js_content)}")
print(f"HTML without embedded content length: {len(html_without_embedded)}")

# Create the CSS file
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

# Create the JavaScript file
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Created styles.css and script.js files")

# Now create the updated HTML file with external references
# Add CSS and JS references to the head section
head_close_pos = html_without_embedded.find('</head>')
css_link = '    <link rel=\"stylesheet\" href=\"styles.css\">\n'
js_script = '    <script src=\"script.js\" defer></script>\n'

updated_html = (html_without_embedded[:head_close_pos] + 
               css_link + js_script + 
               html_without_embedded[head_close_pos:])

with open('index_split.html', 'w', encoding='utf-8') as f:
    f.write(updated_html)

print("Created index_split.html with external references")
print("\nFiles created:")
print("- index_split.html (main HTML file)")
print("- styles.css (all CSS styles)")
print("- script.js (main JavaScript functionality)")

# Let's also check what external dependencies are included
external_deps = []
# Find all link and script tags that reference external resources
import re
links = re.findall(r'<link[^>]+href="([^"]*)"[^>]*>', updated_html)
scripts = re.findall(r'<script[^>]+src="([^"]*)"[^>]*>', updated_html)

print(f"\nExternal dependencies found:")
print("CSS Dependencies:")
for link in links:
    if 'http' in link or 'cdn' in link:
        print(f"  - {link}")

print("JavaScript Dependencies:")
for script in scripts:
    if 'http' in script or 'cdn' in script:
        print(f"  - {script}")