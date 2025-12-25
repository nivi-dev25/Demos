import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  color: white;
`;

const Nav = styled.nav`
  background: rgba(10, 10, 10, 0.95);
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.h2`
  color: #d4af37;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 3px;
  font-family: 'Georgia', serif;
`;

const BackButton = styled(Link)`
  background: transparent;
  color: #d4af37;
  padding: 0.6rem 2rem;
  border: 2px solid #d4af37;
  border-radius: 0;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 2px;
  transition: all 0.4s;
  font-size: 0.9rem;

  &:hover {
    background: #d4af37;
    color: #0a0a0a;
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
  overflow: hidden;
  background: linear-gradient(rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.9)), 
              url('https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&h=900&fit=crop') center/cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 2rem;
  color: #d4af37;
  font-weight: 300;
  letter-spacing: 5px;
  font-family: 'Georgia', serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f5f5f5;
  font-weight: 300;
  letter-spacing: 2px;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  font-weight: 300;
  font-style: italic;
  max-width: 700px;
  margin: 0 auto;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #d4af37;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  font-family: 'Georgia', serif;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%);
  padding: 3rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
    transition: left 0.8s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ServiceName = styled.h3`
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
`;

const ServiceDescription = styled.p`
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const ServiceDeliverables = styled.div`
  border-top: 1px solid rgba(212, 175, 55, 0.3);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
`;

const DeliverableTitle = styled.h4`
  color: #d4af37;
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const DeliverableItem = styled.div`
  color: #999;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  font-weight: 300;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #d4af37;
  }
`;

const ClienteleSection = styled.div`
  background: rgba(212, 175, 55, 0.05);
  padding: 5rem 2rem;
  text-align: center;
`;

const ClienteleList = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const ClienteleItem = styled.div`
  font-size: 1.3rem;
  color: #d4af37;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 1.5rem 2.5rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  transition: all 0.3s;

  &:hover {
    background: rgba(212, 175, 55, 0.1);
  }
`;

const PhilosophySection = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  padding: 6rem 2rem;
  text-align: center;
`;

const PhilosophyText = styled.p`
  font-size: 1.8rem;
  color: #d4af37;
  font-style: italic;
  line-height: 2;
  max-width: 900px;
  margin: 0 auto;
  font-weight: 300;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ContactSection = styled.div`
  background: #0a0a0a;
  padding: 5rem 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  font-size: 1.3rem;
  color: #d4af37;
  font-weight: 300;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

function Template9() {
  const data = templatesData.template9;

  return (
    <Container>
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← BACK</BackButton>
      </Nav>
      
      <Hero
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <HeroContent>
          <HeroTitle
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {data.company}
          </HeroTitle>
          <HeroTagline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {data.tagline}
          </HeroTagline>
          <HeroDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            {data.description}
          </HeroDescription>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          {data.services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceDeliverables>
                <DeliverableTitle>Deliverables:</DeliverableTitle>
                {service.deliverables.map((item, idx) => (
                  <DeliverableItem key={idx}>{item}</DeliverableItem>
                ))}
              </ServiceDeliverables>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <ClienteleSection>
        <SectionTitle>Esteemed Clientele</SectionTitle>
        <ClienteleList>
          {data.clientele.map((client, index) => (
            <ClienteleItem key={index}>{client}</ClienteleItem>
          ))}
        </ClienteleList>
      </ClienteleSection>

      <PhilosophySection>
        <SectionTitle>Our Philosophy</SectionTitle>
        <PhilosophyText>"{data.philosophy}"</PhilosophyText>
      </PhilosophySection>

      <ContactSection>
        <SectionTitle>Contact</SectionTitle>
        <ContactInfo>
          <div>{data.contact.phone}</div>
          <div>{data.contact.email}</div>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
}

export default Template9;
