import "./Campeonato.css";

export default function Campeonato({
  pais,
  nomeCampeonato,
  urlImagem,
  quantEquipes,
  corDeFundo,
}) {
  return (
    <div className="campeonato">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={urlImagem} alt={pais} />
      </div>
      <div className="rodape">
        <h4>{pais}</h4>
        <h5>{nomeCampeonato}</h5>
        <h5>{quantEquipes} equipes</h5>
      </div>
    </div>
  );
}
