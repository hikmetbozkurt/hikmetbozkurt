# Hikmet Bozkurt Aydoğan - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing my skills, projects, and experience as a Junior Software Engineer.

## 🚀 Features

- **Modern Design**: Dark theme with cyan accents and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**: 
  - Hero section with animated hexagonal profile placeholder
  - About section with personal information and statistics
  - Skills section with animated progress bars
  - Projects section with detailed project cards
  - Contact section with working contact form
- **Smooth Navigation**: Fixed header with smooth scrolling to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Font Awesome Icons**: Professional icons throughout the site
- **SEO Optimized**: Meta tags and Open Graph tags for better search visibility

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, CSS3
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Create React App
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   ├── Hero.tsx & Hero.css
│   ├── About.tsx & About.css
│   ├── Skills.tsx & Skills.css
│   ├── Projects.tsx & Projects.css
│   └── Contact.tsx & Contact.css
├── App.tsx
├── App.css
└── index.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hikmetbozkurt/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name, title, and description
   - Social media links
   - Contact information

2. **About Section** (`src/components/About.tsx`):
   - Personal story and journey
   - Statistics (years of experience, projects, etc.)

3. **Skills Section** (`src/components/Skills.tsx`):
   - Skill categories and proficiency levels
   - Certifications

4. **Projects Section** (`src/components/Projects.tsx`):
   - Project details, technologies, and features
   - GitHub links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Social media links

### Styling

The website uses a consistent color scheme:
- Primary: `#00d4ff` (Cyan)
- Secondary: `#0099cc` (Darker Cyan)
- Background: `#1a1a1a` and `#2d2d2d` (Dark grays)
- Text: `#ffffff` (White) and `#b0b0b0` (Light gray)

### Adding Your Photo

Replace the profile placeholder in the Hero section:
1. Add your photo to the `public` folder
2. Update the `src` attribute in `Hero.tsx` to point to your image
3. Remove the placeholder div and use an `<img>` tag instead

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: Below 480px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The built files in the `build` folder can be deployed to any static hosting service like:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Hikmet Bozkurt Aydoğan**
- Email: hkmtbzkrt06@gmail.com
- GitHub: [github.com/hikmetbozkurt](https://github.com/hikmetbozkurt)
- LinkedIn: [linkedin.com/in/hikmetbozkurt](https://linkedin.com/in/hikmetbozkurt)

---

Made with ❤️ by Hikmet Bozkurt Aydoğan
