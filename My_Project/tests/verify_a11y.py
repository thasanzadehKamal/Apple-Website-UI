from playwright.sync_api import sync_playwright
import os

def test_navigation_accessibility():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Test paths
        base_path = f"file://{os.getcwd()}/My_Project"
        pages = [
            f"{base_path}/HomePage/HomePage.html",
            f"{base_path}/Apple_Store/Store.html",
            f"{base_path}/Apple_Iphone/Iphone.html",
            f"{base_path}/Apple_Support/Support.html",
            f"{base_path}/Apple_TV/appletv.html"
        ]

        for url in pages:
            print(f"Testing {url}...")
            page.goto(url)

            # Check ARIA labels in mainNav
            nav = page.locator("#mainNav")

            # Apple Home Link
            apple_home = nav.get_by_role("link", name="Apple Home", exact=True)
            assert apple_home.is_visible(), f"Apple Home link missing ARIA label on {url}"
            assert apple_home.locator("i").get_attribute("aria-hidden") == "true"

            # Search Link
            search_link = nav.get_by_role("link", name="Search", exact=True)
            assert search_link.is_visible(), f"Search link missing ARIA label on {url}"
            assert search_link.locator("i").get_attribute("aria-hidden") == "true"

            # Shopping Bag Link
            bag_link = nav.get_by_role("link", name="Shopping Bag", exact=True)
            assert bag_link.is_visible(), f"Shopping Bag link missing ARIA label on {url}"
            assert bag_link.locator("i").get_attribute("aria-hidden") == "true"

            # TV & Home Link consistency
            tv_link = nav.get_by_role("link", name="TV & Home", exact=True)
            assert "appletv.html" in tv_link.get_attribute("href"), f"TV & Home link incorrect on {url}"
            print(f"Passed {url}")

        browser.close()

if __name__ == "__main__":
    test_navigation_accessibility()
    print("All tests passed!")
