import React from 'react'
import Home from './assets/components/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Location from './assets/components/Location.jsx';
import Authorize from './assets/components/Authorize.jsx';
import Login from './assets/components/auth/Login.jsx'
import Signup from './assets/components/auth/Signup.jsx';
import Schedule from './assets/components/Schedule.jsx';

// assets
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx';
import Payment from './assets/components/Payment.jsx';

export default function App() {
  return (
    <div className='bg-black'>
      <Router>
          <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/location' element={<Location/>}/>
                <Route path='/groups' element={<div><Header/><Schedule/><Footer/></div>}/>
                <Route path='/payment' element={<div><Header/><Payment/><Footer/></div>}/>
                <Route path='/authorize' element={<Authorize/>}/>
                <Route path='/authorize/signup' element={<Signup/>}/>
                <Route path='/authorize/login' element={<Login/>}/>
          </Routes>
      </Router>
    </div>
  )
}