// import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Route,Routes } from 'react-router-dom'
import data from './data';
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home data={data} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
