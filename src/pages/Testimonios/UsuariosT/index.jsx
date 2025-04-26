import { useEffect, useState } from "react";

function UsuariosT({ nombre, cargo, mensaje, imagen }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 300);
    }, []);

    return (
        <div className={`w-[300px] h-[320px] border-[#285A84] border-4 p-4 bg-white shadow-lg text-center transition-opacity duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <img src={imagen} alt={nombre} className="w-35 h-42 rounded-full mx-auto mb-2 -mt-16"/>
            <p className="text-black">"{mensaje}"</p>
            <h2 className="text-[#285A84] font-bold mt-2">{nombre}</h2>
            <p className="text-gray-500">{cargo}</p>
        </div>
    );
}
export default UsuariosT;

