// import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Register } from './pages/Register';
import { Footer } from './components/Footer';
import { MainLayout } from './layout/MainLayout';
import { Login } from './pages/Login';

const App = () => {
  return (
    <div className='bg-[#f6e9db] font-title'>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
    </Router>
    </div>
  )
}

export default App
