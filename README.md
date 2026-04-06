# Finance Data Processing and Access Control Backend

## 📌 Overview

This project is a backend system designed for managing financial data with role-based access control.
It allows different users to interact with financial records based on their roles and provides summary insights for a dashboard.

---

## 🚀 Features

### 👤 User Management

* Create users
* Assign roles: **Admin, Analyst, Viewer**
* Manage user status (active/inactive)

### 💰 Financial Records

* Add financial records (income/expense)
* View all records
* Basic filtering capability

### 📊 Dashboard Summary

* Total Income
* Total Expense
* Net Balance
* Recent financial activity

### 🔐 Access Control

* Role-based restrictions implemented using middleware
* Viewer → Read-only access
* Analyst → Read + Dashboard access
* Admin → Full access (create/update/delete)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* In-memory data storage (for simplicity)

---

## ⚙️ Setup Instructions

1. Clone or download the project
2. Open terminal in project folder
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start server:

   ```bash
   node server.js
   ```

Server will run at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 👤 Users

* **POST /users** → Create user
* **GET /users** → Get all users

### 💰 Records

* **POST /records** → Add record (Admin only)
* **GET /records** → Get all records

### 📊 Dashboard

* **GET /dashboard** → Get summary data

---

## 🔑 Access Control Usage

Authentication is simplified using headers.

Example:

```
role: admin
```

Roles:

* `admin` → Full access
* `analyst` → Read + dashboard
* `viewer` → Read-only

---

## ⚠️ Validation & Error Handling

* Basic input validation implemented
* Proper HTTP status codes used (200, 400, 403)
* Unauthorized actions return "Access Denied"

---

## 🧠 Assumptions

* Authentication is mocked using request headers
* Data is stored in memory (no database used)
* Focus is on backend logic and structure

---

## ✨ Future Improvements

* JWT Authentication
* Database integration (MongoDB/MySQL)
* Pagination and filtering
* API documentation (Swagger)
* Unit testing

---

## 👩‍💻 Author

Kameswari Sreevalli

---
