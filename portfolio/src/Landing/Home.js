import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #e5e7eb;
  scroll-behavior: smooth;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1f2937, #111827);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    min-height: 70vh;
    padding: 2rem 1rem;
  }
  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 1.5rem 0.75rem;
  }
  @media (max-width: 480px) {
    min-height: 75vh;
    padding: 1rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    max-width: 1100px;
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.75rem;
  }
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  @media (max-width: 1024px) {
    gap: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const HeroTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: fadeIn 1s ease-out, typing 3s steps(40) forwards;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 4.5vw, 3rem);
    margin-bottom: 1.25rem;
    animation: fadeIn 1s ease-out, typing 2.5s steps(35) forwards;
  }
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    animation: fadeIn 1s ease-out, typing 2s steps(30) forwards;
  }
`;

const HeroText = styled.div`
  font-size: clamp(1rem, 3vw, 1.3rem);
  margin-bottom: 1.75rem;
  color: #d1d5db;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    margin-bottom: 1.25rem;
  }
  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 2.2vw, 1rem);
  }
`;

const HeroButton = styled.button`
  display: inline-block;
  background-color: #3b82f6;
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0,0.2);
  }
  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    padding: 0.625rem 1rem;
    font-size: 0.9rem;
  }
`;

const HeroImage = styled.img`
  width: clamp(250px, 40vw, 500px);
  height: clamp(280px, 50vw, 520px);
  object-fit: contain;
  border-radius: 1rem;
  transition: opacity 0.5s ease, transform 0.3s ease;
  max-width: 100%;
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'scale(1)' : 'scale(0.95)')};
  &:hover {
    transform: ${props => (props.isVisible ? 'scale(1.05)' : 'scale(0.95)')};
  }
  @media (max-width: 1024px) {
    width: clamp(220px, 35vw, 400px);
    height: clamp(240px, 45vw, 420px);
  }
  @media (max-width: 768px) {
    width: clamp(200px, 50vw, 300px);
    height: clamp(220px, 55vw, 320px);
  }
  @media (max-width: 480px) {
    width: clamp(180px, 45vw, 260px);
    height: clamp(200px, 50vw, 280px);
  }
`;

const DetailsCard = styled.div`
  width: clamp(250px, 40vw, 400px);
  height: clamp(280px, 50vw, 420px);
  background: transparent;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 0.5s ease, transform 0.3s ease;
  max-width: 100%;
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'scale(1)' : 'scale(0.95)')};
  &:hover {
    transform: ${props => (props.isVisible ? 'scale(1.05)' : 'scale(0.95)')};
  }
  @media (max-width: 1024px) {
    width: clamp(220px, 35vw, 360px);
    height: clamp(240px, 45vw, 380px);
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    width: clamp(200px, 50vw, 300px);
    height: clamp(220px, 55vw, 320px);
    padding: 1.25rem;
  }
  @media (max-width: 480px) {
    width: clamp(180px, 45vw, 260px);
    height: clamp(200px, 50vw, 280px);
    padding: 1rem;
  }
`;

const DetailsTitle = styled.h3`
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  font-weight: 700;
  color: #e5e7eb;
  margin-bottom: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: typing 2s steps(20) forwards;
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @media (max-width: 768px) {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    animation: typing 1.8s steps(18) forwards;
  }
  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 2.2vw, 1.2rem);
    animation: typing 1.5s steps(16) forwards;
  }
`;

const DetailsText = styled.p`
  font-size: clamp(0.85rem, 2.5vw, 1.1rem);
  color: #d1d5db;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  display: inline-block;
  animation: typing 2s steps(30) forwards;
  animation-delay: ${props => props.delay || 0}s;
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 2.2vw, 1rem);
    animation: typing 1.8s steps(28) forwards;
  }
  @media (max-width: 480px) {
    font-size: clamp(0.75rem, 2vw, 0.9rem);
    animation: typing 1.5s steps(25) forwards;
  }
`;

const Section = styled.section`
  padding: 4rem 1.5rem;
  background: ${props => props.bg || 'linear-gradient(to bottom right, #1f2937, #111827)'};
   background: linear-gradient(to bottom right, #1f2937, #111827);
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    padding: 3rem 1rem;
  }
  @media (max-width: 768px) {
    padding: 2.5rem 0.75rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 3.5vw, 2rem);
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  color: #d1d5db;
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  @media (max-width: 1024px) {
    gap: 2rem;
    max-width: 900px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    font-size: clamp(0.9rem, 2.2vw, 1rem);
  }
  @media (max-width: 480px) {
    gap: 1rem;
    font-size: clamp(0.85rem, 2vw, 0.95rem);
  }
`;

const AboutImage = styled.img`
  margin-top: -5rem;
  width: clamp(300px, 30vw, 400px);
  height: clamp(300px, 30vw, 400px);
  object-fit: contain;
  border-radius: 1rem;
  transition: all 0.3s ease;
  max-width: 100%;
  flex-shrink: 0;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1024px) {
    width: clamp(250px, 25vw, 350px);
    height: clamp(250px, 25vw, 350px);
  }
  @media (max-width: 768px) {
    margin-top: 0;
    width: clamp(200px, 40vw, 250px);
    height: clamp(200px, 40vw, 250px);
  }
  @media (max-width: 480px) {
    width: clamp(150px, 35vw, 200px);
    height: clamp(150px, 35vw, 200px);
  }
`;

const AboutTextContainer = styled.div`
  margin-top: -5rem;
  flex: 1;
  text-align: left;
  @media (max-width: 768px) {
    margin-top: 0;
    text-align: center;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    gap: 2rem;
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const TechStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: #e5e7eb;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    color: #3b82f6;
  }
  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  }
  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.6vw, 0.9rem);
  }
`;

const TechStackIcon = styled.img`
  background-color: #3b82f6;
  width: 44px;
  height: 44px;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.75rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ProjectCard = styled.div`
  background: #1f2937;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    max-width: 340px;
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.25rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 0.75rem;
  @media (max-width: 768px) {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }
  @media (max-width: 480px) {
    font-size: clamp(0.95rem, 2.2vw, 1.1rem);
  }
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  margin-bottom: 0.75rem;
  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 2.2vw, 0.9rem);
  }
  @media (max-width: 480px) {
    font-size: clamp(0.75rem, 2vw, 0.85rem);
  }
`;

const ProjectLink = styled.a`
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 2.2vw, 0.9rem);
  }
  @media (max-width: 480px) {
    font-size: clamp(0.75rem, 2vw, 0.85rem);
  }
`;

const ContactContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 1024px) {
   flex-direction: column;
    max-width: 700px;
    gap: 1.75rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    max-width: 700px;
  }
  @media (max-width: 480px) {
   flex-direction: column;
    gap: 1rem;
    max-width: 700px;
  }
`;

const ContactItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: #e5e7eb;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: #3b82f6;
    transform: translateY(-3px);
  }
  @media (max-width: 768px) {
   flex-direction: column;
    font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  }
  @media (max-width: 480px) {
   flex-direction: column;
    font-size: clamp(0.8rem, 1.6vw, 0.9rem);
  }
`;

const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  @media (max-width: 1024px) {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

function Home() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      <HeroSection id="home">
        <Container>
          <HeroContainer>
            <HeroContent>
              <HeroTitle>Hi there!</HeroTitle>
              <HeroText>
                Hi, I'm Emmanuel! I'm a passionate developer building innovative solutions.<br />
                Click the photo for personal information {'->'}
              </HeroText>
              <HeroButton onClick={scrollToProjects}>View My Work</HeroButton>
            </HeroContent>
            {showDetails ? (
              <DetailsCard isVisible={showDetails} onClick={toggleDetails}>
                <DetailsTitle>Emmanuel S. Bitancor</DetailsTitle>
                <DetailsText delay={0.5}>College Department: College of Technology</DetailsText>
                <DetailsText delay={1.0}>Course: Bachelor of Science in Computer Science</DetailsText>
                <DetailsText delay={1.5}>Tech Stack: JavaScript, HTML, PHP, React & Node.js</DetailsText>
              </DetailsCard>
            ) : (
              <HeroImage
                src="/pic5.png"
                alt="Emmanuel S. Bitancor"
                isVisible={!showDetails}
                onClick={toggleDetails}
              />
            )}
          </HeroContainer>
        </Container>
      </HeroSection>

      <Section id="about" bg="linear-gradient(to bottom, #2d2d2d, #1a1a1a)">
        <Container>
          <SectionTitle>About Me</SectionTitle>
          <AboutContent>
            <AboutImage src="/pic7.png" alt="About Emmanuel" />
            <AboutTextContainer>
              <p>
                I'm Emmanuel S. Bitancor, a dedicated Computer Science Student with a passion for creating
                innovative web applications. Specializing in React and Node.js, I build scalable and
                user-friendly solutions. My goal is to combine creativity and technical expertise to deliver
                impactful digital experiences.
              </p>
              <TechStackContainer>
                <TechStackItem>
                  <TechStackIcon src="https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/javascript.svg" alt="JavaScript" />
                  JavaScript
                </TechStackItem>
                <TechStackItem>
                  <TechStackIcon src="https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/html5.svg" alt="HTML" />
                  HTML
                </TechStackItem>
                <TechStackItem>
                  <TechStackIcon src="https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/react.svg" alt="React" />
                  React
                </TechStackItem>
                <TechStackItem>
                  <TechStackIcon src="https://cdn.jsdelivr.net/npm/simple-icons@13.1.0/icons/nodedotjs.svg" alt="Node.js" />
                  Node.js
                </TechStackItem>
              </TechStackContainer>
            </AboutTextContainer>
          </AboutContent>
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <SectionTitle>My Projects</SectionTitle>
          <ProjectGrid>
            <ProjectCard>
              <ProjectImage src="/ccset.png" alt="Project 1" />
              <ProjectContent>
                <ProjectTitle>COMSOC Journal System</ProjectTitle>
                <ProjectDescription>
                  A web-based system built with React, Node.js, designed for the College of Technology at Bohol Island State
                  University - Bilar Campus. It serves as a platform for students to submit their journals and showcase their research skills.
                </ProjectDescription>
                <ProjectLink href="https://bisubilarctech-0adba2bc1c57.herokuapp.com/Ctech" target="_blank" rel="noopener noreferrer">
                  View Site Project
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src="/checker.png" alt="Project 2" />
              <ProjectContent>
                <ProjectTitle>Thesis Checker</ProjectTitle>
                <ProjectDescription>
                  A web-based System built with React and Node.js for checking thesis papers for plagiarism and grammar issues.
                </ProjectDescription>
                <ProjectLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}
                >
                  View Project
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
            <ProjectCard>
              <ProjectImage src="/coming-soon.jpg" alt="Project 3" />
              <ProjectContent>
                <ProjectTitle>Coming Soon...</ProjectTitle>
                <ProjectDescription>
                  No Description Available.
                </ProjectDescription>
                <ProjectLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}
                >
                  View Project
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          </ProjectGrid>
        </Container>
      </Section>

      <Section id="contact" bg="linear-gradient(to bottom, #1a1a1a, #2d2d2d)">
        <Container>
          <SectionTitle>Contact Me</SectionTitle>
          <ContactContainer>
            <ContactItem
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', color: 'gray', cursor: 'default' }}
            >
              <ContactIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </ContactIcon>
              Facebook
            </ContactItem>
            <ContactItem
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', color: 'gray', cursor: 'default' }}
            >
              <ContactIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-3.255-.148-4.771-1.664-4.919-4.919-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.148-3.227 1.664-4.771 4.919-4.919 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.073 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.073-4.948c-.196-4.354-2.618-6.782-6.98-6.979-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </ContactIcon>
              Instagram
            </ContactItem>
            <ContactItem
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', color: 'gray', cursor: 'default' }}
            >
              <ContactIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </ContactIcon>
              Twitter
            </ContactItem>
          </ContactContainer>
        </Container>
      </Section>
    </PageWrapper>
  );
}

export default Home;