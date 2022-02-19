import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layout/header'
import Footer from './layout/footer'
import Home from './pages/home'
import Error404 from './pages/error/404'

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
