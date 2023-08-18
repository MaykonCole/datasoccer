import Banner from "./Componentes/Banner/Banner";
import Formulario from "./Componentes/Formulario/Formulario";
import "./App.css";
import { useState } from "react";
import Continente from "./Componentes/Continente/Continente";

function App() {
  const continentes = [
    {
      nome: "América",
      corPrimaria: "#F4A460",
      corSecundaria: "#FFDEAD",
    },
    {
      nome: "Europa",
      corPrimaria: "#DA70D6",
      corSecundaria: "#DDA0DD",
    },
    {
      nome: "África",
      corPrimaria: "#C0C0C0",
      corSecundaria: "#D3D3D3",
    },
    {
      nome: "Ásia",
      corPrimaria: "#F08080",
      corSecundaria: "#FFC0CB",
    },
    {
      nome: "Oceania",
      corPrimaria: "#87CEEB",
      corSecundaria: "#ADD8E6",
    },
  ];
  const [campeonatos, setCampeonatos] = useState([]);

  const addNovoCampeonato = (campeonato) => {
    console.log("APP -> ", campeonato);
    setCampeonatos([...campeonatos, campeonato]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Formulario
          titulo="Preencha os campos para criar um novo campeonato"
          continentes={continentes.map((continente) => continente.nome)}
          salvarFormulario={(campeonato) => addNovoCampeonato(campeonato)}
        />
        {continentes.map((continente) => (
          <Continente
            key={continente.nome}
            nome={continente.nome}
            corPrimaria={continente.corPrimaria}
            corSecundaria={continente.corSecundaria}
            campeonatos={campeonatos.filter(
              (camp) => camp.continente === continente.nome
            )}
          ></Continente>
        ))}
      </header>
    </div>
  );
}

export default App;
