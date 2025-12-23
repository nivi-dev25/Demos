import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  color: #1a1a1a;
`;

const Nav = styled.nav`
  background: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #d4af37;
`;

const Logo = styled.h2`
  color: #d4af37;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: linear-gradient(135deg, #d4af37, #b8960f);
  color: #1a1a1a;
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }
`;

const SplitHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 90vh;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPane = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const RightPane = styled(motion.div)`
  background: linear-gradient(135deg, #d4af37 0%, #b8960f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #d4af37;
  font-weight: 900;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f5f5f5;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
`;

const RightContent = styled.div`
  text-align: center;
`;

const RightTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;

const PortfolioCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #d4af37;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #d4af37;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const ProjectClient = styled.div`
  color: #666;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const ProjectYear = styled.div`
  color: #999;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SpecialtiesSection = styled.div`
  background: #1a1a1a;
  padding: 4rem 2rem;
  color: white;
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
`;

const SpecialtyItem = styled.div`
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #d4af37;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
  }
`;

const AwardsSection = styled.div`
  background: linear-gradient(135deg, #d4af37 0%, #b8960f 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: #1a1a1a;
`;

const AwardsList = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AwardItem = styled.div`
  background: rgba(26, 26, 26, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ContactSection = styled.div`
  background: #1a1a1a;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
`;

function Template8() {
  const data = templatesData.template8;

  return (
    <Container>
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← Back to Demos</BackButton>
      </Nav>
      
      <SplitHero>
        <LeftPane
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Title>{data.company}</Title>
          <Tagline>{data.tagline}</Tagline>
          <Description>{data.description}</Description>
        </LeftPane>
        <RightPane
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <RightContent>
            <RightTitle>Modern Metalwork Excellence</RightTitle>
            <p style={{ fontSize: '1.2rem' }}>
              Where traditional craftsmanship meets contemporary design
            </p>
          </RightContent>
        </RightPane>
      </SplitHero>

      <Section>
        <SectionTitle>Featured Portfolio</SectionTitle>
        <PortfolioGrid>
          {data.portfolio.map((project, index) => (
            <PortfolioCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectTitle>{project.project}</ProjectTitle>
              <ProjectClient>Client: {project.client}</ProjectClient>
              <ProjectYear>{project.year}</ProjectYear>
            </PortfolioCard>
          ))}
        </PortfolioGrid>
      </Section>

      <SpecialtiesSection>
        <h2 style={{ color: '#d4af37', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Our Specialties
        </h2>
        <SpecialtiesGrid>
          {data.specialties.map((specialty, index) => (
            <SpecialtyItem key={index}>{specialty}</SpecialtyItem>
          ))}
        </SpecialtiesGrid>
      </SpecialtiesSection>

      <AwardsSection>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '700' }}>
          Awards & Recognition
        </h2>
        <AwardsList>
          {data.awards.map((award, index) => (
            <AwardItem key={index}>🏆 {award}</AwardItem>
          ))}
        </AwardsList>
      </AwardsSection>

      <ContactSection>
        <h2 style={{ color: '#d4af37', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '700' }}>
          Let's Create Together
        </h2>
        <div style={{ fontSize: '1.3rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', color: '#d4af37' }}>
          <div>📞 {data.contact.phone}</div>
          <div>✉️ {data.contact.email}</div>
        </div>
      </ContactSection>
    </Container>
  );
}

export default Template8;
