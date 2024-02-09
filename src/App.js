
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import SingleProductDetails from './components/SingleProductDetails';
import PillowSingleProductDetails  from './components/PillowSingleProductDetails';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleMap from './components/GoogleMap';

function App() {
  return (
    <>    
      <Header />
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:Category/:id/:title" element={<SingleProductDetails/>} />
          <Route path="/pillowProduct/:id" element={<PillowSingleProductDetails/>} />
      
      </Routes>
      <GoogleMap />
      <Footer />
    </>

  );
}

export default App;
