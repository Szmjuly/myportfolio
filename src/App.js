import React from 'react';
//Components
import { BrowserRouter as Router, Routes } from 'react-router-dom';

//Styling
import './css/App.css';

function App() {
  return (
          <Router basename={window.location.pathname || ''}>
              <Routes>
                
              </Routes>
        </Router>
    );
}

export default App;
