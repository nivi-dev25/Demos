import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { templatesData } from '../data';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
  position: relative;
  overflow-x: hidden;
`;

const GridBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0, 255, 170, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 170, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
`;

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #00ffaa;
`;

const Logo = styled.h2`
  color: #00ffaa;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BackButton = styled(Link)`
  background: linear-gradient(135deg, #00ffaa, #00cc88);
  color: #000;
  padding: 0.6rem 1.8rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  transition: all 0.3s;
  box-shadow: 0 0 20px rgba(0, 255, 170, 0.3);

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 170, 0.6);
    transform: translateY(-2px);
  }
`;

const Hero = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 1000px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: #00ffaa;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(0, 255, 170, 0.5);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #00ffaa;
  font-family: 'Courier New', monospace;
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: rgba(0, 255, 170, 0.1);
  border: 2px solid #00ffaa;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
`;

const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  background: #00ffaa;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  box-shadow: 0 0 10px #00ffaa;
`;

const MetricsSection = styled.div`
  background: rgba(0, 20, 15, 0.8);
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MetricCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  padding: 2.5rem;
  border: 2px solid #00ffaa;
  border-radius: 5px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00ffaa, transparent);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

const MetricLabel = styled.div`
  font-size: 1.1rem;
  color: #00ffaa;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  font-family: 'Courier New', monospace;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #00ffaa;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(0, 255, 170, 0.3);
`;

const SystemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const SystemCard = styled(motion.div)`
  background: rgba(0, 20, 15, 0.6);
  padding: 3rem;
  border: 2px solid #00ffaa;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 170, 0.1), transparent);
    animation: ${rotate} 3s linear infinite;
  }
`;

const SystemName = styled.h3`
  font-size: 1.8rem;
  color: #00ffaa;
  margin-bottom: 1.5rem;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
`;

const SystemDescription = styled.p`
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.div`
  border-top: 1px solid rgba(0, 255, 170, 0.3);
  padding-top: 1.5rem;
`;

const FeatureItem = styled.div`
  color: #00ffaa;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  font-family: 'Courier New', monospace;

  &::before {
    content: '>';
    position: absolute;
    left: 0;
    color: #00ffaa;
    font-weight: 700;
  }
`;

const TechSection = styled.div`
  background: rgba(0, 0, 0, 0.9);
  padding: 5rem 2rem;
  position: relative;
  z-index: 1;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 3rem auto;
`;

const TechItem = styled.div`
  background: rgba(0, 255, 170, 0.1);
  padding: 1.5rem;
  border: 1px solid #00ffaa;
  border-radius: 5px;
  text-align: center;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 255, 170, 0.2);
    box-shadow: 0 0 20px rgba(0, 255, 170, 0.3);
  }
`;

const ContactSection = styled.div`
  background: rgba(0, 20, 15, 0.8);
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  font-size: 1.3rem;
  color: #00ffaa;
  font-family: 'Courier New', monospace;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

function Template10() {
  const data = templatesData.template10;
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <GridBackground />
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← BACK</BackButton>
      </Nav>
      
      <Hero
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <HeroTitle
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {data.company}
          </HeroTitle>
          <HeroTagline
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {data.tagline}
          </HeroTagline>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: '1.2rem', color: '#ccc' }}
          >
            {data.description}
          </motion.p>
          <StatusIndicator>
            <StatusDot />
            <span>SYSTEM STATUS: {isOnline ? 'ONLINE' : 'SYNCING'}</span>
          </StatusIndicator>
        </HeroContent>
      </Hero>

      <MetricsSection>
        <SectionTitle>Performance Metrics</SectionTitle>
        <MetricsGrid>
          <MetricCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MetricLabel>Efficiency Increase</MetricLabel>
            <MetricValue>{data.metrics.efficiency}</MetricValue>
          </MetricCard>
          <MetricCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <MetricLabel>Quality Accuracy</MetricLabel>
            <MetricValue>{data.metrics.quality}</MetricValue>
          </MetricCard>
          <MetricCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MetricLabel>Downtime Reduction</MetricLabel>
            <MetricValue>{data.metrics.downtime}</MetricValue>
          </MetricCard>
          <MetricCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <MetricLabel>Average ROI</MetricLabel>
            <MetricValue>{data.metrics.roi}</MetricValue>
          </MetricCard>
        </MetricsGrid>
      </MetricsSection>

      <Section>
        <SectionTitle>Integrated Systems</SectionTitle>
        <SystemsGrid>
          {data.systems.map((system, index) => (
            <SystemCard
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <SystemName>{system.name}</SystemName>
              <SystemDescription>{system.description}</SystemDescription>
              <FeaturesList>
                {system.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </SystemCard>
          ))}
        </SystemsGrid>
      </Section>

      <TechSection>
        <SectionTitle>Technologies</SectionTitle>
        <TechGrid>
          {data.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechGrid>
      </TechSection>

      <ContactSection>
        <SectionTitle>Connect</SectionTitle>
        <ContactInfo>
          <div>{data.contact.phone}</div>
          <div>{data.contact.email}</div>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
}

export default Template10;
