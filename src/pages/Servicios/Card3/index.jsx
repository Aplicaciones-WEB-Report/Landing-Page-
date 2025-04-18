function Card3(){
    return(
        <div className="w-64 h-auto rounded-3xl bg-[#85C872] flex flex-col items-center justify-center p-5 text-center">
              <div className="bg-[#85C872] w-20 h-20 rounded-lg flex justify-center items-center mb-5 border text-[#285A84]">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="10" stroke="#1A4971" strokeWidth="2" fill="none"/>
                  <path d="M20 14v6l4 2" stroke="#1A4971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-lg text-[#285A84] leading-relaxed">
                Procesos rápidos que ahorran tiempo y recursos valiosos.
              </p>
        </div>
    );
}
export default Card3;