# Ayeen Uddin Showrav - Personal Portfolio Website

A modern, responsive, and feature-rich personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-Personal-green)

## ✨ Features

- 🎨 **Modern & Minimalist Design** - Clean, professional UI with teal accent colors
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast & Optimized** - Built with Next.js 14 for optimal performance
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- 🔄 **Smooth Animations** - Engaging scroll animations and transitions
- 📧 **Contact Form** - Integrated contact form with validation
- 📥 **Biodata Download** - One-click PDF download functionality
- 🔗 **Social Integration** - Links to LinkedIn, GitHub, Facebook, Twitter, Instagram
- 🎓 **Comprehensive Sections** - About, Education, Work, Skills, Projects, Certifications, Blog, Testimonials, Contact

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Setup & Customization

### Step 1: Update Personal Information

Edit the files in the `data/` directory:

- `data/personal.ts` - Personal info, contact, family, hobbies
- `data/education.ts` - Educational background
- `data/work.ts` - Work experience and responsibilities
- `data/skills.ts` - Technical and soft skills
- `data/projects.ts` - Portfolio projects
- `data/certifications.ts` - Professional certifications
- `data/blog.ts` - Blog posts (optional)
- `data/testimonials.ts` - Client/colleague testimonials

### Step 2: Add Your Images

Add these files to the `public/` directory:

- `profile-photo.jpg` - Your profile picture (recommended: 800x800px)
- `biodata.pdf` - Your biodata PDF file
- `project-images/` - Project screenshots
- `certifications/` - Certification images
- `blog/` - Blog post images
- `testimonials/` - Testimonial author photos

### Step 3: Customize Colors (Optional)

Edit `tailwind.config.ts` to change the primary color scheme.

### Step 4: Configure Contact Form (Optional)

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create `.env.local` and add your credentials
3. Update `components/Contact.tsx` with EmailJS integration

For detailed instructions, see [SETUP.md](SETUP.md) and [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md).

## 📁 Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Education.tsx      # Education
│   ├── Work.tsx           # Work experience
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Portfolio
│   ├── Certifications.tsx # Certifications
│   ├── Blog.tsx           # Blog posts
│   ├── Testimonials.tsx   # Testimonials
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── data/                  # Data files (edit these!)
├── public/                # Static assets (add your images!)
└── ...config files
```

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: CSS Transitions & Intersection Observer API
- **Form Handling**: React Hook Form (ready to integrate)
- **Deployment**: Vercel/Netlify ready

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - Complete setup instructions
- **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** - How to customize everything
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Project overview and features

## 🎯 Website Sections

1. **Header** - Sticky navigation with smooth scrolling
2. **Hero** - Introduction with profile photo and CTAs
3. **About** - Personal information and background
4. **Education** - Academic qualifications
5. **Work** - Professional experience
6. **Skills** - Technical and soft skills
7. **Projects** - Portfolio showcase
8. **Certifications** - Professional certifications
9. **Blog** - Blog posts and articles
10. **Testimonials** - Reviews and recommendations
11. **Contact** - Contact form and information
12. **Footer** - Links and copyright

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 📞 Support & Contact

**Ayeen Uddin Showrav**
- 📧 Email: ayeen.nir@gmail.com
- 📱 Phone: 01608802615
- 🌐 Website: ayeenuddinshowrav.xyz
- 💼 LinkedIn: [ayeenuddinshowrav](https://linkedin.com/in/ayeenuddinshowrav)
- 👨‍💻 GitHub: [ayeenuddinshowrav](https://github.com/ayeenuddinshowrav)

## 📄 License

This project is for personal use. Feel free to customize it for your own portfolio!

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal performance and user experience.

---

**Made with ❤️ by Ayeen Uddin Showrav**

