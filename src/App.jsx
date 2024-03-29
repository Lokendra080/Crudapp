
import './index.css'

import  Home  from './Components/Home'
import Header from './Components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './Components/Create';
import Update from './Components/Update';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
