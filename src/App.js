import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar1 from './components/navbar/Navbar1'
import { HelmetProvider } from 'react-helmet-async';
import Getstarted from './routes/getstarted/Getstarted'
import Variables from './routes/variable/Variables'

import Pythonfunction from './routes/functions/Pythonfunction'
import Home from './components/python/Home'
import Privacy from './components/privacy/Privacy'




const App = () => {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
      <Navbar1 />
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        
     
        <Route path='/getstarted' element={<Getstarted />} />
        <Route path='/variable' element={<Variables />} />

        <Route path='/pythonfunction' element={<Pythonfunction />} />
       <Route path='/privacy'  element={<Privacy/>}/>
    
      </Routes>
    
      </HelmetProvider>
    </>
  )
}

export default App;