import { useEffect, useState } from "react";
import img1_nosotros from "../../../assets/img1_nosotros.png";
import img2_nosotros from "../../../assets/img2_nosotros.png";

function AboutPage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 80);
    }, []);

    return (
        <div
            className={`w-full mt-0.5 transition-opacity duration-1000 transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="bg-[#85C872] flex flex-col items-center justify-center p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Nuestra Misión</h2>
                    <p className="text-white text-xl md:text-2xl mx-auto max-w-md">
                        Simplificar los procesos de contratación para empresas de todo el mundo, utilizando
                        tecnología avanzada y un diseño centrado en el usuario.
                    </p>
                </div>

                <div className="w-full h-64 md:h-auto">
                    <img
                        src={img1_nosotros}
                        alt="Equipo de trabajo"
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                </div>

                <div className="w-full h-64 md:h-auto">
                    <img
                        src={img2_nosotros}
                        alt="Candidatos entrevista"
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                </div>

                <div className="bg-[#85C872] flex flex-col items-center justify-center p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Nuestra Visión</h2>
                    <p className="text-white text-xl md:text-2xl mx-auto max-w-md">
                        Ser la plataforma líder en gestión de talento, ofreciendo soluciones innovadoras que
                        revolucionen la industria del empleo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
