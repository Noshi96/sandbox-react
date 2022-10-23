import React from 'react'
import logo from './logo.svg'
import './App.css'
import NavHeader from './components/NavHeader/NavHeader'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
// import PageTwo from './pages/PageTwo'
import Page404 from './pages/Page404'
import User from './pages/User'
import FilterPage from './pages/FilterPage'
import Profile from './pages/Profile'
import Account from './pages/Account'
const LazyPageTwo = React.lazy(() => import('./pages/PageTwo'))

function App () {
  return (
    <>
      <div className='App'>
        <NavHeader />
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/page-1' element={<PageOne />} />
        <Route
          path='/page-2/'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyPageTwo />
            </React.Suspense>
          }
        />

        <Route path='/user/:userName/' element={<User />}>
          <Route index element={<Profile />} />
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path='/filter' element={<FilterPage />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
