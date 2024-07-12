import React from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './components/Login';
import LandingPage from "./pages/landingPage";
import Members from './components/Members';
import Dashboard from "./components/dashboard";

function App(){
  return(
    <Router>
      <div>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/members' element={<Members />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;