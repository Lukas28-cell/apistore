import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import ProductDetails from './container/ProductDetails';
import ProductListing from './container/productListing';
import Footer from './container/Footer';
import { footerAPI } from './data/data';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
       
        <Routes>
          <Route path="/" element={<ProductListing />} /> 
          <Route path="/product/:productId" element={<ProductDetails />} /> 
          <Route path="*" element={<div>404 Not Found</div>} /> 
        </Routes>
      </Router>
      <Header />
      <Footer footerAPI={footerAPI}/>
    </div>
  );
}

export default App;
