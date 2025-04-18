import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import Card4 from "../card4";

function ContentService(){
    return (
        <section className="w-full px-5">
            <div className="absolute top-[98px] left-0 w-full h-[30px] bg-[#285A84]"></div>
            <div className="absolute top-[795px] left-0 w-full h-[30px] bg-[#285A84]"></div>

            <div className="flex justify-around mt-35">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>

            <div className="text-center mt-30" >
                <h1 className="text-5xl" style={{textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',color: '#285A84', fontFamily: 'Poppins, sans-serif'}}>
                    Servicios</h1>
            </div>
        </section>
      );
}
export default ContentService;