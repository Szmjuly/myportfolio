import React from 'react';
//Components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Styling
import './App.css';

//Pages
import HomePage from './pages/HomePage';

function App() {
  return (
          <Router basename={window.location.pathname || ''}>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
              </Routes>
        </Router>
    );
}

export default App;
