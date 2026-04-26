# Portfolio

![Portfolio Preview](./public/preview.png)

Personal portfolio website with clean, modern design and detailed project showcase.

## 🚀 Features

- **Modern UI/UX**: Built with **Next.js 16** and **Tailwind CSS 4** for a premium look and feel.
- **Interactive Animations**: Smooth page transitions, scroll animations, and hover effects using Framer Motion.
- **Responsive Design**: Pixel-perfect layout that works seamlessly on all devices (desktop, tablet, mobile).
- **Project Showcase**: Detailed case studies with images, descriptions, and technologies used.
- **Blog Section**: Easy-to-read blog posts with Markdown support.
- **SEO Optimized**: Built with best practices for search engine optimization.
- **Developer Focused**: Clean code, clear documentation, and built with developers in mind.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React
- **Linting**: ESLint
- **Code Formatting**: Prettier

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Project Structure

```
portfolio/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable UI components
├── public/             # Static assets
├── styles/             # Global styles and Tailwind config
├── utils/              # Utility functions
└── content/            # Blog posts and project data
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for any environment-specific variables:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚀 Deployment

You can deploy this portfolio to various platforms including:

- Vercel (recommended)
- Netlify
- AWS Amplify
- GitHub Pages (with some configuration)

### Vercel Deployment

1. Push your code to GitHub
2. Import the project on [vercel.com](https://vercel.com/)
3. Configure build settings (defaults usually work)
4. Deploy!

## 📝 Adding Projects

To add a new project, create a new Markdown file in the `content/projects/` directory:

```markdown
---
title: "My Awesome Project"
date: "2024-01-15"
coverImage: "/images/project-cover.jpg"
technologies:
  - Next.js
  - Tailwind CSS
  - Framer Motion
description: "A brief description of the project."
url: "https://example.com"
github: "https://github.com/username/repo"
tags:
  - web-development
  - design
---

# Project Title

Full project description goes here...
```

## 📝 Adding Blog Posts

To add a new blog post, create a new Markdown file in the `content/blog/` directory:

```markdown
---
title: "My Blog Post"
date: "2024-01-10"
coverImage: "/images/blog-cover.jpg"
description: "A short summary of the blog post."
tags:
  - tech
  - tutorial
---

# Blog Post Title

Full blog post content goes here...
```

## 🎨 Customization

### Colors

Modify the color palette in `styles/globals.css`:

```css
:root {
  --primary-color: #0070f3;
  --background-color: #f8fafc;
  /* ... */
}
```

### Fonts

Change fonts in `tailwind.config.js`:

```js
 font
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- [Your Name]
- [Your Email]
- [LinkedIn](https://linkedin.com/in/yourusername)
- [Twitter](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Hosting and deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.