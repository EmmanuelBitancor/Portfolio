import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto;
`;

function About() {
  return (
    <Section>
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Hi! I'm [Your Name], a web developer with expertise in React, JavaScript, and modern web technologies.
          I love creating responsive, user-friendly applications that solve real-world problems.
        </SectionText>
      </Container>
    </Section>
  );
}

export default About;