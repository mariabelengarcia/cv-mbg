import "./primario.css"
import "./secundario.css"

export default function Boton({ texto, variant = "primario", onClick, type = "button" }) {
  const clase = variant === "secundario" ? "boton-secundario" : "boton-primario";

  return (
    <button type={type} className={`boton ${clase}`} onClick={onClick}>
       {texto}
    </button>
  );
}
