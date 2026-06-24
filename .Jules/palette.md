## 2025-01-24 - [Accessibility & Character Polish]
**Learning:** Manual replication of global navigation across multiple HTML files requires synchronized accessibility updates. Additionally, corrupted characters like 'В©' often appear due to encoding mismatches in legacy or static templates, which significantly degrades visual trust.
**Action:** When updating a global component (like the nav bar), use `grep` or `find` to identify all instances and apply ARIA labels/hidden attributes consistently. Always check for and clean up character encoding artifacts during accessibility reviews.
