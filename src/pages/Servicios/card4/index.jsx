function Card4(){
    return(
        <div className="w-64 h-auto rounded-3xl bg-[#B0E7B1] flex flex-col items-center justify-center p-5 text-center">
              <div className="bg-[#B0E7B1] w-20 h-20 rounded-lg flex justify-center items-center mb-5 border text-[#285A84]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="16" r="6" stroke="#1A4971" strokeWidth="2" fill="none"/>
                  <path d="M32 30c0-5.523-5.373-10-12-10s-12 4.477-12 10" stroke="#1A4971" strokeWidth="2"/>
                  <path d="M27 12l4 4" stroke="#1A4971" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M31 8l2 2" stroke="#1A4971" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-[#285A84] leading-relaxed">
                Nuestro equipo está disponible 24/7 para resolver cualquier duda o problema.
              </p>
        </div>
        
    );
}
export default Card4;