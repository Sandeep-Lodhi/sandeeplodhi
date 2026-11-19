---
date: '93'
title: 'QMS Call Audit'
cover: 'qms.png'
github: ''
external: ''
tech:
  - Node.js
  - Express 5
  - PostgreSQL
  - SQL Server
  - Redis
  - React 19
  - TanStack Query
  - IIS
showInProjects: true
---

Call-quality audit tool: enter one call ID and get the full audit sheet, with both legs of a transferred call reconstructed and the recording playable in the page.
Built a range-aware audio streaming proxy over the dialer's recording APIs.
Cut the main lookup from about 92 seconds to roughly 300 ms by bypassing a slow SQL Server view and adding indexes.
