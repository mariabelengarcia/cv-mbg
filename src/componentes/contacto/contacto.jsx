import Panel from "../panel/panel";
import Boton from "../boton/boton";
import Input from "../input/input";
import Textarea from "../text-area/textArea";
import "./contacto.css";

export default function Contacto() {
  return (
    <Panel>
      <section class="form">
        <div class="formulario">
          <h2>Contacto</h2>
          <form id="form-contact">
            <Input label="Nombre*" id="nombre" type="text" required />
            <Input label="Teléfono*" id="telefono" type="numb" required />
            <Textarea label="Mensaje*" id="mensaje" required />
            <div>
              <Boton variant="primario" texto="Enviar"></Boton>
            </div>
          </form>
        </div>

        <div class="imagen">
          <img
            src="contacto.jpg"
            class="img-contacto"
            alt="mujer ilustrada con sobre de mensaje y celular"
          />
        </div>
      </section>
    </Panel>
  );
}
