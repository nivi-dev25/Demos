import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

const Nav = styled.nav`
  background: #1a1a2e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: white;
  font-size: 1.5rem;
`;

const BackButton = styled(Link)`
  background: #e94560;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #d63651;
  }
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroTagline = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 2rem;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #e94560;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ContactSection = styled.div`
  background: #1a1a2e;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  font-size: 1.1rem;
`;

function Template1() {
  const data = templatesData.template1;

  return (
    <Container>
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← Back to Demos</BackButton>
      </Nav>
      
      <Hero>
        <HeroTitle>{data.company}</HeroTitle>
        <HeroTagline>{data.tagline}</HeroTagline>
        <p>{data.description}</p>
      </Hero>

      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          {data.services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <ContactSection>
        <h2>Contact Us</h2>
        <ContactInfo>
          <ContactItem>📞 {data.contact.phone}</ContactItem>
          <ContactItem>✉️ {data.contact.email}</ContactItem>
          <ContactItem>📍 {data.contact.address}</ContactItem>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
}

export default Template1;
