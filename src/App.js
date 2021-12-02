import Navbar from './components/Navbar' 
import { Routes,Route} from 'react-router-dom'
import UserForm from './pages/UserForm'

import Home from './pages/Home'

import './App.css'
import Prices from './pages/Prices'
import Clients from './pages/Clients'


function App() {
  return (
   <>
    
     <Navbar/>
     <Routes>
     <Route path='/'  exact element={<Home/>} />
          <Route path='/reports' element= {<UserForm/>}  />
          <Route path='/products' element={<Prices/>} />
          
          </Routes>
          
      
   <Prices/>
   <Clients/>
   
   </>
  );
}

export default App;
