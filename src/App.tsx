import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbarr from './components/Navbarr';
import { ShoppingCartProvider } from './context/ShopingCartContext';
function App() {
  return (
    <>
    <ShoppingCartProvider>
    <Navbarr/>
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>   
      </Container>
    </ShoppingCartProvider>  
    </>
  );
}

export default App;
