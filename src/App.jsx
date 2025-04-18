import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './pages/home/MainSection';
import ContentService from './pages/Servicios/ContentService';
import AboutPage from './pages/SobreNosotros/AboutPage';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<MainSection />} />
        <Route path="/servicios" element={<ContentService />} />
        <Route path="/Sobre-nosotros" element={<AboutPage />} />
      </Routes>
      
    </BrowserRouter>
  ); 
}
export default App
