import './App.css';
import "./static/css/font-awesome.css";
import "./static/js/custom";

import Header from "./header/header";
import Home from "./home/home";
import About from "./about/about";
import Services from "./services/services";
import Products from "./products/products";
import Careers from "./careers/careers";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/service' element = {<Services />} />
          <Route path='/product' element = {<Products />} />
          <Route path='/career' element = {<Careers />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </BrowserRouter>     
      
      <Footer />
    </div>
  );
}


export default App;
