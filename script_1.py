# Let's analyze the HTML structure to identify the sections and technologies used
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Find the main sections in the HTML
# Look for style tags
style_start = html_content.find('<style>')
style_end = html_content.find('</style>') + 8

# Look for script tags
script_matches = []
for match in re.finditer(r'<script[^>]*>(.*?)</script>', html_content, re.DOTALL):
    script_matches.append({
        'start': match.start(),
        'end': match.end(),
        'content': match.group(1)[:100] + '...' if len(match.group(1)) > 100 else match.group(1)
    })

print("Style section found:")
print(f"Start: {style_start}, End: {style_end}")

print(f"\nFound {len(script_matches)} script sections:")
for i, script in enumerate(script_matches):
    print(f"Script {i+1}: positions {script['start']}-{script['end']}")
    print(f"Content preview: {script['content']}")

# Find the main HTML structure
head_start = html_content.find('<head>')
head_end = html_content.find('</head>') + 7

body_start = html_content.find('<body>')
body_end = html_content.find('</body>')

print(f"\nHTML structure:")
print(f"Head: {head_start}-{head_end}")
print(f"Body: {body_start}-{body_end}")

# Extract just the body content to see the main sections
body_content = html_content[body_start:body_end]
print(f"\nBody content length: {len(body_content)}")

# Look for main sections in the body
sections = re.findall(r'<(section|div)[^>]*class="([^"]*)"', body_content)
print(f"\nFound sections/divs:")
for section in sections[:15]:  # Show first 15 sections
    print(f"{section[0]} with class: {section[1]}")