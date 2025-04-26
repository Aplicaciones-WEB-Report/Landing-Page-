function Formulario() {
    return (
      <form action="#" method="POST" className="w-[500px] bg-transparent">
        <div className="space-y-6.5">
          <div>
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 border-4 border-[#285A84] rounded-lg text-black bg-white"
            />
          </div>
  
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border-4 border-[#285A84] rounded-lg text-black bg-white"
            />
          </div>
  
          <div>
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full p-3 border-4 border-[#285A84] rounded-lg text-black bg-white"
            />
          </div>
  
          <div>
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              className="w-full p-3 border-4 border-[#285A84] rounded-lg text-black bg-white"
              rows="5"
            />
          </div>
        </div>
      </form>
    );
  }
  
  export default Formulario;