<div align="center">

<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sparkles.svg" width="60" height="60" alt="logo" />

# 🚀 Professional Developer Portfolio

### A high-performance, interactive, and visually stunning personal portfolio

Built with **React 19**, **Vite 8**, **TypeScript 6**, and **Tailwind CSS v4** — engineered for speed, polish, and a memorable first impression.

<br />

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

**[🌐 Live Demo](#)** &nbsp;•&nbsp; **[🐛 Report Bug](#)** &nbsp;•&nbsp; **[✨ Request Feature](#)**

<br />

<img src="https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/vite.svg" width="1" height="1" />

</div>

<br />

<p align="center">
  <img src="https://via.placeholder.com/1200x650/0f172a/06B6D4?text=Portfolio+Preview" alt="Portfolio preview screenshot" width="100%" />
</p>

<p align="center"><i>Replace the image above with a real screenshot or a screen recording GIF of your portfolio in action.</i></p>

---

## 📖 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Key Features

| | |
|---|---|
| ⚡ **Lightning Fast** | Built on **Vite 8** for near-instantaneous HMR and highly optimized production bundles. |
| 🎨 **Modern Aesthetic** | Clean glassmorphism UI, interactive glowing halos, smooth transitions, and ambient lighting powered by **Tailwind CSS v4**. |
| 📱 **Fully Responsive** | Mobile-first engineering designed to render seamlessly across every screen viewport. |
| 💼 **Deep-Dive Case Studies** | Interactive project modals covering architectural problems, engineering solutions, production metrics, and tech-stack pills. |
| 🌐 **Multi-Language Support** | Instant, context-driven language switcher (English & Amharic), extensible to more locales. |
| 🌙 **Dark / Light Mode** | Seamless theme toggling with auto-detected, persisted user preference. |
| 🎯 **Interactive Contact Actions** | One-click copy-to-clipboard for phone and email, with dynamic success-state feedback. |
| ♿ **Accessible by Design** | Semantic markup, keyboard navigation, and sensible focus states throughout. |

---

## 🛠️ Tech Stack

<div align="center">

| Domain | Technology |
| :--- | :--- |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Build Tooling** | [Vite 8](https://vitejs.dev/) |
| **Language** | [TypeScript 6](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) & inline SVGs |
| **Linting** | [Oxlint](https://github.com/oxc-project/oxc) |
| **Deployment** | [Vercel](https://vercel.com/) |

</div>

---

## 📂 Project Structure

```text
.
├── src/
│   ├── assets/            # Static media, user avatars, and imagery
│   ├── components/        # Reusable UI modules (Hero, ProjectModal, etc.)
│   ├── context/           # React Context state (Language & Theme handlers)
│   ├── data/              # Portfolio content, translations, and metrics
│   ├── types/             # TypeScript type definitions and interfaces
│   ├── App.tsx            # Main layout orchestration
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind CSS v4 global directives
├── index.html             # Application HTML shell
├── vite.config.ts         # Vite bundler configuration & alias rules
├── package.json           # Node scripts and dependencies
└── README.md              # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v20+`
- **pnpm** / **npm** / **yarn** (pick your favorite)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-portfolio.git

# 2. Move into the project directory
cd your-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Your app will be running at **`http://localhost:5173`** 🎉

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with hot-module reloading. |
| `npm run build` | Type-checks and builds an optimized production bundle. |
| `npm run preview` | Serves the production build locally for a final check. |
| `npm run lint` | Runs Oxlint across the codebase. |

---

## 🔐 Environment Variables

If your project requires environment variables (e.g. contact form endpoint, analytics ID), create a `.env` file in the root directory:

```env
VITE_CONTACT_FORM_ENDPOINT=your_endpoint_here
VITE_ANALYTICS_ID=your_analytics_id_here
```

> ⚠️ Never commit your `.env` file. It's already excluded via `.gitignore`.

---

## ☁️ Deployment

This project is optimized for **zero-configuration deployment on Vercel**.

1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel auto-detects the Vite configuration — no extra setup required.
4. Click **Deploy** and you're live in seconds. 🚀

<p align="left">
  <a href="https://vercel.com/new">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</p>

---

## 🗺️ Roadmap

- [ ] Add blog / writing section
- [ ] Integrate CMS for dynamic project content
- [ ] Add unit & E2E test coverage
- [ ] Add additional language support
- [ ] Add analytics dashboard

See the [open issues](#) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create. Any contributions are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📬 Contact

<div align="center">

**Your Name** — [your.email@example.com](mailto:your.email@example.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](#)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)

<br />

⭐ **If you found this project interesting, consider giving it a star!** ⭐

</div>
