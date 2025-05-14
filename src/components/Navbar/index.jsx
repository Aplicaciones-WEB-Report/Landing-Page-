import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.png'; 
import Button from '../Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between px-4 md:px-10 shadow-sm py-4 font-[Alexandria] relative">
      {/* Logo - siempre visible */}
      <div className="flex items-center">
        <NavLink to="/Home">
          <img src={logo} alt="Jobsy Logo" className="w-32 h-10 md:w-50 md:h-16" />
        </NavLink>
      </div>

      {/* Botón de hamburguesa - solo visible en móvil */}
      <button 
        className="md:hidden flex items-center" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-[#124072]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex items-center space-x-6 text-[#124072] text-sm font-medium">
          <li><NavLink to="/Sobre-nosotros" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Sobre nosotros</NavLink></li>
          <li><NavLink to="/Servicios" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Servicios</NavLink></li>
          <li><NavLink to="/Testimonios" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Testimonios</NavLink></li>
          <li><NavLink to="/Contacto" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Contacto</NavLink></li>
          <li><NavLink to="/Planes" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Planes</NavLink></li>
        </ul>

        <div className="mt-2.3">
          <Button
            texto="Registrarse"
            bgColor="bg-[#75C254]"
            textColor="text-white"
            onClick={() => console.log("Pruebita de que si da")}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <ul className="flex flex-col space-y-3 p-4 text-[#124072] text-sm font-medium">
            <li><NavLink to="/Sobre-nosotros" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"} onClick={toggleMenu}>Sobre nosotros</NavLink></li>
            <li><NavLink to="/Servicios" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"} onClick={toggleMenu}>Servicios</NavLink></li>
            <li><NavLink to="/Testimonios" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"} onClick={toggleMenu}>Testimonios</NavLink></li>
            <li><NavLink to="/Contacto" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"} onClick={toggleMenu}>Contacto</NavLink></li>
            <li><NavLink to="/Planes" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"} onClick={toggleMenu}>Planes</NavLink></li>
            <li className="pt-2">
              <Button
                texto="Registrarse"
                bgColor="bg-[#75C254]"
                textColor="text-white"
                onClick={() => {
                  console.log("Pruebita de que si da");
                  toggleMenu();
                }}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;