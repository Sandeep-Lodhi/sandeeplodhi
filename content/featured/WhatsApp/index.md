---
date: '94'
title: 'WhatsApp Automation Platform'
cover: 'whatsapp-automation.png'
github: ''
external: 'http://whatsapp.atiyaherbs.com'
tech:
  - Node.js
  - Express.js
  - Socket.IO
  - MongoDB Atlas
  - React 19
  - Exotel WhatsApp API
  - Cloudinary
  - PM2
  - Cloudways
showInProjects: true
---

Real-time shared WhatsApp Business inbox for support agents, built on the Exotel WhatsApp API.
Incoming webhooks are stored in MongoDB and pushed to agents over Socket.IO, with delivery-status tracking and unread badges.
Replies are routed automatically from the same business number the customer wrote to, with retry and exponential backoff on sends.
