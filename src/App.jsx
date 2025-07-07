import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import SearchResults from './pages/searchResults';
import Checkout from './pages/Checkout';       
import Review from './pages/Review';           

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <>
   <Navbar />
  <div className="h-18"></div> {}
  <main className="flex-grow px-4 md:px-8">
    {/* Routes */}
  </main>
</>

        <main className="flex-grow pt-10 px-4 md:px-8 bg-red-200/30">

          <Routes>
           <Route path="/" element={<Home />} />
<Route path="/Home" element={<Home />} />

            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="/review" element={<Review />} />     
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;