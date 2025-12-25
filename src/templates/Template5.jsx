import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: #0a0e27;
  color: white;
`;

const Nav = styled(motion.nav)`
  background: rgba(10, 14, 39, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #4a90e2;
`;

const Logo = styled.h2`
  color: #4a90e2;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: white;
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
  }
`;

const Hero = styled(motion.div)`
  background: linear-gradient(rgba(10, 14, 39, 0.85), rgba(26, 35, 50, 0.85)), 
              url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=600&fit=crop') center/cover;
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #4a90e2, #7fb3e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #7fb3e8;
`;

const StatsSection = styled.div`
  max-width: 1200px;
  margin: -4rem auto 0;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 10;
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a2332 0%, #0f1726 100%);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #4a90e2;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.2);
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #4a90e2;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #7fb3e8;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  color: #4a90e2;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const SolutionCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a2332 0%, #0f1726 100%);
  padding: 3rem;
  border-radius: 20px;
  border: 2px solid transparent;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const SolutionTitle = styled.h3`
  font-size: 1.8rem;
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const SolutionDescription = styled.p`
  color: #b0c4de;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const SolutionFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(74, 144, 226, 0.1);
  border-radius: 10px;
`;

const FeatureLabel = styled.span`
  font-weight: 600;
  color: #7fb3e8;
`;

const FeatureValue = styled.span`
  color: #4a90e2;
  font-weight: 700;
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #1a2332 0%, #0a0e27 100%);
  padding: 5rem 2rem;
  text-align: center;
`;

function Template5() {
  const data = templatesData.template5;
  const [counts, setCounts] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({
        experience: parseInt(data.stats.experience),
        clients: parseInt(data.stats.clients),
        projects: parseInt(data.stats.projects),
        satisfaction: parseInt(data.stats.satisfaction)
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [data.stats]);

  return (
    <Container>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>{data.company}</Logo>
        <BackButton to="/">← Back to Demos</BackButton>
      </Nav>
      
      <Hero
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroContent>
          <HeroTitle
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {data.company}
          </HeroTitle>
          <HeroTagline
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {data.tagline}
          </HeroTagline>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: '1.2rem', color: '#b0c4de' }}
          >
            {data.description}
          </motion.p>
        </HeroContent>
      </Hero>

      <StatsSection>
        <StatCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <StatValue>{counts.experience}+</StatValue>
          <StatLabel>Years Experience</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <StatValue>{counts.clients}+</StatValue>
          <StatLabel>Happy Clients</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <StatValue>{counts.projects / 1000}K+</StatValue>
          <StatLabel>Projects Completed</StatLabel>
        </StatCard>
        <StatCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <StatValue>{counts.satisfaction}%</StatValue>
          <StatLabel>Satisfaction Rate</StatLabel>
        </StatCard>
      </StatsSection>

      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Solutions
        </SectionTitle>
        <SolutionsGrid>
          {data.solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <SolutionTitle>{solution.title}</SolutionTitle>
              <SolutionDescription>{solution.description}</SolutionDescription>
              <SolutionFeature>
                <FeatureLabel>
                  {solution.turnaround ? 'Turnaround:' : solution.capacity ? 'Capacity:' : 'Quality:'}
                </FeatureLabel>
                <FeatureValue>
                  {solution.turnaround || solution.capacity || solution.quality}
                </FeatureValue>
              </SolutionFeature>
            </SolutionCard>
          ))}
        </SolutionsGrid>
      </Section>

      <ContactSection>
        <h2 style={{ color: '#4a90e2', fontSize: '2.5rem', marginBottom: '2rem' }}>Let's Work Together</h2>
        <div style={{ fontSize: '1.3rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', color: '#7fb3e8' }}>
          <div>📞 {data.contact.phone}</div>
          <div>✉️ {data.contact.email}</div>
        </div>
      </ContactSection>
    </Container>
  );
}

export default Template5;
