# Real-Time Messenger Application

A full-featured real-time messaging platform built with Next.js 13, demonstrating modern web development practices and real-time communication implementation.

Live Demo: https://messenger-clone-hongjin.vercel.app/

## Tech Stack

### Frontend

- Next.js 13 (App Router)
- TypeScript
- TailwindCSS
- Headless UI
- React Hook Form

### Backend

- Next.js API Routes
- Prisma ORM
- MongoDB
- NextAuth.js
- Pusher

### Cloud Services

- Vercel (Hosting)
- MongoDB Atlas
- Cloudinary (Image Upload)

## Key Features

- 💬 Real-time messaging
- 👥 Group chat support
- 🔐 Authentication (Email, Google, GitHub)
- 📸 Image upload and sharing
- ✅ Message read receipts
- 🟢 Online/offline status
- 👤 User profile customization
- 📱 Responsive design

### Login

Google and Github accounts supported
![My Image](/app/Login.png)

### Individual and Gruop Chat

![My Image](/app/Individual.png)
![My Image](/app/Group.png)

### Profile Editing

![My Image](/app/Profile.png)

## Getting Started

### Prerequisites

- Node.js 16+
- MongoDB Atlas account
- Pusher account
- Cloudinary account

### Environment Setup

Create a `.env` file in the root directory with and replace the credentials with your own.

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
PUSHER_APP_ID=
NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Installation

```bash
npm install
```

### Setup database

```bash
npx prisma generate
npx prisma db push
```

### Run the development server

```bash
npm run dev
```
