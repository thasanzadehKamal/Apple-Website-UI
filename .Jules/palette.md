## 2025-05-14 - [Global Navigation Accessibility Consistency]
**Learning:** In a project with decentralized static files, accessibility enhancements (like ARIA labels and focus states) must be manually replicated, which increases the risk of inconsistency. A multi-page verification script is the only reliable way to ensure a uniform experience.
**Action:** Always use a scoped Playwright locator (e.g., `#mainNav`) to verify global elements across all pages and ensure consistent attribute application.
