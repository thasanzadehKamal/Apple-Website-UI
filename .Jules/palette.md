## 2023-11-20 - [Accessible Icon-Only Navigation]
**Learning:** Icon-only interactive elements (like Apple's logo, search, and bag icons) must have explicit `aria-label` attributes to be accessible to screen reader users. Additionally, nested icons should be marked with `aria-hidden="true"` to avoid redundant or confusing announcements.
**Action:** Always wrap icons in an `<a>` or `<button>` with a descriptive `aria-label` and hide the decorative icon from the AOM.

## 2023-11-20 - [Global Navigation Consistency in Static Sites]
**Learning:** In a multi-page static site without a shared header component, manual replication of navigation links is prone to "stale" or incorrect paths (e.g., `#` placeholders for existing pages).
**Action:** Audit all navigation instances across HTML files whenever a new section is added or an existing one is moved. Use relative paths carefully.
