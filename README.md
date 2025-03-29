# MERN Todo App

A full-stack Todo App built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) featuring authentication, task completion tracking, and a countdown timer.

## Features
- **User Authentication:** Secure signup, login, and logout with JWT-based authentication.
- **Task Management:** Add, edit, delete, and mark tasks as complete.
- **Countdown Timer:** Tracks time left to complete a task within 24 hours.
- **Persistent Storage:** Tasks and user data stored in MongoDB.

## Tech Stack
- **Frontend:** React.js with React Hook Form & Context API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT & Cookies

## Screenshots of App
![Screenshot (53)](https://github.com/user-attachments/assets/a88a3124-073c-4811-8a65-925d4aefe964)
![Screenshot (54)](https://github.com/user-attachments/assets/0934db9f-c451-4d58-b31d-eb39bca64dee)
![Screenshot (55)](https://github.com/user-attachments/assets/25fa4854-e0c0-40c3-81f6-7f0aeb47e754)


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git](https://github.com/kshitijbhusal/Todo_App_MERN)
  
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Set up environment variables (`.env` in backend):
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Run the backend server:
   ```sh
   cd backend && npx nodemon index.js
   ```
5. Run the frontend:
   ```sh
   cd frontend && npm run dev
   ```

## Usage
1. Sign up or log in.
2. Create tasks and track their completion.



