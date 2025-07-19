
**# CareerGrid

- CareerGrid is a MERN stack application that allows users to register, log in, and create a public resume/profile. The platform is designed to help jobseekers showcase their portfolios and for recruiters to browse potential candidates.


## ✅ Features

- User Authentication (Register, Login, Logout)
- Create or Update Resume
- Get Own Resume
- Delete Resume
- Auth Middleware (JWT & Cookie-based auth)
- MongoDB Models for User and Resume 


## 🛠️ Tech Stack

- **Frontend:** React (Coming Soon)
- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT, Cookies

## 📡 API Routes

### 🔐 Auth Routes (`/api`)
- `POST /register` - Register a new user
- `POST /login` - Log in user
- `POST /logout` - Log out user

### 📄 Resume Routes (`/api/user`)
- `POST /resume` - Create or Update Resume
- `GET /resume/me` - Get logged-in user's resume
- `DELETE /resume` - Delete logged-in user's resume
