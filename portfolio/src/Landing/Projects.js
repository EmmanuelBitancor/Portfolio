import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background-color: #f3f4f6;
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCardWrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectText = styled.p`
  color: #4b5563;
`;

function ProjectCard({ title, description }) {
  return (
    <ProjectCardWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectText>{description}</ProjectText>
    </ProjectCardWrapper>
  );
}

function Projects() {
  const projectData = [
    { title: "Project 1", description: "A web app built with React and Styled Components." },
    { title: "Project 2", description: "A full-stack application with a Node.js backend." },
    { title: "Project 3", description: "An interactive dashboard using modern JS libraries." }
  ];

  return (
    <Section>
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <ProjectGrid>
          {projectData.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
}

export default Projects;