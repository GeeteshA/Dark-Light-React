import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Navigation from './components/Navigation'
import { ThemeProvider } from './theme-context'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
      {/* Navbar  */}
      <Navigation />
        {/* Routes  */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blogs' element={<Blogs/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App