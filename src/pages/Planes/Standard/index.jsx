import { FaUser} from "react-icons/fa";

function Standar(){
    return (
        <div className="w-70 rounded">
          {/* Top box with user icon */}
          <div className="bg-[#B0E7B1] rounded-md p-3 mb-2 flex items-center justify-center">
            <FaUser className="text-[#285A84] mr-2" size={20} />
            <span className="text-[#285A84] font-medium">ESTÁNDAR</span>
          </div>
          
          {/* Price box */}
          <div className="bg-[#B0E7B1] rounded-md p-4 mb-2 flex flex-col items-center">
            <div className="flex items-start">
              <span className="text-[#285A84] text-sm">US$</span>
              <span className="text-[#285A84] text-4xl font-medium">0</span>
              <span className="text-[#285A84] text-xl">.00</span>
            </div>
            <span className="text-[#285A84] font-medium">FREE PLAN</span>
          </div>
          
          {/* Features box */}
          <div className="bg-[#B0E7B1]  rounded-md p-4 mb-2 flex flex-col items-center">
            <div className="w-full flex flex-col items-center text-[#285A84]">
              <p className="mb-2">Automatización básica</p>
              <p className="mb-2">Soporte por email</p>
              <p className="mb-6">Análisis básico</p>
              
              <button className="border-2 text-[#285A84] px-6 py-1 rounded-md">
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      );
}
export default Standar;