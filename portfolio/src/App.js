import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './Landing/navbar';
import Home from './Landing/Home';
import './App.css';
import { useState } from 'react';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  width: 100%;
  color: #e5e7eb;
  scroll-behavior: smooth;
  overflow-x: hidden;
  box-sizing: border-box;
`;

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <AppContainer key={refreshKey}>
      <Router>
        <NavBar onRefresh={handleRefresh} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;