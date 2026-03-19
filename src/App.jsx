import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import AboutOverview from './components/AboutOverview'
import AboutCompany from './components/AboutCompany'
import AboutTeam from './components/AboutTeam'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <Header />
         
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} >
          <Route path='overview' element={<AboutOverview/>}/>
          <Route path='campany' element={<AboutCompany/>} />
          <Route path='team' element={<AboutTeam/>} />
        </Route>
        <Route path='/contact' element = {<Contact />} />
        <Route path='*' element={<NotFound/> }/>
      </Routes>
    </>
  )
}

export default App
