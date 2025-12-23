import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: white;
`;

const Nav = styled.nav`
  background: rgba(15, 52, 96, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const Logo = styled.h2`
  color: #00d4ff;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: #00d4ff;
  color: #0a0a0a;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #00b8e6;
    transform: scale(1.05);
  }
`;

const Hero = styled(motion.div)`
  background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
  padding: 6rem 2rem;
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #00d4ff;
  font-weight: 800;
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CapabilityCard = styled(motion.div)`
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid #00d4ff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const CapabilityName = styled.h3`
  font-size: 1.8rem;
  color: #00d4ff;
  margin-bottom: 1rem;
`;

const CapabilityDetail = styled.div`
  color: #ccc;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const IndustriesSection = styled.div`
  background: #0f3460;
  padding: 4rem 2rem;
`;

const IndustriesList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const IndustryTag = styled(motion.div)`
  background: #00d4ff;
  color: #0a0a0a;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
`;

const ContactSection = styled.div`
  background: #0a0a0a;
  padding: 4rem 2rem;
  text-align: center;
`;

function Template3() {
  const data = templatesData.template3;

  return (
    <Container>
      <Nav>
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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
          >
            {data.description}
          </motion.p>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Capabilities
        </SectionTitle>
        <CapabilitiesGrid>
          {data.capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <CapabilityName>{capability.name}</CapabilityName>
              <CapabilityDetail><strong>Precision:</strong> {capability.precision}</CapabilityDetail>
              <CapabilityDetail><strong>Materials:</strong> {capability.materials}</CapabilityDetail>
            </CapabilityCard>
          ))}
        </CapabilitiesGrid>
      </Section>

      <IndustriesSection>
        <SectionTitle style={{ color: '#00d4ff' }}>Industries We Serve</SectionTitle>
        <IndustriesList>
          {data.industries.map((industry, index) => (
            <IndustryTag
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {industry}
            </IndustryTag>
          ))}
        </IndustriesList>
      </IndustriesSection>

      <ContactSection>
        <h2 style={{ color: '#00d4ff', fontSize: '2rem', marginBottom: '2rem' }}>Get In Touch</h2>
        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div>📞 {data.contact.phone}</div>
          <div>✉️ {data.contact.email}</div>
        </div>
      </ContactSection>
    </Container>
  );
}

export default Template3;
