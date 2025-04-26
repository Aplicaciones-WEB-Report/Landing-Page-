import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import Button from '../Button';

function Navbar() {
  return (
    <nav className="flex justify-between px-10 shadow-sm py-4 font-[Alexandria]">
      <div className="flex items-center space-x-2">
        <NavLink to="/Home"><img src={logo} alt="Jobsy Logo" className="w-50 h-16" /></NavLink>
      </div>

      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6 text-[#124072] text-sm font-medium">
          <li><NavLink to="/Sobre-nosotros" className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Sobre nosotros</NavLink></li>
          <li><NavLink to="/Servicios"className={({ isActive }) => isActive ? "underline underline-offset-4 text-[#285A84]" : "hover:underline underline-offset-4"}>Servicios</NavLink></li>
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
    </nav>
  );
}

export default Navbar;
