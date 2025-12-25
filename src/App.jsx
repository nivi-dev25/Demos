import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';
import Template6 from './templates/Template6';
import Template7 from './templates/Template7';
import Template8 from './templates/Template8';
import Template9 from './templates/Template9';
import Template10 from './templates/Template10';

const DemoContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(26, 26, 46, 0.95), rgba(22, 33, 62, 0.95)), 
              url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop') center/cover fixed;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  color: white;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #f1f1f1;
  opacity: 0.8;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TemplateCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3498db;
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

const TemplateNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 1rem;
`;

const TemplateName = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const TemplateDescription = styled.p`
  color: #f1f1f1;
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TemplateFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const FeatureTag = styled.span`
  background: rgba(52, 152, 219, 0.2);
  color: #3498db;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const templates = [
  {
    number: "01",
    name: "Simple Industrial",
    description: "Clean and professional layout for manufacturing companies",
    features: ["Basic Layout", "Contact Forms", "Services"],
    component: Template1
  },
  {
    number: "02",
    name: "Steel Materials",
    description: "Product showcase template for material suppliers",
    features: ["Product Grid", "Certifications", "Materials"],
    component: Template2
  },
  {
    number: "03",
    name: "CNC Machinery",
    description: "Technology-focused template with smooth animations",
    features: ["Framer Motion", "Capabilities", "Industries"],
    component: Template3
  },
  {
    number: "04",
    name: "Rubber Products",
    description: "Service-oriented design for rubber manufacturers",
    features: ["Services Grid", "Materials List", "Custom Styling"],
    component: Template4
  },
  {
    number: "05",
    name: "Manufacturing",
    description: "Dynamic hero animations with statistics showcase",
    features: ["Animated Hero", "Stats Counter", "Solutions"],
    component: Template5
  },
  {
    number: "06",
    name: "Advanced Industrial",
    description: "GSAP-powered scrolling animations and parallax effects",
    features: ["GSAP Animations", "Parallax", "Smart Tech"],
    component: Template6
  },
  {
    number: "07",
    name: "3D Showcase",
    description: "Interactive 3D product viewer using Three.js",
    features: ["Three.js", "3D Models", "Interactive"],
    component: Template7
  },
  {
    number: "08",
    name: "Modern Metal Works",
    description: "Split-screen modern design with portfolio showcase",
    features: ["Split Screen", "Portfolio", "Awards"],
    component: Template8
  },
  {
    number: "09",
    name: "Premium Engineering",
    description: "Luxury high-end design for premium clients",
    features: ["Luxury Design", "Premium Feel", "Bespoke"],
    component: Template9
  },
  {
    number: "10",
    name: "Interactive Factory",
    description: "Advanced interactive animations with real-time data",
    features: ["Advanced Animations", "Interactive", "Real-time"],
    component: Template10
  }
];

function DemoSelector() {
  return (
    <DemoContainer>
      <Header>
        <Title>Industrial Demo Templates</Title>
        <Subtitle>10 Unique Templates for Manufacturing & Industrial Businesses</Subtitle>
      </Header>
      <TemplateGrid>
        {templates.map((template, index) => (
          <Link key={index} to={`/template${index + 1}`} style={{ textDecoration: 'none' }}>
            <TemplateCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TemplateNumber>{template.number}</TemplateNumber>
              <TemplateName>{template.name}</TemplateName>
              <TemplateDescription>{template.description}</TemplateDescription>
              <TemplateFeatures>
                {template.features.map((feature, idx) => (
                  <FeatureTag key={idx}>{feature}</FeatureTag>
                ))}
              </TemplateFeatures>
            </TemplateCard>
          </Link>
        ))}
      </TemplateGrid>
    </DemoContainer>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DemoSelector />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
        <Route path="/template4" element={<Template4 />} />
        <Route path="/template5" element={<Template5 />} />
        <Route path="/template6" element={<Template6 />} />
        <Route path="/template7" element={<Template7 />} />
        <Route path="/template8" element={<Template8 />} />
        <Route path="/template9" element={<Template9 />} />
        <Route path="/template10" element={<Template10 />} />
      </Routes>
    </Router>
  );
}

export default App;
