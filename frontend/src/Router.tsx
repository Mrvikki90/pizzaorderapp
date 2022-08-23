import { Route,Routes } from 'react-router-dom'
import Cartitems from './Cartitems'
import Homepage from './Homepage'
import Login from './Login'
import Nav from './Nav'
import Signup from './Signup';



const Router = () => {  

 
    return (
  <>
  <Nav/>    
  <Routes>
  <Route path='/' element={<Homepage/> } />
  <Route path='/cartitems' element={<Cartitems/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>} />
  </Routes>
  </>
  )
}

export default Router