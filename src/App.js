import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Step1 />} />
          <Route path="/know" element={<Step2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
