import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei';
import { templatesData } from '../data';

const Container = styled.div`
  min-height: 100vh;
  background: #050505;
  color: white;
`;

const Nav = styled.nav`
  background: rgba(5, 5, 5, 0.95);
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
  border-bottom: 2px solid #ff00ff;
`;

const Logo = styled.h2`
  color: #ff00ff;
  font-size: 1.5rem;
  font-weight: 700;
`;

const BackButton = styled(Link)`
  background: linear-gradient(135deg, #ff00ff, #cc00cc);
  color: white;
  padding: 0.6rem 1.8rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(255, 0, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 255, 0.5);
  }
`;

const Hero = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ff00ff, #cc00cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTagline = styled.p`
  font-size: 1.5rem;
  color: #ff00ff;
  text-align: center;
  margin-bottom: 3rem;
`;

const CanvasContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  background: radial-gradient(circle, #1a0a1a 0%, #050505 100%);
  border-radius: 20px;
  border: 2px solid #ff00ff;
  margin: 2rem 0;
  box-shadow: 0 0 50px rgba(255, 0, 255, 0.3);
`;

const ProductSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const ProductButton = styled.button`
  background: ${props => props.$active ? 'linear-gradient(135deg, #ff00ff, #cc00cc)' : 'rgba(255, 0, 255, 0.1)'};
  color: white;
  border: 2px solid #ff00ff;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(135deg, #ff00ff, #cc00cc);
    transform: scale(1.05);
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ff00ff;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled.div`
  background: linear-gradient(135deg, #1a0a1a 0%, #0a0a0a 100%);
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid #ff00ff;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 0, 255, 0.3);
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #1a0a1a 0%, #050505 100%);
  padding: 4rem 2rem;
  text-align: center;
`;

function RotatingBox({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Box ref={meshRef} position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}

function RotatingSphere({ position }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.7, 32, 32]}>
      <meshStandardMaterial color="#ff00ff" metalness={0.8} roughness={0.2} />
    </Sphere>
  );
}

function RotatingCylinder({ position }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.z += 0.005;
  });

  return (
    <Cylinder ref={meshRef} position={position} args={[0.5, 0.5, 2, 32]}>
      <meshStandardMaterial color="#cc00cc" metalness={0.6} roughness={0.3} />
    </Cylinder>
  );
}

function Template7() {
  const data = templatesData.template7;
  const [selectedProduct, setSelectedProduct] = useState(0);

  const shapes = [
    <RotatingBox key="box" position={[0, 0, 0]} color="#ff00ff" />,
    <RotatingSphere key="sphere" position={[0, 0, 0]} />,
    <RotatingCylinder key="cylinder" position={[0, 0, 0]} />
  ];

  return (
    <Container>
      <Nav>
        <Logo>{data.company}</Logo>
        <BackButton to="/">← Back to Demos</BackButton>
      </Nav>
      
      <Hero>
        <HeroTitle>{data.company}</HeroTitle>
        <HeroTagline>{data.tagline}</HeroTagline>
        <p style={{ fontSize: '1.1rem', color: '#b0b0b0', textAlign: 'center', maxWidth: '600px' }}>
          {data.description}
        </p>

        <ProductSelector>
          {data.products.map((product, index) => (
            <ProductButton
              key={index}
              $active={selectedProduct === index}
              onClick={() => setSelectedProduct(index)}
            >
              {product.name}
            </ProductButton>
          ))}
        </ProductSelector>

        <CanvasContainer>
          <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            {shapes[selectedProduct]}
            <OrbitControls enableZoom={true} />
          </Canvas>
        </CanvasContainer>

        <div style={{ textAlign: 'center', maxWidth: '600px', padding: '0 2rem' }}>
          <h3 style={{ color: '#ff00ff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            {data.products[selectedProduct].name}
          </h3>
          <p style={{ color: '#b0b0b0' }}>Category: {data.products[selectedProduct].category}</p>
          <p style={{ color: '#b0b0b0' }}>Material: {data.products[selectedProduct].material}</p>
        </div>
      </Hero>

      <Section>
        <SectionTitle>3D Capabilities</SectionTitle>
        <ProductsGrid>
          {data.capabilities3D.map((capability, index) => (
            <ProductCard key={index}>
              <h3 style={{ color: '#ff00ff', fontSize: '1.5rem', marginBottom: '1rem' }}>{capability}</h3>
              <p style={{ color: '#b0b0b0' }}>Advanced {capability.toLowerCase()} services for modern manufacturing</p>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Section>

      <ContactSection>
        <h2 style={{ color: '#ff00ff', fontSize: '2.5rem', marginBottom: '2rem' }}>Contact Us</h2>
        <div style={{ fontSize: '1.2rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', color: '#b0b0b0' }}>
          <div>📞 {data.contact.phone}</div>
          <div>✉️ {data.contact.email}</div>
        </div>
      </ContactSection>
    </Container>
  );
}

export default Template7;
