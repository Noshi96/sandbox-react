import logo from './logo.svg'
import './App.css'
import NavHeader from './components/NavHeader/NavHeader'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

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
        <Route path='/page-2' element={<PageTwo />} />
      </Routes>
    </>
  )
}

export default App
