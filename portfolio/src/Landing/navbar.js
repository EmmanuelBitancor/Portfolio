import React, { useState } from 'react';
import styled from 'styled-components';
import { Home as HomeIcon, Person as PersonIcon, Work as WorkIcon, MailOutline as MailOutlineIcon } from '@mui/icons-material';

const Nav = styled.nav`
  background: linear-gradient(to right, #1f2937, #111827);
  color: #e5e7eb;
  width: 100%;
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 10;
  @media (max-width: 1024px) {
    padding: 0.5rem 0.75rem;
  }
  @media (max-width: 768px) {
    padding: 0.15rem 0.15rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 1100px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.10rem;
  }
`;

const NavTitle = styled.button`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: #e5e7eb;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  transition: color 0.3s ease;
  &:hover {
    color: #3b82f6;
  }
  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.8vw, 1.2rem);
  }
  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 1.6vw, 1.1rem);
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1.25rem;
  }
  @media (max-width: 480px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 65px;
    background: #1f2937;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 4rem;
    gap: 2rem;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
    margin: 0;
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled.a`
  color: #e5e7eb;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  &:hover {
    color: #3b82f6;
  }
  & > svg {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    & > svg {
      width: 28px;
      height: 28px;
    }
  }
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Tooltip = styled.span`
  display: none;
  @media (min-width: 481px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(-50%);
    background: #1f2937;
    color: #3b82f6;
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    margin-left: 0.75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    ${NavItem}:hover & {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e5e7eb;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 480px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #e5e7eb;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: #3b82f6;
    }
  }
`;

function NavBar({ onRefresh }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const refreshPage = () => {
    onRefresh();
    window.location.reload();
  };

  return (
    <Nav>
      <NavContainer>
        <NavTitle onClick={refreshPage}>My Portfolio</NavTitle>
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </ToggleButton>
        <NavList isOpen={isOpen}>
          <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
          <NavItem>
            <NavLink onClick={() => scrollToSection('home')}>
              <HomeIcon />
            </NavLink>
            <Tooltip>Home</Tooltip>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('about')}>
              <PersonIcon />
            </NavLink>
            <Tooltip>About</Tooltip>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('projects')}>
              <WorkIcon />
            </NavLink>
            <Tooltip>Projects</Tooltip>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => scrollToSection('contact')}>
              <MailOutlineIcon />
            </NavLink>
            <Tooltip>Contact</Tooltip>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;