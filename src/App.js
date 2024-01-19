
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import SingleProductDetails from './components/SingleProductDetails';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>    
        <Header />
      <Routes>
        {/* <Switch> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<SingleProductDetails/>} />
        {/* </Switch> */}
      </Routes>
      <Footer />
    </>

  );
}

export default App;
