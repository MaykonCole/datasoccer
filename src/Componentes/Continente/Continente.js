import Campeonato from "../Campeonato/Campeonato";
import "./Continente.css";

export default function Continente(props) {
  const cssCorPrimaria = { borderColor: props.corPrimaria };
  const cssCorSecundaria = { backgroundColor: props.corSecundaria };
  return (
    props.campeonatos.length > 0 && (
      <section style={cssCorSecundaria} className="continente">
        <h3 style={cssCorPrimaria}>{props.nome}</h3>
        <div className="campeonatos">
          {props.campeonatos.map((camp) => (
            <Campeonato
              key={camp.urlImagem}
              pais={camp.pais}
              nomeCampeonato={camp.nomeCampeonato}
              quantEquipes={camp.quantidade}
              urlImagem={camp.urlImagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
}
