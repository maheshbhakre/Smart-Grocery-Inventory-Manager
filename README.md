# 🛒 Smart Grocery Inventory Manager

![Next.js](https://img.shields.io/badge/Next.js-Frontend-black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-API-lightgrey)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-darkblue)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 📌 Overview

Smart Grocery Inventory Manager is a full-stack inventory management application designed to help users efficiently manage grocery items, monitor stock levels, and organize household inventory.

The system provides secure authentication, inventory tracking, and item management through a modern web interface.

---

# 🎯 Key Features

* 👤 User Registration & Login
* 🔐 JWT Authentication
* 📦 Grocery Inventory Management
* ➕ Add New Grocery Items
* 📊 Inventory Dashboard
* 🗄 PostgreSQL Database Integration
* ⚡ REST API Architecture
* 📱 Responsive User Interface

---

# 📊 Application Screenshots

## Home Page

![Home Page](images/homepage.png)

## Registration Page

![Registration](images/register.png)

## Login Page

![Login](images/login.png)

## Dashboard

![Dashboard](images/dashboard.png)

---

# 🛠 Problem Statement

Managing grocery items manually often leads to:

* ❌ Forgotten inventory items
* ❌ Overstocking products
* ❌ Running out of essential groceries
* ❌ Difficulty tracking stock levels
* ❌ Poor inventory organization

---

# ✅ Solution

This system provides:

* Centralized inventory management
* Secure user authentication
* Easy grocery item tracking
* Stock monitoring
* Organized inventory dashboard
* Fast and efficient data management

---

# 🏭 Industry Relevance

| Industry             | Application        |
| -------------------- | ------------------ |
| Retail Stores        | Inventory Tracking |
| Grocery Shops        | Stock Management   |
| Warehouses           | Product Monitoring |
| E-Commerce           | Inventory Control  |
| Household Management | Grocery Planning   |

---

# 📈 Benefits

* 📦 Better Inventory Management
* ⚡ Faster Product Tracking
* 🔒 Secure User Access
* 📉 Reduced Inventory Loss
* 📊 Improved Organization
* 🚀 Better User Experience

---

# ⚙ Tech Stack

## Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL

## ORM

* Prisma ORM

## Authentication

* JWT (JSON Web Token)
* bcryptjs

---

# 🏗 System Architecture

User → Next.js Frontend → Express API → Prisma ORM → PostgreSQL Database

---

# 📁 Project Structure

```text
Smart-Grocery-Inventory-Manager/

├── apps/
│   ├── api/
│   │   ├── prisma/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   └── server.js
│   │   ├── package.json
│   │   └── .env
│
│   └── web/
│       ├── app/
│       │   ├── dashboard/
│       │   ├── login/
│       │   ├── register/
│       │   └── page.tsx
│       ├── public/
│       └── package.json
│
├── images/
│   ├── homepage.png
│   ├── register.png
│   ├── login.png
│   └── dashboard.png
│
├── docs/
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Smart-Grocery-Inventory-Manager.git

cd Smart-Grocery-Inventory-Manager
```

## Backend Setup

```bash
cd apps/api

npm install
```

## Configure Environment Variables

Create `.env`

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/grocery_inventory

JWT_SECRET=your_secret_key

PORT=5000
```

## Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd apps/web

npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

# 🔐 Authentication Flow

* User Registration
* Password Hashing using bcryptjs
* JWT Token Generation
* Protected Routes
* Secure API Access

---

# 📡 API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Grocery Management

### Add Grocery Item

```http
POST /api/grocery
```

### Get All Grocery Items

```http
GET /api/grocery
```

---

# 🧪 Testing

The application has been tested for:

* User Registration
* User Login
* JWT Authentication
* Grocery Item Creation
* Database Connectivity
* Protected Route Access

---

# 🚀 Future Enhancements

* Barcode Scanner Integration
* Inventory Analytics Dashboard
* Expiry Date Notifications
* Low Stock Alerts
* Multi-User Support
* Mobile Application
* Cloud Deployment
* Export Reports

---

# 👨‍💻 Author

## Mahesh Bhakre

---

# 🌐 Connect With Me

GitHub:
https://github.com/maheshbhakre

LinkedIn:
https://www.linkedin.com/in/maheshbhakreds1242

Portfolio:
https://saimfsd.github.io/mahesh-portfolio/

---

# ⭐ Note

This project demonstrates a complete full-stack inventory management system using modern web technologies including Next.js, Node.js, PostgreSQL, Prisma ORM, and JWT Authentication.

The application follows industry-standard architecture and showcases full-stack development, database management, authentication, REST API development, and frontend integration.
