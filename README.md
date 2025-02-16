## 💸 Expense Tracker Web App
A Smart and Secure Web App to Track Your Expenses & Manage Budget Efficiently

## 🚀 Project Overview
The Expense Tracker Web App is a full-stack web application designed to help users manage and track their expenses efficiently. It allows users to set a monthly budget, log expenses, categorize spending, and visualize spending trends through a real-time progress bar. The app also features OTP-based authentication for secure login.

## 📌 Features
✔️ User Authentication (Register/Login with OTP-based authentication via Email or SMS using Twilio)
✔️ Expense Management (Add, Edit, and Delete Expenses)
✔️ Date-wise Expense Filtering
✔️ Monthly Budget Setup (Set & Update Monthly Budget)
✔️ Real-time Budget Progress Bar (Displays total spent vs. budget)
✔️ Responsive Admin Dashboard (Manage expenses efficiently)
✔️ Secure API Handling with Spring Boot Backend
✔️ Interactive UI with Bootstrap & React.js
✔️ PostgreSQL Database for secure and scalable data storage

## 🏗 Project Structure
📂 Expense-Tracker-Web-App
├── 📁 backend (Spring Boot - Expense API, Authentication, Database Management)
├── 📁 frontend (React.js - User Interface, Expense Visualization, Authentication UI)
├── 📁 database (PostgreSQL - Storing user expenses, budget data, and authentication info)
├── 📂 components (Navbar, Budget Progress, AddExpense, ExpenseList, etc.)
├── 📂 services (Handles API calls, authentication, and database communication)
├── 📂 utils (Utility functions, validations, and configurations)
├── 📄 package.json (Frontend dependencies and scripts)
├── 📄 pom.xml (Backend dependencies and configurations)
├── 📄 README.md (This documentation)

## 📦 Modules & Descriptions
1️⃣ User Authentication Module
🔹 Users can register, login, and verify OTP using Twilio (Email/SMS).
🔹 Secure user authentication using JWT (JSON Web Tokens).

2️⃣ Expense Management Module
🔹 Users can add, edit, and delete expenses.
🔹 Expenses are stored securely in PostgreSQL.

3️⃣ Budget Management Module
🔹 Users can set a monthly budget to manage spending.
🔹 The budget is displayed on the progress bar to track spending.

4️⃣ Date-wise Filtering Module
🔹 Expenses can be filtered based on date.
🔹 Users can view their spending trends easily.

5️⃣ Admin Dashboard Module
🔹 A React-based dashboard for users to manage expenses.
🔹 Displays real-time budget progress.

## 🛠 Technologies Used
Frontend:
✅ React.js
✅ Bootstrap 5
✅ Axios (for API calls)

Backend:
✅ Spring Boot (Java)
✅ Spring Security (for authentication)
✅ Spring Data JPA (for database interactions)

Database:
✅ PostgreSQL

Tools & Platforms:
✅ Visual Studio Code (VS Code)
✅ Postman (API Testing)
✅ IntelliJ IDEA / Eclipse (Java Backend Development)
✅ Git & GitHub (Version Control)
✅ Apache Tomcat (For local database testing)

## 🔄 Process Logic & Workflow
📌 User logs in/registers → OTP verification via Twilio → Authenticated user gets a JWT Token.
📌 User sets a monthly budget → Budget is stored in PostgreSQL.
📌 User adds expenses → Expenses are categorized and saved in PostgreSQL.
📌 The budget progress bar updates dynamically based on spending.
📌 User views total expenses & filters expenses based on date.

## 💻 Setup & Installation
# 1️⃣ Clone the Repository
```
git clone https://github.com/Omkar-Abhang/Expense-Tracker-Web-App.git
```
```
cd Expense-Tracker-Web-App
```
# 2️⃣ Backend Setup (Spring Boot)
```
cd backend
```
```
mvn clean install
```
```
mvn spring-boot:run
```
Ensure PostgreSQL is running, and update application.properties with your database credentials.

# 3️⃣ Frontend Setup (React.js)
```
cd frontend
```
```
npm install
```
```
npm start
```

# 4️⃣ API Testing (Postman)

Import backend/src/main/resources/api-collection.json into Postman to test APIs.

# 🚀 Future Enhancements
🔹 Expense Reports & Graphical Analysis (Charts & Graphs for better visualization)
🔹 Multi-user support with role-based access (Admin/User roles)
🔹 Recurring Expense Reminders & Notifications
🔹 Dark Mode Theme for better UI experience

# 👨‍💻 Contributing
🔹 Fork the repository & create a new branch.
🔹 Make changes & submit a pull request.
🔹 Your contributions are always welcome!

# 📄 License
This project is licensed under the MIT License – feel free to modify and use it!

# 📬 Contact

📧 Email: omkarabhang36@gmail.com
🔗 LinkedIn: Omkar Abhang
🐙 GitHub: Omkar-Abhang

# 🚀 Happy Coding & Expense Tracking! 🚀











