import {useState} from "react";
import Panel from "../panel/panel";
import Boton from "../boton/boton";
import "./cabecera.css"


export default function Cabecera() {

  const [edad, setEdad] = useState(32); // estado inicial

  const aumentarEdad = () => {
    setEdad(edad + 1);
  };
  return (
    <Panel className="cabecera">
      <div>
        <h1>María Belén García</h1>
        <h2>Diseñadora en Comunicación Visual</h2>
        <h3>{edad} años | La Plata | Buenos Aires</h3>
           <Boton variant="primario" texto="Aumentar edad" onClick={aumentarEdad} ></Boton>
        
      </div>
    </Panel>
  );
}