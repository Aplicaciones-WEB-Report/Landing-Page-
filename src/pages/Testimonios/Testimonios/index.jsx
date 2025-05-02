import { useEffect, useState } from "react";
import UsuariosT from "../usuariosT";
import userTestmonio1 from "../../../assets/userTestmonio1.jpg";
import userTestimonio2 from "../../../assets/userTestimonio2.jpg";
import userTestimonio3 from "../../../assets/userTestimonio3.jpg";

function Testimonio() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 80);
    }, []);

    return (
        <div className={`absolute w-full h-screen mt-0.5 bg-[#85C872] transition-opacity duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="absolute top-[25px] left-0 w-140 h-[30px] bg-[#285A84]"></div>
            <div className="absolute top-[20px] left-[63%] w-[37%] h-[9px] bg-[#285A84]"></div>
            <div className="absolute top-[38px] left-[63%] w-[37%] h-[9px] bg-[#285A84]"></div>
            <div className="absolute top-[56px] left-[63%] w-[37%] h-[9px] bg-[#285A84]"></div>
            

            <div className="text-center mt-4 text-[#285A84] text-5xl" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', color: '#285A84', fontFamily: 'Poppins' }}>
                <h1>Testimonios</h1>
            </div>
            
            <div className="flex justify-around mt-28">
                <UsuariosT
                    nombre="María G."
                    cargo="CEO"
                    mensaje="Todo el proceso en una sola plataforma. Simple e intuitivo."
                    imagen={userTestmonio1}
                />
                <UsuariosT
                    nombre="Fernando Flores."
                    cargo="Postulante"
                    mensaje="Envié mi perfil y en menos de una semana ya tenía entrevistas agendadas."
                    imagen={userTestimonio2}
                />
                <UsuariosT
                    nombre="Carlos Marcel"
                    cargo="Reclutador"
                    mensaje="El sistema de matching nos conecta con candidatos realmente calificados."
                    imagen={userTestimonio3}
                />
                <div className="absolute top-[720px] left-0 w-full h-[120px] bg-[#285A84]"></div>
            </div>
        </div>
    );
}

export default Testimonio;
