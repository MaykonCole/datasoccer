import "./Campeonato.css";

export default function Campeonato({
  nomeCampeonato,
  urlImagem,
  quantEquipes,
  corDeFundo,
}) {
  return (
    <div className="campeonato">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={urlImagem} alt={nomeCampeonato} />
      </div>
      <div className="rodape">
        <h4>{nomeCampeonato}</h4>
        <h5>{quantEquipes} equipes</h5>
      </div>
    </div>
  );
}
