## 2023-05-24 - Navigation and Search Accessibility
**Learning:** Icon-only interactive elements in this repository (like the Apple logo, search magnifying glass, and shopping bag) were missing descriptive labels, making them inaccessible to screen reader users.
**Action:** Always add `aria-label` to parent `<a>` or `<button>` tags for icon-only elements and `aria-hidden="true"` to the nested icons across all page instances to maintain consistency and accessibility.
