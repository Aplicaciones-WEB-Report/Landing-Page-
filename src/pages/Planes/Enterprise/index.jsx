import { FaUserPlus} from "react-icons/fa";

function Enterprise(){
    return (
        <div className="w-70 rounded">
          <div className="bg-[#C2EF7E] rounded-md p-3 mb-2 flex items-center justify-center">
            <FaUserPlus className="text-[#285A84] mr-2" size={24} />
            <span className="text-[#285A84] font-medium">EMPRESARIAL</span>
          </div>
          
          {/* Price box */}
          <div className="bg-[#C2EF7E] rounded-md p-4 mb-2 flex flex-col items-center">
            <div className="flex items-start">
              <span className="text-[#285A84] text-sm">US$</span>
              <span className="text-[#285A84] text-4xl font-medium">43</span>
              <span className="text-[#285A84] text-xl">.72</span>
            </div>
            <span className="text-[#285A84] font-medium">PRO PLAN</span>
          </div>
          
          {/* Features box */}
          <div className="bg-[#C2EF7E] rounded-md p-4 mb-2 flex flex-col items-center">
            <div className="w-full flex flex-col items-center text-[#285A84]">
              <p className="mb-2">Automatización avanzada</p>
              <p className="mb-2">Soporte 24/7</p>
              <p className="mb-6">Analisis detallado</p>
              
              <button className="border-2 border-[#285A84] text-[#285A84] px-6 py-1 rounded-md">
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      );
}
export default Enterprise;