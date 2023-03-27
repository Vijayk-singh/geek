import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './componants/Auth/Login';
import Home from './componants/Home';

import CompanyInfo from "./componants/CompanyInfo";
import Auth from "./componants/Auth/Auth";

function App() {
  var login =false;
  login = localStorage.getItem('login');
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        {/* path="/" element={login?<Home/>:<Login/>} */}
          <Route index element= {login?<Home/>:<Auth/>} />
          <Route path="/Companyinfo" element={<CompanyInfo/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
