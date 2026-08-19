# Sarnendu Das — Dark Editorial Portfolio Website 🚀

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![IIT Patna](https://img.shields.io/badge/IIT%20Patna-B.Sc%20CS-FF2B2B?style=for-the-badge)

Official personal portfolio website of **Sarnendu Das** — Dual-Degree Computer Science Undergraduate at **Indian Institute of Technology Patna (IIT Patna)** & **Dr. B.C. Roy Engineering College (BCREC)**. Designed with a high-contrast **Dark Editorial** aesthetic (`#0B0B0D` background, `#FF2B2B` electric red accents), smooth font animations, an interactive terminal, custom mouse cursor physics, and full mobile-first responsiveness.

---

## ✨ Features

### 🎨 1. Dark Editorial Aesthetic
* Inspired by high-end Pinterest editorial web designs ([pin.it/7vGUdMwV5](https://pin.it/7vGUdMwV5)).
* Deep obsidian theme (`#0B0B0D`), glassmorphic panels, ambient particle background, and subtle red glow highlights.

### 📐 2. Straight, Level & Level Layout
* Clean, non-skewed hero framing, skill cards, project cards, and timeline nodes without intrusive 3D tilt.
* Stable, crisp layout alignment across viewports.

### 🔤 3. Global Animated Font System
* **Universal Scroll Reveal**: Every single text element (`h1`-`h6`, `p`, `span`, `a`, `label`, `button`, `li`, `.count-up`) fades and slides smoothly into view.
* **Kinetic Typography Shimmers**: Headings and nav links feature color shimmers, expanded letter-spacing (`letter-spacing: 0.14em`), and glowing text shadows on hover.
* **Dynamic Typewriter**: Hero headline dynamically types and cycles through key career roles.
* **Count-Up Stat Metrics**: Easing count-up numbers for academic CGPA (`8.7`), hackathon wins, and production projects.

### 🖱️ 4. Custom Interactive Mouse Cursor
* Custom dual-element cursor (inner dot `#cursor-dot` + trailing outer ring `#cursor-ring`) driven by linear interpolation physics (`lerp`).
* Expands into a glowing red focus ring when hovering over links, buttons, project cards, tech pills, or social icons.
* Automatically disabled on mobile touch devices (`@media (pointer: coarse)`) to ensure native touch interaction.

### 🖥️ 5. Embedded Live Terminal Emulator
* Fully interactive terminal window allowing visitors to run commands:
  * `bio`: View detailed academic & career summary
  * `skills`: List technical competencies
  * `projects`: Display production software apps
  * `education`: View double degree credentials
  * `contact`: Direct contact links
  * `clear`: Reset console output

### 📄 6. Integrated Resume PDF Modal
* Interactive glass modal embedding the official PDF resume document.
* Includes direct **Download PDF** and **Open in New Tab** capabilities.

### 📱 7. Mobile-First Responsiveness
* Custom hamburger navigation menu drawer for screens `< 768px`.
* Section headings wrap cleanly without horizontal overflow.
* Touch-friendly card padding and zero horizontal scrolling across viewports (375px to 4K).

---

## 🛠️ Tech Stack & Architecture

* **Core Structure**: HTML5 Semantic Markup
* **Styling System**: Vanilla CSS3 (Custom Tokens, Flexbox, Grid, Keyframes)
* **Logic & Animation**: Vanilla JavaScript ES6+ (IntersectionObserver, Canvas API, Lerp Cursor)
* **Fonts**: `Syne` (Headings), `Plus Jakarta Sans` (Body), `JetBrains Mono` (Terminal & Tags)
* **Icons**: FontAwesome 6

---

## 📁 Repository Structure

```text
portfolio-website/
├── assets/
│   ├── sarnendu.jpg             # Hero portrait image
│   └── Resume_SARNENDU DAS.pdf  # Downloadable Resume PDF
├── index.html                   # Main single-page application structure
├── styles.css                   # Comprehensive CSS design system & responsive queries
├── script.js                    # Particles, scroll observer, typewriter & terminal engine
└── README.md                    # Documentation & project summary
```

---

## 🚀 Local Development Setup

To run the portfolio website locally:

### Option 1: Simple HTTP Server (Node.js)
```bash
# Serve current directory on http://localhost:8080
npx serve . -p 8080
```

### Option 2: Python HTTP Server
```bash
# Python 3
python -m http.server 8080
```

Open your browser and navigate to `http://localhost:8080`.

---

## 👤 Author & Contact

**Sarnendu Das**  
* 🎓 B.Tech CSE (AI & ML) — Dr. B.C. Roy Engineering College (2024–Present)
* 🎓 B.Sc Computer Science & Data Analytics — IIT Patna (2024–Present)
* 📧 Email: [sarnendudas923@gmail.com](mailto:sarnendudas923@gmail.com)
* 🐙 GitHub: [@blackpython34](https://github.com/blackpython34)
* 📍 Location: Bankura / Durgapur, West Bengal, India

---

© 2026 Sarnendu Das. All Rights Reserved.
