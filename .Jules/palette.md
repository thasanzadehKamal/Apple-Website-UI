## 2024-05-15 - Global Navigation Consistency and Accessibility
**Learning:** In a static site with manually replicated global components (like the Apple-style header), accessibility improvements (ARIA labels, hidden decorative icons) and navigation fixes (relative paths) must be consistently applied across all section-specific HTML files.
**Action:** Use scoped locators in Playwright to verify these attributes across all site sections and ensure relative links (e.g., "TV & Home") are correctly resolved from each directory level.
