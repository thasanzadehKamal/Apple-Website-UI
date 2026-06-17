import os
from playwright.sync_api import sync_playwright

def test_ux():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Test files
        files = [
            "My_Project/HomePage/HomePage.html",
            "My_Project/Apple_Store/Store.html",
            "My_Project/Apple_Support/Support.html",
            "My_Project/Apple_Iphone/Iphone.html",
            "My_Project/Apple_TV/appletv.html"
        ]

        for file in files:
            path = os.path.abspath(file)
            page.goto(f"file://{path}")

            print(f"Verifying {file}...")

            # Check ARIA labels in navigation
            # Use scoped locator for mainNav
            main_nav = page.locator("#mainNav")

            apple_home = main_nav.get_by_role("link", name="Apple Home", exact=True)
            search = main_nav.get_by_role("link", name="Search", exact=True)
            shopping_bag = main_nav.get_by_role("link", name="Shopping Bag", exact=True)

            assert apple_home.count() == 1, f"Apple Home link missing ARIA label in {file}"
            assert search.count() == 1, f"Search link missing ARIA label in {file}"
            assert shopping_bag.count() == 1, f"Shopping Bag link missing ARIA label in {file}"

            # Check Shopping Bag link href
            expected_href = "../Apple_Store/Store.html"
            actual_href = shopping_bag.get_attribute("href")
            assert actual_href == expected_href, f"Shopping Bag href mismatch in {file}: expected {expected_href}, got {actual_href}"

            print(f"✓ {file} navigation accessibility and consistency verified.")

        browser.close()

if __name__ == "__main__":
    test_ux()
