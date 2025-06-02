import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: #3b82f6;
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroButton = styled.a`
  background-color: white;
  color: #3b82f6;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background-color: #bfdbfe;
  }
`;

function Home() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Welcome to My Portfolio</HeroTitle>
        <HeroText>I'm a passionate developer building innovative solutions</HeroText>
        <HeroButton href="/projects">View My Work</HeroButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Home;