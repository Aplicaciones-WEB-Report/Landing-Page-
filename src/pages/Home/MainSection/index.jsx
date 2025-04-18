import Button from '../../../components/Button';
import logo2 from '../../../assets/logo2.png'; 

function MainSection(){
    return (
        <section className="relative mt-0.5 bg-[#85C872] h-[729px] overflow-hidden">
          <div className="absolute top-[35px] left-0 w-full h-[20px] bg-[#285A84]"></div>
          <div className="absolute top-[670px] left-0 w-full h-[20px] bg-[#285A84]"></div>
          
          <div className="absolute top-[90px] left-[80px] w-1/2">
            <h1 className="text-white text-6xl font-mixed leading-tight">
              Tu proceso de contratación,
            </h1>
          </div>

          <div className="absolute top-[180px] left-[80px] w-1/2">
            <h1 className="text-white text-8xl font-bold px-4 pb-7 inline-block border-[#C2EF7E] border-5 ">
              automatizado y <br/>
              sin complicaciones.
            </h1>
          </div>

          <div className="absolute top-[520px] left-[80px] w-1/2">
            <p className="text-white text-2xl font-alice">
              Software de reclutamiento
            </p>
          </div>

          <div className='absolute top-[580px] left-[80px]'>    
            <Button 
            texto="Iniciar Sesión"
            bgColor="bg-[#285A84]"
            textColor="text-white"
            sizeText="text-2xl"
            onClick={() => console.log("iniciarSesion clicked")}
            />
          </div>
          
          <div className="overflow-hidden translate-x-225 translate-y-22 inline-block ">
              <img src={logo2} alt="imagen pricipal" className="w-150"/>
          </div>
        </section>
      );
    
}

export default MainSection;