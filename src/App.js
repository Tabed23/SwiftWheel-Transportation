import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Routes, Route } from 'react-router-dom';


import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NoMatch from './components/404/Notfound'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Carlemoservice from './components/Calemoservice/Carlemoservice'
import Inboundservice from './components/Inboundservice/Inboundservice'
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/carlemoservice" element={<Carlemoservice />} />
        <Route path="/inboundservice" element={<Inboundservice />} />
        <Route path="/blog" element={<Blog />} />


        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Home /> */}

      <Footer />
    </div>
  );
}

export default App;
