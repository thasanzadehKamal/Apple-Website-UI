## 2024-05-13 - [Navigation Accessibility and Consistency]
**Learning:** Manual replication of global navigation across multiple HTML files requires synchronized updates to ARIA labels and links to avoid accessibility regressions and broken user journeys.
**Action:** Use a verification script (e.g., Playwright or custom grep-based tool) to ensure consistency of navigation attributes across all localized section files.

## 2024-05-13 - [Character Encoding Artifacts]
**Learning:** Static HTML projects can contain corrupted character artifacts (e.g., `В©`, `В·`, `В°`) due to encoding mismatches, which detracts from visual polish.
**Action:** Proactively search for and clean encoding artifacts using UTF-8 counterparts (©, ·, °) during the audit phase.
