import Perfil from "./componentes/perfil/perfil";
import Cabecera from "./componentes/cabecera/cabecera";
import Experiencia from "./componentes/experiencia/experiencia";
import Educacion from "./componentes/educacion/educacion";
import Contacto from "./componentes/contacto/contacto";
import BotonFlotante from "./componentes/boton-flotante/botonFlotante";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <div className="d-flex">
          <Perfil />
          <Cabecera />
        </div>
        <Experiencia />
        <Educacion />
        <Contacto />
        <section>
          <div class="flotar">
            <BotonFlotante
              href="mailto:mariabelengarcia.dcv@gmail.com"
              aria-label="Enviar correo a María Belén García"
              variant="secundario"
            >
              <img src="mail.svg" alt="" aria-hidden="true" class="icono" />
            </BotonFlotante>
            <BotonFlotante
              href="tel:+542210000000"
              aria-label="Llamar al teléfono de María Belén García"
              variant="primario"
            >
              <img src="mobile.svg" alt="" aria-hidden="true" class="icono" />
            </BotonFlotante>
          </div>
        </section>
      </main>
    </div>
  );
}
