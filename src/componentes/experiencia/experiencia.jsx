import {useState} from "react";
import Panel from "../panel/panel";
import Boton from "../boton/boton";
import Individual from "./individual";
import {getExperiencies} from "./listaExperiencias";
import "./experiencia.css";


export default function Experiencia(){
    const [listaExperiencias] =
        useState(getExperiencies());
  return (
    <Panel>
      <div className="experiencia">
        <h2>Experiencia laboral</h2>
        <div class="d-flex">
          <Boton variant="secundario" texto="Eliminar última"></Boton>
          <Boton variant="secundario" texto="Eliminar primera"></Boton>
          <Boton variant="primario" texto="Agregar"></Boton>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Puesto</th>
            <th>Periodo</th>
          </tr>
        </thead>
        <tbody>
          {listaExperiencias.map((exp, index) => (
            <Individual key={index} experience={exp} />
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
