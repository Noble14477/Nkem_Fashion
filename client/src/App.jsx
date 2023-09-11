import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import HomeDashboard from './pages/Admin/HomeDashboard'
import Category from './pages/Admin/Category'
import Product from './pages/Admin/Product'
import Shop from './pages/Shop'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/admin-dashboard' element={<HomeDashboard/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/products' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
