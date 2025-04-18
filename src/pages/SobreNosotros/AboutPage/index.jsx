import img1_nosotros from '../../../assets/img1_nosotros.png'; 
import img2_nosotros from '../../../assets/img2_nosotros.png'; 


function AboutPage(){
    return(
        <div className="w-full mt-0.5">
        <div className="grid grid-cols-2 w-full ">
        
          <div className="bg-[#85C872] flex flex-col items-center justify-center p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestra Misión</h2>
            <p className="text-white text-2xl mx-auto max-w-md">
              Simplificar los procesos de contratación para empresas de todo el mundo, utilizando 
              tecnología avanzada y un diseño centrado en el usuario.
            </p>
          </div>
  
          <div className="w-full">
            <img 
              src={img1_nosotros} 
              alt="Equipo de trabajo" 
              className="w-full h-full object-cover" 
            />
          </div>
  
          <div className="w-full">
            <img 
              src={img2_nosotros} 
              alt="Candidatos entrevista" 
              className="w-full h-full object-cover" 
            />
          </div>
  
          <div className="bg-[#85C872] flex flex-col items-center justify-center p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Nuestra Visión</h2>
            <p className="text-white text-2xl mx-auto max-w-md">
              Ser la plataforma líder en gestión de talento, ofreciendo soluciones innovadoras que 
              revolucionen la industria del empleo.
            </p>
          </div>
        </div>
      </div>
      );

}
export default AboutPage;