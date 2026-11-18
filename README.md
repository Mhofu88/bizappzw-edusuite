# BizApp ZW EduSuite — Starter 1.0 DEMO

A neutral-brand, static, installable Progressive Web App prototype. No real school data. This is **not** a production-ready school management system.

## Preview / deploy
1. Unzip and upload the contents to the root of a GitHub Pages repository (suggested name: `bizappzw-edusuite`).
2. In GitHub repository Settings → Pages, select Deploy from a branch, `main`, `/ (root)` and save.
3. Open the published HTTPS address. Install from the browser when supported.
4. You can also preview with `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Demonstrated
- Neutral EduSuite branding and responsive public homepage.
- Announcements (editable only in the same browser using localStorage).
- Sample academic timetable and homework.
- Sample aggregate academic averages.
- Fee schedule information, **no payment processing**.
- Offline caching for the demo after first load.

## Not yet implemented
- Secure Principal/Administrator login, database, tenant isolation, audit logs.
- Actual teacher/bursar accounts or private academic records.
- Live WhatsApp payment declarations or payment gateway.
- Multi-school configuration and subscriptions.
- Secure administrative APIs.

## Proposed production architecture
- Frontend: mobile-first PWA.
- API: Node.js, server-side input validation and authentication.
- Database: PostgreSQL with tenant-scoped records, row-level security where appropriate, and tested access-control checks.
- Data: backups, retention/deletion policies, encryption in transit, audit logs.
- Security: role-based authorization enforced on every backend route, never solely in frontend.
- Privacy: guardian/student protections and institution-specific data processing agreements.

## Important
Never enter personal, student, payment or confidential school data in this prototype. Local demo content is editable by anyone using that browser. Deployment to GitHub Pages publishes a **public demo**, not a protected admin system.
