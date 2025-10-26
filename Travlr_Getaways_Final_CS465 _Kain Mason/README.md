# Travlr Getaways — CS 465 Final Submission

This package contains the completed MEAN stack project for **Travlr Getaways**.

## Structure
- **server/** — Express + Handlebars customer-facing site and REST API (MongoDB via Mongoose)
- **app_admin/** — Angular Admin SPA (routes, services, guards)
- **docs/** — Software Design Document (SDD), seed data, Postman tests

## Prerequisites
- Node.js LTS
- MongoDB Community Edition (local)
- Angular CLI (for SPA)

## Environment
Create a `.env` file in `server/` based on `.env.example`:

```
MONGO_URL=mongodb://127.0.0.1:27017/travlr
JWT_SECRET=change-me
PORT=3000
CORS_ORIGIN=http://localhost:4200
```

## Install & Run
### Server (Express)
```
cd server
npm install
npm run seed   # optional, if script provided
npm start
```

### Admin SPA (Angular)
```
cd app_admin
npm install
ng serve --open
```

## API Smoke Tests (cURL)
```
# List trips
curl http://localhost:3000/api/trips

# Get by code
curl http://localhost:3000/api/trips/B0101

# Login (replace credentials)
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"admin@example.com","password":"pass"}'
```

## What to Submit
- This ZIP
- Ensure screenshots are pasted into the SDD (docs/Travlr_Software_Design_Document_CS465.docx)