import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gradient-to-b from-white to-pink-300 min-h-screen flex flex-col"> 
        <Header />
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
