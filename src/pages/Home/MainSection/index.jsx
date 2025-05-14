import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import logo2 from '../../../assets/logo2.png';

function MainSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 80);
  }, []);

  return (
    <section className="relative bg-[#85C872] min-h-screen flex flex-col md:flex-row  mt-0.5 items-center md:items-start justify-between px-6 md:px-24 py-10">

  <div className="absolute inset-x-0 top-5 h-[20px] bg-[#285A84]" />
  <div className="absolute inset-x-0 md:bottom-5 bottom-1 h-[20px] bg-[#285A84]" />

  <div className={`max-w-3xl w-full mt-10 md:mt-25 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h1 className="text-white text-5xl md:text-6xl lg:text-6xl text-center md:text-left md:whitespace-nowrap">
      Tu proceso de contratación,
    </h1>

    <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mt-4 border-4 border-[#C2EF7E] px-4 pb-7 text-center md:text-left break-words max-w-full">
      automatizado y <br className="block md:hidden" /> sin complicaciones.
    </h1>
    <p className="text-white text-xl mt-6 text-center md:text-left">
      SOFTWARE DE RECLUTAMIENTO
    </p>
    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
      <Button
        texto="Iniciar Sesión"
        bgColor="bg-[#285A84]"
        textColor="text-white"
        sizeText="text-xl"
        onClick={() => console.log("pruebita de que funciona")}
      />
    </div>
  </div>

  <div className={`mt-5 md:mt-30 md:ml-10 transition-all duration-1500 delay-700 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
  <img 
    src={logo2} 
    alt="imagen principal" 
    className="w-64 md:w-[35rem] object-cover" 
  />
</div>
</section>
  );
}
export default MainSection;


