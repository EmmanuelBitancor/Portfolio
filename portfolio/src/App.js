import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './Landing/navbar';
import Home from './Landing/Home';
import About from './Landing/About';
import Projects from './Landing/Projects';
import Contact from './Landing/Contact';
import './App.css';

const AppContainer = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;