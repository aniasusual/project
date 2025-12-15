import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DebuggerApp from './pages/DebuggerApp';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/debugger" element={<DebuggerApp />} />
      </Routes>
    </Router>
  );
}