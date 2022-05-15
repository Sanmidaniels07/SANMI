import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Section1 from './Section1';
import List from './List';
import Useeffect from './Useeffect';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Foooter from './Foooter';





function App() {
  return (
    <div className="App">
     <Main/>
     <Footer/>
     <Section1/>
     <List/>
     <Useeffect/>
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route index element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='services' element={<Services/>}/>

     </Routes>
     <Foooter/>
     
     </BrowserRouter>
     </div>
  )
}

export default App;
  