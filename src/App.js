import React from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './components/Login';
import Members from './components/Members';

function App(){
  return(
    <Router>
      <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/members' element={<Members />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;