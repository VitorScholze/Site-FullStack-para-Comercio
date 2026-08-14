
import './App.css'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Orders } from './pages/Orders';
import { OrderDetails } from './pages/OrderDetails';
import { MainLayout } from './layouts/MainLayout';

function App() {
  

  return (
      <BrowserRouter>

        <Routes>

          <Route element={<MainLayout/>}>

          <Route path = "/" element = {<Home/>}/>

          <Route path = "/produtos" element = {<Products/>}/>

          <Route path = "/produtos/:id" element = {<ProductDetails/>}/>

          <Route path = "/carrinho" element = {<Cart/>}/>

          <Route path = "/login" element = {<Login/>}/>

          <Route path = "/register" element = {<Register/>}/>

          <Route path = "/pedidos" element = {<Orders/>}/>

          <Route path = "/pedido/:id" element = {<OrderDetails/>}/>

          </Route>

        </Routes>
  
      </BrowserRouter>
  )
}

export default App
