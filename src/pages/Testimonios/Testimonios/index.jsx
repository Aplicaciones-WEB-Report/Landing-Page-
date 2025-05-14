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
        <div className={`mt-0.5 w-full bg-[#85C872] transition-opacity duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="relative pt-12 pb-5 px-4 md:px-16">
                <div className="flex items-center justify-between">
                    <div className="md:w-120 w-15 h-[30px] bg-[#285A84]"></div>
                    <div className="flex flex-col gap-2 md:w-[37%] w-[20%] ">
                        <div className="h-[9px] bg-[#285A84]"></div>
                        <div className="h-[9px] bg-[#285A84]"></div>
                        <div className="h-[9px] bg-[#285A84]"></div>
                    </div>
                </div>
                <h1 className="text-center -mt-10 md:-mt-12 text-[#285A84] text-4xl md:text-5xl font-bold" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3)', fontFamily: 'Poppins' }}>
                    Testimonios
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 mt-16 px-4 md:flex-row md:justify-around md:px-10">
                <UsuariosT
                    nombre="María G."
                    cargo="CEO"
                    mensaje="Todo el proceso en una sola plataforma. Simple e intuitivo."
                    imagen={userTestmonio1}
                />
                <UsuariosT
                    nombre="Fernando Flores"
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
            </div>

            <div className="w-full h-[100px] bg-[#285A84] mt-40"></div>
        </div>
    );
}

export default Testimonio;
