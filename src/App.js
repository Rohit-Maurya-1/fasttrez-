import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Route,Routes } from 'react-router-dom';
import Contact from './component/Contact';
import Services from './component/Services';
import Testinomial from './component/Testinomial';
import { Home } from './component/Home';
import AboutUs from './component/AboutUs';

function App() {

  return (
    <div className="App">

     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contect' element={<Contact/>}/>
    <Route path='/testinomial' element={<Testinomial/>}/>
    </Routes>
    </div>
  );
}

export default App;
