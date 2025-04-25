import { useState, useEffect } from 'react';
import imgContactos from '../../../assets/imgContactos.png'
import Formulario from '../Formulario';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

function ContentContacto() {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
      setTimeout(() => {
        setVisible(true);
      }, 80);
    }, []);
    
    return (
      <div
        className={`absolute w-full h-screen mt-0.5 bg-cover bg-center transition-opacity duration-1000 transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{
            backgroundImage: `url(${imgContactos})`,
        }}
      >
        <div className="absolute left-0 w-140 h-[30px] bg-[#285A84]"></div>
        <div className="absolute left-[63%] w-[37%] h-[30px] bg-[#285A84]"></div>
        <div className="absolute top-[795px] left-0 w-full h-[30px] bg-[#285A84]"></div>
        <div className="text-center text-[#285A84] text-5xl" 
        style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', color: '#285A84', fontFamily: 'Poppins' }}>
                <h1>Contactanos</h1>
        </div>
        <div className="text-left absolute top-[30%] left-[10%]">
            <h1 className="text-6xl font-bold text-[#285A84] mb-4">
            ¡Estamos a un mensaje<br/>
             de distancia!
            </h1>
            <p className=" mt-7 text-2xl font-light text-[#285A84]">
             Déjanos tus datos, nuestro equipo se pondrá <br/>
              en contacto contigo enseguida.
            </p>
        </div>



        <div className="absolute right-25 top-30 ">
          <Formulario />
        </div>
  
        <div className="absolute top-[545px] right-[16.2%]">
          <Button
            texto="ENVIAR MENSAJE"
            bgColor="bg-[#285A84]"
            textColor="text-white"
            sizeText="texT-lg"
            onClick={() => console.log("pruebita de que funciona")}
          />
          
        </div>
        <div className='mt-198' >
        <Footer />
        </div>
      </div>
    );
  }
  
  export default ContentContacto;
  