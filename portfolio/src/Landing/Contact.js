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
  margin-bottom: 1.5rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContactText = styled.p`
  color: #4b5563;
`;

function Contact() {
  return (
    <Section>
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        <SectionText>Feel free to reach out for collaboration or inquiries!</SectionText>
        <ContactContent>
          <ContactText>Email: your.email@example.com</ContactText>
          <ContactText>LinkedIn: linkedin.com/in/yourprofile</ContactText>
          <ContactText>GitHub: github.com/yourusername</ContactText>
        </ContactContent>
      </Container>
    </Section>
  );
}

export default Contact;