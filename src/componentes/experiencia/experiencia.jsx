import {useState} from "react";
import Panel from "../panel/panel";
import Boton from "../boton/boton";
import Individual from "./individual";
import {getExperiencies} from "./listaExperiencias";
import "./experiencia.css";

export default function Experiencia(){
    const [listaExperiencias, setExperiencias] =
        useState(getExperiencies());



  // 🗑️ Eliminar última
  const eliminarUltima = () => {
    setExperiencias(prev => prev.slice(0, -1));
  };

  // 🗑️ Eliminar primera
  const eliminarPrimera = () => {
    setExperiencias(prev => prev.slice(1));
  };

  return (
    <Panel>
      <div className="experiencia">
        <h2>Experiencia laboral</h2>
        <div class="d-flex">
          <Boton variant="secundario" texto="Eliminar última" onClick={eliminarUltima}></Boton>
          <Boton variant="secundario" texto="Eliminar primera" onClick={eliminarPrimera}></Boton>
       
        </div>
        
      </div>

      <table>
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Institución / Empresa</th>
            <th>Periodo</th>
          </tr>
        </thead>
        <tbody>
          {listaExperiencias.map((exp) => (
            <Individual key={exp.id} experience={exp} />
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

