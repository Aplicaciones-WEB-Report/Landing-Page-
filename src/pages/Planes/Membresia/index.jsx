import { useEffect, useState } from "react";
import Standar from "../Standard";
import Enterprise from "../Enterprise";

export default function Planes() {
    const [visible, setVisible] = useState(false);
    
        useEffect(() => {
            setTimeout(() => {
                setVisible(true);
            }, 80);
        }, []);

  return (
    <div className={`font-serif text-[#234067] min-h-screen transition-opacity duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="absolute -mt-3 left-0 w-full h-90 bg-[#85C872] -z-10"></div>
         <div className="absolute top-[9px] left-0 w-162 h-[30px] bg-[#285A84]"></div>
         <div className="absolute top-[9px] left-[57%] w-[50%] h-[30px] bg-[#285A84]"></div>
         <div className="text-center mt-3.5 text-[#285A84] text-5xl" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', color: '#285A84', fontFamily: 'Poppins' }}>
                <h1>Planes</h1>
        </div>

        <div className="text-center mt-7">
            <h1 className="font-markazi text-[#285A84] text-4xl mb-4">Prepárese para su próxima gran contratación</h1>
        </div>
        <div className="flex justify-center gap-x-25 mt-35">
        <Standar />
        <Enterprise />
        </div> 


    </div>
  );
}
