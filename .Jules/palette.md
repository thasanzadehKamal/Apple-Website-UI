## 2025-01-24 - Improving Icon Accessibility and Semantics

**Learning:** This application uses many icon-only links and decorative icons from FontAwesome. Without proper ARIA labels, icon-only links are inaccessible to screen readers, and decorative icons can create noise if not hidden.

**Action:** Always add `aria-label` to links that only contain an icon. Add `aria-hidden="true"` to icons within those links and to any other decorative icons that don't convey unique information to ensure they are ignored by assistive technologies.
