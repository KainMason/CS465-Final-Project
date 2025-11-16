🚀 Travlr Getaways – MEAN Stack Travel Booking Application
Full-Stack Project | CS-465 Full Stack Development I | Enhanced for CS-499 Capstone

Travlr Getaways is a full-stack travel booking application built using the MEAN stack (MongoDB, Express, Angular, Node.js) with a Handelbars-based customer-facing site and a separate Angular admin portal.
This project demonstrates real-world full-stack design, multi-interface architecture, secure routing, and maintainable backend structure.

This version includes Milestone Two enhancements for the CS-499 Capstone.

📁 Project Structure
travlr-getaways/
│
├── app_server/           # Customer-facing Express + Handlebars site
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── views/
│
├── app_api/              # Backend API (Node.js, Express, MongoDB)
│   ├── controllers/
│   ├── models/
│   └── routes/
│
├── app_admin/            # Angular Admin SPA (trip management)
│   ├── src/
│   └── angular.json
│
├── config/               # Environment, database config
├── public/               # Static assets
├── README.md
└── server.js

✨ CS-499 Enhancements (Milestone Two)

These enhancements improve maintainability, readability, and real-world viability.

🔧 Backend Refactoring

Separated controllers and routes for cleaner organization

Removed duplicated logic

Improved naming conventions

Updated folder structure to better reflect MVC patterns

🛠 Improved Error Handling

Added structured JSON error models

Standardized HTTP status codes (400, 404, 500)

Removed overly permissive routing behavior

🗄 Database Query Updates

Cleaned and standardized MongoDB query patterns

Removed unused queries

Improved consistency in data validation

📝 Documentation Overhaul

Added full setup instructions

Added architecture explanations

Added clearer project purpose

Updated comments across backend code

🎨 Front-End Layout Touchups

Improved consistency in customer-facing pages

Cleaned spacing and formatting

Fixed minor template rendering issues

🧰 Tech Stack
Frontend

Angular (Admin UI)

Handlebars (Customer UI)

HTML5, CSS3, JavaScript

Backend

Node.js + Express

MongoDB + Mongoose

REST API routing with controllers

Tools

VS Code

Postman

MongoDB Compass

Angular CLI

🚀 Installation & Setup
1. Clone the repository
git clone https://github.com/KainMason/CS465-Final-Project.git
cd CS465-Final-Project

2. Install backend dependencies
npm install

3. Install Angular admin dependencies
cd app_admin
npm install
cd ..

4. Start MongoDB

If running locally:

mongod


Or connect to your Atlas cluster by updating:

/config/db.js

5. Start the servers

Backend / customer-facing site

npm start


Admin Angular SPA

cd app_admin
ng serve --open

🔑 Default URLs
Component	URL
Customer UI (Handlebars)	http://localhost:3000

REST API	http://localhost:3000/api

Admin Angular App	http://localhost:4200
🧪 Testing (Optional)

Basic test structure included for Node routes.
You can run tests with:

npm test

🎯 Learning Reflections (CS-499 Milestone Two)

During enhancement, I focused on:

improving backend architecture

strengthening error handling

making documentation clearer and more professional

ensuring the code better reflects industry standards

reviewing security concerns around routes and data flow

These updates bring the project closer to real-world readability and maintainability, and make it something I’m confident showcasing to employers.

👤 Author

Kain Mason
Software & Data Engineer
GitHub: https://github.com/KainMason
