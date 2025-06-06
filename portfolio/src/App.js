import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './Landing/navbar';
import Home from './Landing/Home';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #e5e7eb;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;