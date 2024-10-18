import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './container/Header';
 // Ensure the path matches the actual file case
import ProductDetails from './container/ProductDetails';
import ProductListing from './container/productListing';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
       
        <Routes>
          <Route path="/" element={<ProductListing />} /> {/* Updated syntax */}
          <Route path="/product/:productId" element={<ProductDetails />} /> {/* Updated syntax */}
          <Route path="*" element={<div>404 Not Found</div>} /> {/* Catch-all route for 404 */}
        </Routes>
      </Router>
      <Header />
    </div>
  );
}

export default App;
