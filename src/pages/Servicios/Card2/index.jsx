function Card2(){
    return(
        <div className="w-64 h-auto rounded-3xl bg-[#D9D9D9] flex flex-col items-center justify-center p-5 text-center">
              <div className="bg-[#D9D9D9] w-20 h-20 rounded-lg flex justify-center items-center mb-5 border text-[#285A84]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="24" height="4" rx="1" stroke="#1A4971" strokeWidth="2" fill="none"/>
                  <rect x="8" y="18" width="20" height="4" rx="1" stroke="#1A4971" strokeWidth="2" fill="none"/>
                  <rect x="8" y="24" width="24" height="4" rx="1" stroke="#1A4971" strokeWidth="2" fill="none"/>
                  <path d="M22 6L22 12M22 9L18 9" stroke="#1A4971" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-[#285A84] leading-relaxed">
                Deja que la IA analice a tus posibles candidatos y te brinde los mejores postores.
              </p>
        </div>
    );
}
export default Card2;