import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import WhatsInStore from './components/WhatsInStore';
import WhoCanParticipate from './components/WhoCanParticipate';
import WhatsAtStake from './components/WhatsAtStake';
import StickyFooter from './components/StickyFooter';
import Top from './components/Top';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Top />
        <WhatsInStore />
        <WhoCanParticipate />
        <WhatsAtStake />
        <StickyFooter />
      </Router>
    </>
  )
}

export default App