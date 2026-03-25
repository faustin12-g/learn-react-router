import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NotFound from './components/NotFound'
import Header from './components/Header'
import DashboardLayout from './components/DashboardLayout'
import DashboardUsers from './components/DashboardUsers'
import DashboardTodos from './components/DashboardTodos'
import DashboardPosts from './components/DashboardPosts'
import LandingLayout from './components/LandingLayout'
import DashboardComments from './components/DashboardComments'
import DashboardAlbums from './components/DashboardAlbums'
import DashboardPhotos from './components/DashboardPhotos'

const App = () => {
  return (
    <>  
      <Routes>
        <Route element={<LandingLayout />} >
          <Route path='/' element={<LandingPage/>} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='users' element={<DashboardUsers />} />
          <Route path='todos' element={<DashboardTodos />} />
          <Route path='posts' element={<DashboardPosts />} />
          <Route path='comments' element={<DashboardComments />} />
          <Route path='albums' element={<DashboardAlbums />} />
          <Route path='photos' element={<DashboardPhotos />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
