🛠️ User Management CRUD App with Node.js, Express, MongoDB, EJS & Tailwind CSS

This is a complete full-stack user management application that allows you to Create, Read, Update, and Delete users. It uses Node.js, Express.js, MongoDB (Mongoose), EJS for templating, and Tailwind CSS for styling.

---

## 🚀 Features

- 🔘 Add New Users
- 📄 Display All Users
- ✏️ Edit User Information
- ❌ Delete a User
- 🖼️ Image Upload via URL (Profile Picture)

---

## 📦 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB + Mongoose
- Templating Engine: EJS
- Styling: Tailwind CSS CDN
- Views: HTML Forms (EJS Templates)

---

## 📁 Folder Structure
---

## ⚙️ Setup Instructions

### 1. Clone the Repository


git clone https://github.com/suzen1/CRUD-Project
cd CRUD-Project

### 2. Install Dependencies
npm install


### 3. Start MongoDB

Make sure MongoDB is running locally. Default DB is:

mongodb://localhost:27017/CrudApp


You can change the name inside `model/user.js`.

### 4. Start the Server


node index.js


Server will run at:
👉 http://localhost:3000

---

## 🔗 Routes & Views

| Method | Route         | Description          |
| ------ | ------------- | -------------------- |
| GET    | `/`           | Home page with links |
| GET    | `/create`     | Render user form     |
| POST   | `/create`     | Create a new user    |
| GET    | `/read`       | View all users       |
| GET    | `/Edit/:id`   | Edit user by ID      |
| POST   | `/update/:id` | Update user info     |
| GET    | `/delete/:id` | Delete user by ID    |

---

## 📸 Screenshots

---

## 👨‍💻 Author

Made with ❤️ by **Sayyed Suzen Ali**
🔗 [GitHub](https://github.com/suzen1) • [LinkedIn](https://linkedin.com/in/suzen-frontend-developer)

---

## 📌 License

This project is open-source and free to use.


