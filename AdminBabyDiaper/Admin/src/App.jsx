import React from 'react'
import "./styles/Style.css"
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import All_Products from './pages/All_Products'
import Categories_create from './pages/Categories_create'
import Brands_create from './pages/Brands_create'
import Products_create from './pages/Products_create'
import FooterCopyright from './Components/FooterCopyright'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/All_Products" element={<All_Products />} />
        <Route path="/create_Products" element={<Products_create />} />
        <Route path="/Create_Category" element={<Categories_create />} />
        <Route path="/create_brands" element={<Brands_create />} />
        <Route path="/copyright" element={<FooterCopyright />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App