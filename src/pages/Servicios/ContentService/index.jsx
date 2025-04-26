import { useEffect, useState } from "react";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import Card4 from "../card4";

function ContentService() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 80);
    }, []);

    return (
        <section className={`w-full px-5 transition-opacity duration-1000 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="absolute -mt-22 left-0 w-full h-[30px] bg-[#285A84]"></div>
            <div className="absolute top-[795px] left-0 w-full h-[30px] bg-[#285A84]"></div>

            <div className="text-center mt-23">
                <h1 className="text-5xl" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', color: '#285A84', fontFamily: 'Poppins, sans-serif' }}>
                    Servicios
                </h1>
            </div>

            <div className="flex justify-around mt-28">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
        </section>
    );
}

export default ContentService;
