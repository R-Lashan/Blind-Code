import './App.css';
import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programming from './pages/Programming';
import Html from './pages/Html';
import Css from './pages/Css';
import Js from './pages/JavaSricpt';
import Register from './pages/Register';
import Account from './pages/Account';
import About from './pages/About';

function App() {
    useEffect(() => {
        localStorage.getItem('name');
    
    },[])
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/><Route />
            <Route path='/programming'  element={<Programming />}/><Route />
            <Route path='/html'  element={<Html />}/><Route />
            <Route path='/css'  element={<Css />}/><Route />
            <Route path='/javascript'  element={<Js />}/><Route />
            <Route path='/sign-in'  element={<Register />}/><Route />
            <Route path='/howto' exact element={<Account />}/><Route />
            <Route path='/about' element={<About />}/><Route />
          </Routes>
      </Router>
    </>
  );
}

export default App;

                 