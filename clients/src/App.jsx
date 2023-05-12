import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home ,Auth} from './Pages'
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App