import Banner from "./Componentes/Banner/Banner";
import Formulario from "./Componentes/Formulario/Formulario";
import "./App.css";
import { useState } from "react";
import Continente from "./Componentes/Continente/Continente";

function App() {

  const campeonatosUrls = [
    {
      nome: "Brasileirão",
      url: "https://static.flashscore.com/res/image/data/WjWuNoU1-0Wa6qdtI.png"
    },
    {
      nome: "Egyptian Premier League",
      url: "https://static.flashscore.com/res/image/data/0rKZm2hU-IJvaKHzf.png"
    },
    {
      nome: "La Liga",
      url: "https://static.flashscore.com/res/image/data/8tslw3T1-8AUkVLDE.png"
    },
    {
      nome: "National League",
      url: "https://static.flashscore.com/res/image/data/n17bumkD-pOsOhLO3.png"
    },
    {
      nome: "Série A",
      url: "https://static.flashscore.com/res/image/data/pv8pwbmd-r3RNQp13.png"
    },
    {
      nome: "Liga MX",
      url: "https://static.flashscore.com/res/image/data/rmBkYwEO-ptBqq0eE.png"
    },
    {
      nome: "Super League",
      url: "https://static.flashscore.com/res/image/data/GfrkdPTp-SUBNYNAR.png"
    },
    {
      nome: "Liga Professional",
      url: "https://static.flashscore.com/res/image/data/xxybedDO-dvBaf7jc.png"
    },
    {
      nome: "Bundesliga",
      url: "https://static.flashscore.com/res/image/data/8EfUidTp-fwPHGLfg.png"
    },
    {
      nome: "Liga J1",
      url: "https://static.flashscore.com/res/image/data/6F7NbhiD-04klE5nR.png"
    },
    {
      nome: "Bundesliga II",
      url: "https://static.flashscore.com/res/image/data/SAoSGa8j-fwPHGLfg.png"
    },
    {
      nome: "Brasileirão Série B",
      url: "https://static.flashscore.com/res/image/data/nPLAPg8j-xtaWZIy1.png"
    },
    {
      nome: "Ligue One",
      url: "https://static.flashscore.com/res/image/data/ObraZoiD-8Mz70lmb.png"
    },
    {
      nome: "Championship",
      url: "https://static.flashscore.com/res/image/data/rJeHdvRp-SzPY38y0.png"
    },
    {
      nome: "A-League",
      url: "https://static.flashscore.com/res/image/data/EB34qFYI-vBMSgqVk.png"
    },
    {
      nome: "Premier League",
      url: "https://static.flashscore.com/res/image/data/IsTqKakD-ERmIF5zC.png"
    },
  ];

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
    //console.log("APP -> ", campeonato);
    setCampeonatos([...campeonatos, campeonato]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Formulario
          titulo="Preencha os campos para criar um novo campeonato"
          continentes={continentes.map((continente) => continente.nome)}
          campeonatosUrls={campeonatosUrls}
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
