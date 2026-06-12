## 2025-06-12 - Accessible Icon-Only Links in Replicated Headers
**Learning:** In a static site with manually replicated headers, icon-only navigation links (Apple logo, Search, Bag) often lack ARIA labels, making them inaccessible to screen readers. Standardizing these labels across all instances is crucial for a consistent UX.
**Action:** Use a parent `aria-label` on the `<a>` tag and `aria-hidden="true"` on the nested `<i>` icon. Replicate this pattern across all section HTML files (HomePage, Store, etc.) since the project lacks a centralized header template.

## 2025-06-12 - Standardized Focus States for Navigation
**Learning:** Keyboard navigation was difficult due to the absence of clear focus indicators. Providing a consistent focus state using `:focus-visible` ensures that users navigating with a keyboard have a clear visual cue without affecting mouse users.
**Action:** Implement `outline: 2px solid #0070c9; outline-offset: 4px; border-radius: 2px;` on `.pages ul a:focus-visible` across all page-specific CSS files to maintain brand consistency and accessibility.
