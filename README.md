# cloud_images
# 📁 Cloud Image Upload API

An Express.js-based RESTful API for uploading, serving, and managing images/files using Sequelize (PostgreSQL), Multer, and login middleware validation. Testable with Postman!

---

## 🚀 Features

- ✅ File/Image uploads with Multer
- ✅ User authentication validation middleware
- ✅ Static file serving from `uploads/`
- ✅ Sequelize ORM for database interaction
- ✅ API testing with Postman
- ✅ Environment variable support via `.env`

---

## 🧱 Tech Stack

- **Node.js** + **Express.js**
- **Sequelize** + **PostgreSQL**
- **Multer** (for file uploads)
- **CORS**, **dotenv**, **fs**, **path**
- Tested with **Postman**

---

## 📁 Project Structure

# 📁 Cloud Image Upload API

An Express.js-based RESTful API for uploading, serving, and managing images/files using Sequelize (PostgreSQL), Multer, and login middleware validation. Testable with Postman!

---

## 🚀 Features

- ✅ File/Image uploads with Multer
- ✅ User authentication validation middleware
- ✅ Static file serving from `uploads/`
- ✅ Sequelize ORM for database interaction
- ✅ API testing with Postman
- ✅ Environment variable support via `.env`

---

## 🧱 Tech Stack

- **Node.js** + **Express.js**
- **Sequelize** + **PostgreSQL**
- **Multer** (for file uploads)
- **CORS**, **dotenv**, **fs**, **path**
- Tested with **Postman**

---

## 📁 Project Structure

cloud-image/ │
├── models/ # Sequelize models ├── migrations/ # Sequelize migrations ├── seeders/ # Sequelize seeders ├── src/ │ ├── config/ # Cloudinary & other config files │ ├── constants/ # Constant values │ ├── controller/ # Logic handlers │ ├── middalware/ # Auth, file validation, image resizing │ ├── router/ # Express routers │ ├── service/ # File/image services │ ├── utils/ # Utility functions │ ├── uploads/ # Static uploaded files ├── .env # Environment variables (excluded from git) ├── .gitignore # Ignored files ├── index.js # Main server file └── README.md # You’re reading it!



---

## ⚙️ Getting Started

### 1️⃣ Clone & Install

```bash
git clone https://github.com/hrishikesh1997/cloud_images.git
cd cloud_images
npm install

2️⃣ Environment Setup
Create a .env file in the root:
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_PORT=5432
PORT=4040

3️⃣ Run the Server
node index.js
Server runs at: http://localhost:4040


🧪 API Testing (Postman)

Method | Route | Description
GET | / | Welcome route
POST | /login | User login
POST | /files/upload | Upload file/image
GET | /src/uploads/ | Serve static uploads


📤 File Upload (Multer)
Endpoint: POST /files/upload

Body Type: form-data

Key: file

Value: (Select a file/image)



🛠 Sequelize Usage
Run migrations or sync models as needed:

bash

npx sequelize-cli db:migrate
You can enable syncing in index.js:

js

sequelize.sync({ force: false });


🔐 Login Endpoint
Route: POST /login

You should pass credentials (like email/password) in the request body. The actual validation logic is inside:

bash
Copy
Edit
src/middalware/validator/authcontrol.js


🧑‍💻 Author
Hrishikesh
GitHub: hrishikesh1997 - https://github.com/hrishikesh1997




