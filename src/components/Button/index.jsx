function Button({ texto, bgColor, textColor, sizeText, onClick }){
  return (
    <button
      onClick={onClick}
      className={`
        px-7 py-3 rounded-full font-Alexandria
        ${bgColor} ${textColor} ${sizeText}
      `}
    >
      {texto}
    </button>
  );
}
export default Button;