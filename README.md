# ProNet – (Simple Social Media Website)

ProNet is a simple social media web application inspired by LinkedIn. Users can register, log in, create posts, like, comment, and view posts from all users in a public feed.

This project demonstrates **full-stack development skills** using React, Node.js, Express, and MongoDB.

---

## Live Demo
- **Frontend:** [Your Vercel Link Here](https://pro-net-frontend.vercel.app)  
- **Backend:** [Your Render Link Here](https://pronet-backend-tar5.onrender.com)

---

## GitHub Repositories
- **Frontend:** [pronet-frontend](https://github.com/yourusername/pronet-frontend)  
- **Backend:** [pronet-backend](https://github.com/yourusername/pronet-backend)

---

## Features

### 1. User Authentication
- Register with name, email, and password.
- Login using registered credentials.
- Display logged-in user’s name on the top bar.

### 2. Create Post
- Users can write a post with text content.
- Optional: Add an image with the post.
- Each post shows:
  - Author's name
  - Post content
  - Timestamp

### 3. View All Posts
- Public feed showing posts from all users.
- Latest posts appear first.

### 4. Extra Features
- Like posts.
- Comment on posts.
- Edit or delete own posts.
- Toggle to show/hide comments.
- Responsive and clean UI.

---

## Folder Structure

### Frontend (`pronet-frontend`)
```
pronet-frontend/
├── public/
├── src/
│ ├── api/ # Axios API calls
│ ├── components/ # Reusable React components (PostCard, Loader, etc.)
│ ├── pages/ # Pages (HomePage, LoginPage, RegisterPage)
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── README.md

```

### Backend (`pronet-backend`)
```
pronet-backend/
├── controllers/ # API logic for users and posts
├── models/ # Mongoose models (User, Post)
├── routes/ # Express routes (user.route.js, post.route.js)
├── configs/ # DB connection and allowed origins
├── server.js # Entry point
├── package.json
└── README.md

```

---

## API Routes (Backend)

### Users
| Method | Route                | Description                  |
|--------|---------------------|-----------------------------|
| POST   | /api/users/register  | Register a new user         |
| POST   | /api/users/login     | Login a user                |
| POST   | /api/users/logout    | Logout (optional)           |

### Posts
| Method | Route                         | Description                  |
|--------|-------------------------------|-----------------------------|
| GET    | /api/posts                     | Get all posts               |
| POST   | /api/posts                     | Create a new post           |
| PUT    | /api/posts/:postId             | Edit a post                 |
| DELETE | /api/posts/:postId             | Delete a post               |
| POST   | /api/posts/:postId/comment     | Add a comment to a post     |
| POST   | /api/posts/:postId/like        | Toggle like for a post      |


---

## How to Run Locally

### Backend
1. Clone the backend repo:
```
git clone https://github.com/yourusername/pronet-backend.git
cd pronet-backend
```
3. Install dependencies:
 ```
npm install
```
5. Create a `.env` file:
 ```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```
7. Start server:
```
npm run dev #using nodemon
```


### Frontend
1. Clone the frontend repo:
```
git clone https://github.com/yourusername/pronet-frontend.git
cd pronet-frontend
```
3. Install dependencies:
```
npm install
```
5. Create a `.env` file:
```
VITE_API_URL=https://pronet-backend-tar5.onrender.com/api
```
7. Start frontend:
```
npm run dev
```
9. Visit `http://localhost:5173` in your browser.

---

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Deployment:** Vercel (Frontend) + Render (Backend)

---

## Notes
- Make sure the backend is running before interacting with the frontend.
- Authentication uses JWT stored in localStorage.
- Likes, comments, and posts are dynamically updated using React state.

---

## Author
**Shreeja Vasala** – Full Stack Developer

---







