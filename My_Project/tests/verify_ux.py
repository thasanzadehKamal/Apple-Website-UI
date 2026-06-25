import os
import re

def check_file(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Check for character artifacts
    artifacts = ['В·', 'В©', 'В°']
    for art in artifacts:
        if art in content:
            errors.append(f"Found artifact '{art}'")

    # Check for aria-labels on global nav icons if it has a nav
    if 'id="mainNav"' in content:
        if 'aria-label="Apple Home"' not in content:
            errors.append("Missing aria-label='Apple Home'")
        if 'aria-label="Search"' not in content:
            errors.append("Missing aria-label='Search'")
        if 'aria-label="Shopping Bag"' not in content:
            errors.append("Missing aria-label='Shopping Bag'")

        # Check TV & Home link
        if 'TV & Home' in content:
            if 'appletv.html' not in content:
                errors.append("TV & Home link might be missing or incorrect")

    # Support page specific
    if "Support.html" in filepath:
        if 'aria-label="Search Support"' not in content:
            errors.append("Missing aria-label='Search Support'")
        if 'aria-label="Submit Search"' not in content:
            errors.append("Missing aria-label='Submit Search'")

    return errors

def main():
    files_to_check = [
        "My_Project/HomePage/HomePage.html",
        "My_Project/Apple_Store/Store.html",
        "My_Project/Apple_Iphone/Iphone.html",
        "My_Project/Apple_Support/Support.html",
        "My_Project/Apple_TV/appletv.html",
        "My_Project/Apple_Appstore/appstore.html"
    ]

    all_clear = True
    for fp in files_to_check:
        print(f"Checking {fp}...")
        errors = check_file(fp)
        if errors:
            all_clear = False
            for err in errors:
                print(f"  [ERROR] {err}")
        else:
            print("  [OK]")

    if not all_clear:
        exit(1)
    else:
        print("\nAll checks passed!")

if __name__ == "__main__":
    main()
