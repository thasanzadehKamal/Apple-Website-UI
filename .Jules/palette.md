# Palette's UX Journal

## 2025-05-14 - Navbar Accessibility in Apple UI Recreation
**Learning:** In static recreations of complex UIs, accessibility features like ARIA labels for icon-only navigation and decorative icon hiding are often overlooked, significantly impacting screen reader usability.
**Action:** Always verify that icon-only links have descriptive `aria-label` attributes and that the icons themselves are marked with `aria-hidden="true"` to avoid redundant announcements.
