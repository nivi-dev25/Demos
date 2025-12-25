import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
  color: white;
`;

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #444;
`;

const Logo = styled.h2`
  color: #e67e22;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: #e67e22;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #d35400;
    transform: translateY(-2px);
  }
`;

const Hero = styled.div`
  background: linear-gradient(rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9)), 
              url('https://images.unsplash.com/photo-1614575540643-651a47928d89?w=1600&h=600&fit=crop') center/cover;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #e67e22, #444, #e67e22);
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #e67e22;
  font-weight: 800;
`;

const HeroTagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ddd;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #e67e22;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background: rgba(230, 126, 34, 0.1);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid #444;
  transition: all 0.3s;

  &:hover {
    border-color: #e67e22;
    background: rgba(230, 126, 34, 0.15);
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: #e67e22;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ServiceTypes = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const TypeTag = styled.span`
  background: #444;
  color: #e67e22;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const MaterialsSection = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem 2rem;
`;

const MaterialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 2rem auto;
`;

const MaterialItem = styled.div`
  background: #333;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #444;
  transition: all 0.3s;
  font-weight: 600;

  &:hover {
    border-color: #e67e22;
    transform: scale(1.05);
  }
`;

const ContactSection = styled.div`
  background: #1a1a1a;
  padding: 4rem 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  font-size: 1.2rem;
`;

function Template4() {
  const data = templatesData.template4;

  return (
    <Container>
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← Back to Demos</BackButton>
      </Nav>
      
      <Hero>
        <HeroTitle>{data.company}</HeroTitle>
        <HeroTagline>{data.tagline}</HeroTagline>
        <p style={{ fontSize: '1.1rem', color: '#ddd' }}>{data.description}</p>
      </Hero>

      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          {data.services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceTypes>
                {(service.types || service.materials || service.ratings || []).map((item, idx) => (
                  <TypeTag key={idx}>{item}</TypeTag>
                ))}
              </ServiceTypes>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <MaterialsSection>
        <SectionTitle style={{ color: '#e67e22' }}>Materials We Work With</SectionTitle>
        <MaterialsList>
          {data.materials.map((material, index) => (
            <MaterialItem key={index}>{material}</MaterialItem>
          ))}
        </MaterialsList>
      </MaterialsSection>

      <ContactSection>
        <h2 style={{ color: '#e67e22', fontSize: '2rem', marginBottom: '2rem' }}>Contact Us</h2>
        <ContactInfo>
          <div>📞 {data.contact.phone}</div>
          <div>✉️ {data.contact.email}</div>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
}

export default Template4;
