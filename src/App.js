import React from 'react'
import Authenticate from './pages/Authenticate'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
// import Login from './pages/Login'
import Header from './components/Header'
// import Signup from './pages/Signup'
import Postadpage from './pages/Postadpage'
import Advehicle from './components/Advehicle'
import Adhouse from './components/Adhouse'
import Admobile from './components/Admobile'
import Loginform from './components/Loginform'
import Signup from './components/Signup'

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authenticate />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/postad" element={<Postadpage />} />
        <Route path="/advehicle" element={<Advehicle />} />
        <Route path="/adhouse" element={<Adhouse />} />
        <Route path="/admobile" element={<Admobile/>} />



      </Routes>

      <Footer />
    </div>
  )
}

export default App