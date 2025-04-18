import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import Button from '../Button';

function Navbar(){
  return (
    <nav className="flex justify-between px-10 shadow-sm py-4 font-[Alexandria]">
  
      <div className="flex items-center space-x-2">
      <Link to="/Home"><img src={logo} alt="Jobsy Logo" className="w-50 h-16" /></Link>
      </div>

      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6 text-[#124072] text-sm font-medium">
          <li className="hover:underline underline-offset-4 cursor-pointer"><Link to="/Sobre-nosotros">Sobre nosotros</Link></li>
          <li className="hover:underline underline-offset-4 cursor-pointer"><Link to="/Servicios">Servicios</Link></li>
          <li className="hover:underline underline-offset-4 cursor-pointer"><Link to="/Testimonios">Testimonios</Link></li>
          <li className="hover:underline underline-offset-4 cursor-pointer"><Link to="/Contacto">Contacto</Link></li>
          <li className="hover:underline underline-offset-4 cursor-pointer"><Link to="/Planes">Planes</Link></li>
        </ul>
        
        <div className='mt-2.3'>    
         <Button 
            texto="Registrarse"
            bgColor="bg-[#75C254]"
            textColor="text-white"
            onClick={() => console.log("Registrarse clicked")}
          />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;