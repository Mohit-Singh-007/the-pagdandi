# The Pagdandi (User Interface)

**Pagdandi** is a responsive, secure, and theme-consistent user-facing web application built as part of a **final-year client project**. This repository contains only the **UI side** of the application — the **admin dashboard is maintained separately**.

> 🎓 **Project Type:** Final-year client project (BCA)  
> 🎯 **Scope (this repo):** Public-facing UI — home, about, contact, login, signup, blog, poets  
> 🛠️ **Admin panel:** Developed and maintained in a separate repository

---

## ✨ Features (User Side)

- 🎨 Custom theme and UI per client branding
- 🔐 Google OAuth authentication
- 📩 Contact form with full validation
- 📝 Blog system:
  - 📚 Paginated blog listing
  - ✍️ Blogs created by authenticated users
  - 🆕 Latest blogs displayed on the home page
- ✒️ Static Poets section  
  > Currently hardcoded; planned to be dynamic after client provisions VPS hosting and budget approval

---

## 📸 Pages Included in This Repo

- `/` – Home
- `/about` – About Page
- `/contact` – Contact Form
- `/login` – Login Page (Google OAuth)
- `/signup` – Signup Page (Email/Password)
- `/blogs` – Paginated Blogs
- `/poets` – Static Poets Section

---

## 🔧 Tech Stack

| Layer        | Technology                                   |
|--------------|----------------------------------------------|
| Framework    | Next.js (App Router)                         |
| Styling      | Tailwind CSS                                 |
| Language     | TypeScript                                   |
| Forms        | React Hook Form                              |
| Auth         | NextAuth (Beta) – Google & Credentials       |
| UI Feedback  | React Toast Notifications                    |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mohit-Singh-007/the-pagdandi.git
cd the-pagdandi
2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env.local file in the root directory and add the following:
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
✅ Note: This is the UI-only repo — no Prisma or database connection is needed here.

4. Start the Development Server
npm run dev
Your app will be running locally at: http://localhost:3000
