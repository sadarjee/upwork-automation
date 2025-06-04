# Upwork Dashboard Platform

This project implements a production-ready Upwork dashboard. It contains a Node.js/Express backend with MongoDB storage and a React frontend. Background services monitor the Upwork job feed, generate AI proposals and record conversion metrics.

## Setup

1. Install dependencies:
   ```sh
   cd server && npm install
   cd ../client && npm install
   ```
2. Copy `.env.example` in the server folder to `.env` and fill in the values.
3. Start the server:
   ```sh
   npm run start
   ```
4. Open `client/public/index.html` in a browser to view the frontend.

The codebase now includes database models, WebSocket support, and example background workers. It is ready for deployment after adding the required API credentials.
