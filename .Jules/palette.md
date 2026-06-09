## 2025-05-14 - Global Navigation Accessibility and Consistency
**Learning:** Icon-only navigation elements without `aria-label` are inaccessible to screen readers. Inconsistent relative paths in a replicated navigation bar across multiple files lead to broken links.
**Action:** Always add `aria-label` to icon-only links, `aria-hidden="true"` to the icons themselves, and verify relative pathing across all instances of the navigation bar.
