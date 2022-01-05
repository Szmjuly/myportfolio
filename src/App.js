import React from 'react';
//Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Styling
import './App.css';

//Pages
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
          <Router basename={window.location.pathname || ''}>
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<HomePage />} />
              </Routes>
        </Router>
    );
}

export default App;
