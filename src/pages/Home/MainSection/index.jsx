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
    <section className={`relative mt-0.5 bg-[#85C872] h-[729px] overflow-hidden transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>

      <div className="absolute inset-x-0 top-[35px] h-[20px] bg-[#285A84]"></div>
      <div className="absolute inset-x-0 top-[670px] h-[20px] bg-[#285A84]"></div>

      <div className={`absolute top-[90px] left-[80px] w-1/2 transition-all duration-1000 delay-300 transform ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h1 className="text-white text-6xl font-mixed leading-tight">
          Tu proceso de contratación,
        </h1>
      </div>

      <div className={`absolute top-[180px] left-[80px] w-1/2 transition-all duration-1000 delay-500 transform ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h1 className="text-white text-8xl font-bold px-4 pb-7 inline-block border-[#C2EF7E] border-5">
          automatizado y <br />
          sin complicaciones.
        </h1>
      </div>

      <div className={`absolute top-[520px] left-[80px] w-1/2 transition-all duration-1000 delay-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-white text-2xl font-alice">Software de reclutamiento</p>
      </div>

      <div className={`absolute top-[580px] left-[80px] transition-all duration-1000 delay-900 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Button
          texto="Iniciar Sesión"
          bgColor="bg-[#285A84]"
          textColor="text-white"
          sizeText="text-2xl"
          onClick={() => console.log("pruebita de que funciona")}
        />
      </div>

      <div className={`absolute translate-x-[900px] translate-y-[100px] transition-all duration-1500 delay-700 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <img src={logo2} alt="imagen principal" className="w-[600px]" />
      </div>
    </section>
  );
}

export default MainSection;
