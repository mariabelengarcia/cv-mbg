import Panel from "../panel/panel";
import "./cabecera.css"


export default function Cabecera() {
  return (
    <Panel className="cabecera">
      <div>
        <h1>María Belén García</h1>
        <h2>Diseñadora en Comunicación Visual</h2>
        <h3>32 años | La Plata | Buenos Aires</h3>
      </div>
    </Panel>
  );
}