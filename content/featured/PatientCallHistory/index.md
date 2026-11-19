---
date: '90'
title: 'Patient Call History'
cover: 'patient-call-history.png'
github: ''
external: ''
tech:
  - Node.js
  - Express 5
  - PostgreSQL
  - SQL Server
  - SQLite
  - Redis
  - React 19
  - IIS
showInProjects: true
---

Lookup tool for call-center agents: search a phone number or patient ID and see 30 days of call history across all of that patient's numbers.
Served through a three-tier cache (in-memory LRU, Redis, SQLite) in front of PostgreSQL, with a 15-minute incremental sync.
Brought lookups down from about two minutes to milliseconds.
