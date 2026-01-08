import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Volunteer from './pages/Volunteer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-mono selection:bg-brand-500 selection:text-white pb-20">
        <Header />

        <main className="container mx-auto px-4 max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>

        <footer className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm border-t border-brand-100 py-3 md:hidden z-50">
          {/* Mobile explicit footer if needed, but styling is mainly handled by main content padding */}
          <div className="text-center text-xs text-brand-300">
            © 2026 Portfolio
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
