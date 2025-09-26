import "./boton-flotante.css";
import "./primario-flotante.css";
import "./secundario-flotante.css";


export default function BotonFlotante({ children, href, variant = "primario", ariaLabel }) {
  const clase = variant === "secundario" ? "secundario-flotante" : "primario-flotante";

  return (
    <a href={href} aria-label={ariaLabel} className={`boton-flotante ${clase}`} >
      {children}
    </a>
  );
}