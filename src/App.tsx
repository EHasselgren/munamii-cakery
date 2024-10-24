import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Bag from './pages/Bag';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[url('/public/images/background2.jpg')] bg-cover bg-center min-h-screen flex flex-col">
        <ToastContainer
          position="top-right"
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss
          draggable 
          pauseOnHover
        />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shoppingBag" element={<Bag />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

