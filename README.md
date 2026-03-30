# BizVora — Full Stack Website

A modern, professional full-stack business website built with:
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)

---

## 📁 Project Structure

```
bizvora/
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── backend/
    ├── models/
    │   └── Contact.js
    ├── controllers/
    │   └── contactController.js
    ├── routes/
    │   └── contactRoutes.js
    ├── server.js
    ├── .env
    └── package.json
```

---

## ⚙️ Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally) OR a [MongoDB Atlas](https://cloud.mongodb.com/) free cluster
- [VS Code](https://code.visualstudio.com/)

---

## 🚀 Setup Instructions

### Step 1 — Open the project in VS Code

Open the `bizvora/` folder in VS Code.

Open **two terminals** side by side (Terminal → New Terminal, then split).

---

### Step 2 — Setup the Backend

In **Terminal 1**:

```bash
cd backend
npm install
```

Edit the `.env` file to set your MongoDB URI:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bizvora
```

> 💡 If using MongoDB Atlas, replace with your connection string:
> `MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/bizvora`

Start the backend:

```bash
npm run dev
```

You should see:
```
MongoDB connected
Server running on port 5000
```

---

### Step 3 — Setup the Frontend

In **Terminal 2**:

```bash
cd frontend
npm install
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms
  ➜  Local:   http://localhost:5173/
```

---

### Step 4 — Open in Browser

Visit: **http://localhost:5173**

---

## 🔌 API Reference

### POST `/api/contact`

Save a contact form submission to MongoDB.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you."
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Message received! We will get back to you soon.",
  "data": { ... }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "All fields are required."
}
```

---

## 🌐 Pages

| Route       | Page     | Description                              |
|-------------|----------|------------------------------------------|
| `/`         | Home     | Hero, stats, features, CTA               |
| `/services` | Services | 6 service cards with tags                |
| `/about`    | About    | Mission, vision, story, values, team     |
| `/contact`  | Contact  | Form with validation + MongoDB save      |

---

## 🎨 Brand Colors

| Color        | Hex       |
|--------------|-----------|
| Brand Green  | `#7CFC00` |
| Dark BG      | `#0a0a0a` |
| Card BG      | `#141414` |
| Section BG   | `#1a1a1a` |
| Text         | `#f5f5f5` |
| Muted Text   | `#6b7280` |

---

## ✅ Features

- [x] Responsive mobile + desktop layout
- [x] Sticky navbar with scroll effect
- [x] Animated hero section
- [x] Services grid with hover effects
- [x] About page with company story & team
- [x] Contact form with client-side + server-side validation
- [x] MongoDB data persistence
- [x] Success/error feedback on form submission
- [x] Social media icons (Facebook, Instagram, LinkedIn, WhatsApp)
- [x] Custom scrollbar + noise texture overlay
- [x] Tailwind CSS utility classes throughout
