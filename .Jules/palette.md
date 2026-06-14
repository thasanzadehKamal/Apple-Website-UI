## 2025-05-14 - Global Navigation Accessibility and Focus Indicators

**Learning:** Global navigation elements replicated across multiple static HTML files require consistent accessibility attributes and functional links to ensure a seamless experience for screen reader and keyboard users. Standardized focus indicators significantly improve navigation for keyboard-only users.

**Action:**
1. Always apply `aria-label` to icon-only links (e.g., 'Apple Home', 'Search', 'Shopping Bag').
2. Add `aria-hidden="true"` to decorative or redundant icons within accessible links.
3. Implement a standardized focus indicator: `outline: 2px solid #0070c9; outline-offset: 4px; border-radius: 2px;` to provide clear visual feedback during keyboard navigation.
4. Regularly verify navigation consistency across all section-specific HTML files.
