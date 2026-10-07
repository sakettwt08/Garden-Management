# 🌳 Garden Management System

A web-based **Garden Complaint Management System** that allows users to report issues related to gardens and helps administrators manage and track those complaints efficiently.

## 📌 About the Project

The Garden Management System is designed to make it easier for citizens/users to report problems they encounter in gardens.

Users can submit complaints regarding issues such as:

- 🗑️ Garbage and cleanliness
- 🌱 Damaged plants or trees
- 💡 Broken garden lights
- 🚰 Water-related issues
- 🪑 Damaged benches or other infrastructure
- 🛝 Damaged playground equipment
- 📷 Complaints with supporting images

The system provides a centralized way to **submit, manage, and track garden-related complaints**.

## ✨ Features

- 👤 User complaint submission
- 📝 Complaint registration
- 📷 Upload images with complaints
- 📍 Garden/complaint information
- 📋 Complaint management
- 🔄 Complaint status tracking
- 🛠️ Backend API for handling complaints
- 💾 Persistent storage of complaint information

## 🏗️ Project Structure

```text
Garden-Management/
│
├── controllers/
│   └── ...
│
├── routes/
│   └── ...
│
├── models/
│   └── ...
│
├── views/
│   └── ...
│
├── ComplaintImages/
│   └── ...
│
├── public/
│   └── ...
│
├── app.js
├── package.json
└── README.md
```

> The exact structure may vary depending on the current version of the project.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sakettwt08/Garden-Management.git
```

### 2. Navigate to the project

```bash
cd Garden-Management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

Or, if the project uses a development script:

```bash
npm run dev
```

## 🔄 How It Works

```text
User
  ↓
Visits Garden Management Website
  ↓
Submits a Complaint
  ↓
Adds Complaint Details
  ↓
Uploads Image (optional)
  ↓
Backend Processes Complaint
  ↓
Complaint Stored in Database
  ↓
Complaint Can Be Managed / Tracked
```

## 🛠️ Technologies

The project is built as a web application using technologies such as:

- **HTML / EJS** – Frontend and templating
- **CSS** – Styling
- **JavaScript** – Application logic
- **Node.js** – Backend runtime
- **Express.js** – Server and API handling
- **Multer** – Image/file uploads
- **Database** – Storage of complaint information

## 📷 Complaint Image Upload

The system supports uploading images along with complaints. Images are handled using **Multer**, allowing the backend to receive and store complaint-related images.

## 🎯 Purpose

The main goal of this project is to provide a simple digital platform for reporting and managing problems in public gardens.

Instead of relying on manual complaint processes, users can submit issues digitally and provide relevant information or images to help with resolution.

## 🔮 Future Improvements

- 📍 GPS-based garden location
- 🔔 Notifications when complaint status changes
- 👨‍💼 Dedicated admin dashboard
- 📊 Complaint analytics and statistics
- 🗺️ Map-based complaint tracking
- 🔐 User authentication and authorization
- 📱 Responsive
