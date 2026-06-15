# Palette's UX Journal

## 2024-05-24 - Navigation Structure Pattern
**Learning:** The global navigation menu follows a non-standard semantic pattern where `<a>` tags are children of the `<ul>`, omitting `<li>` elements. This structure is consistent across all sections and should be preserved to maintain existing CSS layout behavior.
**Action:** When modifying navigation, apply attributes directly to the `<a>` tags and avoid introducing `<li>` tags that might break the flex/gap layout.

## 2024-05-24 - Missing Focus Indicators
**Learning:** The project relies on default browser focus indicators, which are often inconsistent or invisible against the dark/vibrant backgrounds used in the Apple UI 2023 recreation.
**Action:** Implement a standardized, high-contrast focus indicator (`outline: 2px solid #0070c9`) across all interactive elements to ensure WCAG 2.1 compliance for keyboard navigation.
