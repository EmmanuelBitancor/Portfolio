import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2563eb;
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #bfdbfe;
  }
`;

function NavBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavContainer>
        <NavTitle>My Portfolio</NavTitle>
        <NavList>
          <li><NavLink onClick={() => scrollToSection('home')}>Home</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('about')}>About</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink></li>
          <li><NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink></li>
        </NavList>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;