import { FaTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="w-full bg-[#285A84] text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 flex justify-between items-start transition-transform duration-300 hover:scale-105">
  
          <div className="flex flex-col items-center text-center w-1/3">
            <h2 className="text-3xl font-bold mb-3">Jobsy</h2>
            <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
              Automatización elegante para un<br />mundo laboral mejor.
            </p>
          </div>
  
          <div className="flex flex-col items-center w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:underline hover:text-gray-300 transition-colors duration-300">Inicio</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300 transition-colors duration-300">Servicios</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-300 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
  
          <div className="flex flex-col items-center w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  

export default Footer;