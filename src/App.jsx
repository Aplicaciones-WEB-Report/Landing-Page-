import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './pages/home/MainSection';
import ContentService from './pages/Servicios/ContentService';
import AboutPage from './pages/SobreNosotros/AboutPage';
import Testimonio from './pages/Testimonios/Testimonios';
import ContentContancto from './pages/Contacto/ContentContacto';
import Membresia from './pages/Planes/Membresia';


function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<MainSection />} />
        <Route path="/servicios" element={<ContentService />} />
        <Route path="/Sobre-nosotros" element={<AboutPage />} />
        <Route path="/Testimonios" element={<Testimonio />} />
        <Route path="/Contacto" element={<ContentContancto />} />
        <Route path="/Planes" element={<Membresia />} />
      </Routes>
      
    </BrowserRouter>
  ); 
}
export default App
