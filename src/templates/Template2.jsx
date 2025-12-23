import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: #2c2c2c;
  color: white;
`;

const Nav = styled.nav`
  background: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #8c8c8c;
`;

const Logo = styled.h2`
  color: #8c8c8c;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: #8c8c8c;
  color: #1a1a1a;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #a0a0a0;
  }
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 100%);
  padding: 5rem 2rem;
  text-align: center;
  border-bottom: 5px solid #8c8c8c;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #8c8c8c;
  font-weight: 800;
  letter-spacing: 2px;
`;

const HeroTagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #8c8c8c;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background: #3a3a3a;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #5a5a5a;
  transition: all 0.3s;

  &:hover {
    border-color: #8c8c8c;
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  color: #8c8c8c;
  margin-bottom: 0.5rem;
`;

const ProductGrade = styled.div`
  color: #a0a0a0;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProductApplications = styled.p`
  color: #ccc;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const CertificationsSection = styled.div`
  background: #1a1a1a;
  padding: 3rem 2rem;
  text-align: center;
`;

const CertificationsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const CertBadge = styled.div`
  background: #8c8c8c;
  color: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
`;

const ContactSection = styled.div`
  background: #2c2c2c;
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

function Template2() {
  const data = templatesData.template2;

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
        <SectionTitle>Our Steel Products</SectionTitle>
        <ProductsGrid>
          {data.products.map((product, index) => (
            <ProductCard key={index}>
              <ProductName>{product.name}</ProductName>
              <ProductGrade>Grade: {product.grade}</ProductGrade>
              <ProductApplications>{product.applications}</ProductApplications>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      <CertificationsSection>
        <h2 style={{ color: '#8c8c8c' }}>Certifications & Standards</h2>
        <CertificationsList>
          {data.certifications.map((cert, index) => (
            <CertBadge key={index}>{cert}</CertBadge>
          ))}
        </CertificationsList>
      </CertificationsSection>

      <ContactSection>
        <h2 style={{ color: '#8c8c8c' }}>Contact Us</h2>
        <ContactInfo>
          <div style={{ fontSize: '1.1rem' }}>📞 {data.contact.phone}</div>
          <div style={{ fontSize: '1.1rem' }}>✉️ {data.contact.email}</div>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
}

export default Template2;
