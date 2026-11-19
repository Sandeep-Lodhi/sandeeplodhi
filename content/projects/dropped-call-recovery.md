---
date: '2026-10-02'
title: 'Dropped-Call Recovery Automation'
github: ''
external: ''
tech:
  - Node.js
  - Express 5
  - PostgreSQL
  - node-cron
  - Ameyo API
company: 'Atiya'
showInProjects: true
---

Backend job that runs every 30 minutes, finds dropped and abandoned callers in PostgreSQL and pushes them to outbound dialer campaigns for a call-back, with a dry-run flag and a re-entrancy guard.
