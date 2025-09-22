# 🚀 Sam Watts - Portfolio Website

> A modern, responsive portfolio website showcasing my journey as a Computer Science student at the University of Dundee.

[![Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=for-the-badge&logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06b6d4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with beautiful animations and hover effects
- **🌙 Dark/Light Mode**: Seamless theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices  
- **⚡ Fast Performance**: Built with Astro for lightning-fast static site generation
- **📝 Technical Blog**: Share insights and document my learning journey
- **🎯 Project Showcase**: Highlighting my best work including Guitar2MIDI, ZomBoard, and more
- **♿ Accessible**: Following web accessibility best practices
- **🔍 SEO Optimized**: Proper meta tags, structured data, and semantic HTML

## 🏗️ About This Site

This portfolio represents my growth as a developer and showcases:

- **Projects**: From Spotify-integrated social apps to MIDI guitar converters
- **Skills**: Full-stack development, game design, AI/ML, and more  
- **Blog**: Technical insights and learning experiences
- **Journey**: My path through Computer Science at University of Dundee

### 🎸 Current Focus
Working on **Guitar2MIDI** - Converting guitar input to MIDI output for music production.

## 🏗️ Project Structure

```text
/
├── public/
│   ├── favicon.svg          # Site favicon
│   └── SamWattsCV.pdf       # Resume/CV
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro     # Navigation header
│   │   ├── Footer.astro     # Site footer  
│   │   ├── ThemeToggle.astro # Dark/light mode toggle
│   │   └── BlogPost.astro   # Blog post cards
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Main site layout
│   │   └── MarkdownPostLayout.astro # Blog post layout
│   ├── pages/
│   │   ├── index.astro      # Homepage with hero section
│   │   ├── about.astro      # About me & skills
│   │   ├── projects.astro   # Project showcase
│   │   ├── blog.astro       # Technical blog
│   │   ├── 404.astro        # Custom error page
│   │   ├── posts/           # Blog post markdown files
│   │   └── tags/            # Blog tag pages
│   ├── scripts/
│   │   └── menu.js          # Mobile menu functionality
│   └── styles/
│       └── global.css       # Global styles & animations
├── tailwind.config.mjs      # Tailwind CSS configuration
└── astro.config.mjs         # Astro configuration
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with component islands
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework  
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Deployment**: Static hosting (Netlify/Vercel ready)
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful prose styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SamWatt5/my-site.git
   cd my-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `localhost:4321`            |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally before deploying          |
| `npm run astro ...`       | Run Astro CLI commands                          |
| `npm run astro check`     | Check for TypeScript and accessibility issues   |

## 🎨 Design Features

### Theme System
- **Automatic**: Respects system dark/light preference
- **Manual Toggle**: User can override with theme switcher
- **Consistent**: All components support both themes seamlessly

### Animations & Interactions
- **Smooth Transitions**: 300ms duration for consistency
- **Hover Effects**: Interactive feedback on all clickable elements
- **Loading States**: Fade-in animations for content sections
- **Responsive Design**: Fluid layouts across all device sizes

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant color schemes
- **Focus Management**: Clear focus indicators

## 🚀 Deployment

This site is designed to deploy easily to static hosting platforms:

### Netlify
```bash
npm run build
# Deploy ./dist/ folder
```

### Vercel
```bash
npm run build  
# Deploy ./dist/ folder
```

### GitHub Pages
Configure GitHub Actions to build and deploy automatically.

## 📝 Content Management

### Adding Blog Posts
1. Create new `.md` file in `src/pages/posts/`
2. Add frontmatter with title, date, description, tags
3. Write content in Markdown
4. Blog automatically updates with new post

### Updating Projects
Edit the projects array in `src/pages/projects.astro` with:
- Project name and description  
- Technologies used
- GitHub links and live demos
- Current status

## 📞 Connect

- **Portfolio**: [Live Site](https://your-domain.com) 
- **Email**: sam.watts005@gmail.com
- **GitHub**: [@SamWatt5](https://github.com/SamWatt5)
- **University**: Computer Science @ University of Dundee

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Sam Watts | Computer Science Student | Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿
