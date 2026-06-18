import os
from playwright.sync_api import sync_playwright

def test_ux_improvements():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        base_path = f"file://{os.getcwd()}/My_Project"
        pages = [
            "/HomePage/HomePage.html",
            "/Apple_Store/Store.html",
            "/Apple_Iphone/Iphone.html",
            "/Apple_Support/Support.html",
            "/Apple_TV/appletv.html",
            "/Apple_Appstore/appstore.html"
        ]

        for p_path in pages:
            url = base_path + p_path
            print(f"Checking {url}")
            page.goto(url)

            # Check ARIA labels in Nav
            apple_home = page.locator('#mainNav a[aria-label="Apple Home"]')
            search = page.locator('#mainNav a[aria-label="Search"]')
            bag = page.locator('#mainNav a[aria-label="Shopping Bag"]')

            assert apple_home.count() > 0, f"Apple Home aria-label missing on {p_path}"
            assert search.count() > 0, f"Search aria-label missing on {p_path}"
            assert bag.count() > 0, f"Shopping Bag aria-label missing on {p_path}"

            # Check TV & Home link
            tv_home_link = page.get_by_role("link", name="TV & Home", exact=True).first
            href = tv_home_link.get_attribute("href")
            assert "Apple_TV/appletv.html" in href, f"TV & Home link incorrect on {p_path}: {href}"

            # Check aria-hidden on icons
            assert page.locator('#mainNav a[aria-label="Apple Home"] i[aria-hidden="true"]').count() > 0

        print("All UX checks passed!")
        browser.close()

if __name__ == "__main__":
    test_ux_improvements()
