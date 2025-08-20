# Let's read the attached HTML file and examine its structure
try:
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    print("HTML File Length:", len(html_content))
    print("\nFirst 2000 characters:")
    print(html_content[:2000])
    print("\n" + "="*50)
    print("Last 1000 characters:")
    print(html_content[-1000:])
    
except Exception as e:
    print(f"Error reading file: {e}")