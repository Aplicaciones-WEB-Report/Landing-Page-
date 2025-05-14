function Card1(){
    return(

        <div className="rounded-3xl bg-[#C2EF7E] flex flex-col items-center justify-center p-5 text-center 
                w-full h-auto md:w-64 md:h-[360px]">
              <div className="bg-[#C2EF7E] w-20 h-20 rounded-lg flex justify-center items-center mb-5 border text-[#285A84]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="24" height="16" rx="1" stroke="#1A4971" strokeWidth="2" fill="none"/>
                  <path d="M15 20L18 23L25 16" stroke="#1A4971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <p className="text-lg text-[#285A84] leading-relaxed">
                Realizar una oferta de trabajo nunca fue tan facil, con un solo click puedes envialas a diferentes redes sociales.
              </p>
        </div>
    );
}

export default Card1;