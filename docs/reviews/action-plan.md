# Remediation Action Plan

We will address the high-priority navigation and deployment issues incrementally, ensuring each fix is stable before moving on.

- [x] Establish a shared portal navigation helper for the Customer Analytics dashboard and presentation, and update their home entry points to use it.
- [x] Apply the portal navigation helper to the Financial Analytics experiences.
- [ ] Roll the navigation helper out to the remaining dashboards and presentations (Industry Analytics, Supply Chain, etc.).
- [ ] Update the Synthetic Data Generator dashboard `homepage` setting to match the deployed path.
- [ ] Consolidate environment detection logic into a reusable utility within `common/` for future adoption.
- [ ] Audit and correct accessibility roles/attributes in shared components once navigation is standardized.
