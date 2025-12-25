# Industrial Demo Templates

A comprehensive collection of 10 unique, fully-functional React templates designed for manufacturing, industrial, and mechanical companies. Each template features modern design, smooth animations, and easy customization through a centralized data configuration system.

![Demo Selector](https://github.com/user-attachments/assets/7e3e5a31-941a-48d7-855d-e5763cec75ba)

## 🌟 Features

- **10 Distinct Templates** - From simple layouts to advanced 3D visualizations
- **Easy Customization** - Update content by modifying `src/data.js`
- **Modern Tech Stack** - React, Vite, Framer Motion, GSAP, Three.js, Styled Components
- **Responsive Design** - All templates work across devices
- **Tile-Based Navigation** - Interactive demo selector page
- **Production Ready** - Optimized and ready to deploy

## 📋 Templates Overview

### Template 1: Simple Industrial
- Clean and professional layout
- Perfect for manufacturing companies
- Features: Services grid, contact forms, basic animations
- **Best for:** Traditional manufacturing businesses

![Template 1](https://github.com/user-attachments/assets/a1d4f7a0-ad18-40f4-b88c-027b88eff411)

### Template 2: Steel Materials
- Product showcase template
- Material supplier focused design
- Features: Product grid, certifications display, materials list
- **Best for:** Steel, metal, and raw material suppliers

### Template 3: CNC Machinery
- Technology-focused design with Framer Motion animations
- Features: Animated capabilities cards, industry tags
- **Best for:** CNC machining and precision manufacturing

### Template 4: Rubber Products
- Service-oriented layout
- Features: Services grid with tags, materials showcase
- **Best for:** Rubber manufacturers and elastomer suppliers

### Template 5: Manufacturing
- Dynamic hero with animated statistics counter
- Features: Stats cards, solutions grid, animated hero
- **Best for:** Full-service manufacturing companies

### Template 6: Advanced Industrial
- GSAP-powered scrolling animations and parallax effects
- Features: Scroll-triggered animations, technology showcase
- **Best for:** Tech-forward industrial companies

### Template 7: 3D Showcase
- Interactive 3D product viewer using Three.js
- Features: 3D canvas, product selector, orbital controls
- **Best for:** Companies wanting to showcase products in 3D

![Template 7](https://github.com/user-attachments/assets/d37190d2-59d7-4ceb-8281-a995286a7e91)

### Template 8: Modern Metal Works
- Split-screen modern design
- Features: Portfolio showcase, awards section, specialty display
- **Best for:** Metal fabrication and artistic metalwork

### Template 9: Premium Engineering
- Luxury high-end design with elegant typography
- Features: Premium services, clientele showcase, philosophy section
- **Best for:** High-end engineering and bespoke manufacturing

![Template 9](https://github.com/user-attachments/assets/609179cf-35c2-4b8b-9770-8be7301756b1)

### Template 10: Interactive Factory
- Futuristic design with grid background and animated elements
- Features: Performance metrics, integrated systems, real-time status
- **Best for:** Smart factories and Industry 4.0 solutions

![Template 10](https://github.com/user-attachments/assets/e423948d-b698-47e4-9a24-4ca2c8f1db37)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/nivi-dev25/Demos.git
cd Demos

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization Guide

### Easy Content Updates

All template content is centralized in `src/data.js`. To customize any template:

1. Open `src/data.js`
2. Find the template you want to customize (e.g., `template1`, `template2`, etc.)
3. Update the content fields:
   - Company name
   - Tagline
   - Description
   - Services/Products
   - Contact information
   - Any other template-specific data

**Example:**

```javascript
export const templatesData = {
  template1: {
    company: "Your Company Name",
    tagline: "Your Custom Tagline",
    description: "Your company description",
    services: [
      { title: "Service 1", description: "Description" },
      // Add more services
    ],
    contact: {
      phone: "Your Phone",
      email: "your@email.com",
      address: "Your Address"
    }
  },
  // ... other templates
};
```

### Colors and Styling

Colors are defined in `src/data.js` under `sharedAssets.colors`. You can modify these to match your brand:

```javascript
export const sharedAssets = {
  colors: {
    primary: "#1a1a2e",
    secondary: "#16213e",
    accent: "#0f3460",
    highlight: "#e94560",
    // ... more colors
  }
};
```

## 🛠️ Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation between templates
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Advanced animations (Templates 3, 5, 8, 9)
- **GSAP** - Scroll-triggered animations (Template 6)
- **Three.js & React Three Fiber** - 3D graphics (Template 7)
- **@react-three/drei** - Three.js helpers

## 📁 Project Structure

```
Demos/
├── src/
│   ├── templates/         # All 10 template components
│   │   ├── Template1.jsx
│   │   ├── Template2.jsx
│   │   └── ... (Template3-10)
│   ├── data.js           # Centralized content configuration
│   ├── App.jsx           # Main app with routing and demo selector
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🎯 Target Industries

These templates are specifically designed for:

- **Mechanical Manufacturing** - CNC machining, metal fabrication
- **Raw Materials** - Steel, rubber, plastics suppliers
- **Industrial Equipment** - Machinery manufacturers
- **Engineering Services** - Design and consultation firms
- **Smart Manufacturing** - Industry 4.0 and automation

## 🌐 Deployment

### Deploy to Vercel

```bash
npm run build
# Deploy dist folder to Vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy dist folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 📄 License

This project is available for use. Please check with the repository owner for specific licensing terms.

## 👥 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ for the manufacturing and industrial sector**
