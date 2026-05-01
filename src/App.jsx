import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DashboardRouter from './routers/DashboardRouter'
import MainLayout from './layouts/MainLayout'
import Header from './components/Header/Header'
import DashboardHomeLayout from './layouts/DashboardHomeLayout'
import DashboardHomePage from './pages/DashboardHome/DashboardHomePage'
import { AuthContextProvider } from './hooks/AuthenticationContext'
function App() {

  return (
    <>
      {/* <a href='/home'>Go to home</a> */}
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/*' element={
              <DashboardHomePage>

              </DashboardHomePage>
            } />
            {/* <Route path='/dashboard' element={<HomePage />} /> */}
            <Route path='/dashboard/*' element={<DashboardRouter></DashboardRouter>} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App
