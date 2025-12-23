import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { templatesData } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  min-height: 100vh;
  background: #0d0d0d;
  color: white;
  overflow-x: hidden;
`;

const Nav = styled.nav`
  background: rgba(13, 13, 13, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #00ff88;
`;

const Logo = styled.h2`
  color: #00ff88;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: linear-gradient(135deg, #00ff88, #00cc6a);
  color: #0d0d0d;
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 136, 0.5);
  }
`;

const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%);
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #00ff88, #00cc6a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroTagline = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #00ff88;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 2rem;
  position: relative;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #00ff88;
  margin-bottom: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  padding: 3rem;
  border-radius: 20px;
  border: 2px solid #00ff88;
  position: relative;
  overflow: hidden;

  &::before {
    content: '${props => props.icon}';
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 8rem;
    opacity: 0.1;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  color: #00ff88;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const TechSection = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  padding: 5rem 2rem;
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
`;

const TechItem = styled.div`
  background: #0d0d0d;
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid #00ff88;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
  }
`;

const ContactSection = styled.div`
  background: #0d0d0d;
  padding: 5rem 2rem;
  text-align: center;
`;

function Template6() {
  const data = templatesData.template6;
  const heroRef = useRef(null);
  const featureRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // Hero parallax effect
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 300,
      opacity: 0.3
    });

    // Animate section title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true
        },
        x: -100,
        opacity: 0
      });
    }

    // Animate feature cards
    featureRefs.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true
          },
          y: 100,
          opacity: 0,
          rotation: 5
        });
      }
    });
  }, []);

  return (
    <Container>
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← Back to Demos</BackButton>
      </Nav>
      
      <Hero>
        <HeroBackground />
        <HeroContent ref={heroRef}>
          <HeroTitle>{data.company}</HeroTitle>
          <HeroTagline>{data.tagline}</HeroTagline>
          <p style={{ fontSize: '1.3rem', color: '#b0b0b0', maxWidth: '800px', margin: '0 auto' }}>
            {data.description}
          </p>
        </HeroContent>
      </Hero>

      <Section>
        <SectionContent>
          <SectionTitle ref={titleRef}>Our Advanced Features</SectionTitle>
          <FeaturesGrid>
            {data.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                ref={el => featureRefs.current[index] = el}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </SectionContent>
      </Section>

      <TechSection>
        <h2 style={{ color: '#00ff88', fontSize: '3rem', marginBottom: '2rem', fontWeight: '700' }}>
          Our Technologies
        </h2>
        <TechGrid>
          {data.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechGrid>
      </TechSection>

      <ContactSection>
        <h2 style={{ color: '#00ff88', fontSize: '3rem', marginBottom: '2rem', fontWeight: '700' }}>
          Get In Touch
        </h2>
        <div style={{ fontSize: '1.4rem', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', color: '#b0b0b0' }}>
          <div>📞 {data.contact.phone}</div>
          <div>✉️ {data.contact.email}</div>
        </div>
      </ContactSection>
    </Container>
  );
}

export default Template6;
