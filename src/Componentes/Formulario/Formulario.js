import "./Formulario.css";
import CampoFormulario from "../CampoFormulario/CampoFormulario";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useEffect, useState } from "react";

export default function Formulario(props) {
  const divisoes = [1, 2, 3, 4, 5];

  const [pais, setPais] = useState("");
  const [quantidade, setQuantidade] = useState(20);
  const [divisao, setDivisao] = useState(divisoes[0]);
  const [continente, setContinente] = useState(props.continentes[0]);
  const [nomeCampeonato, setNomeCampeonato] = useState(
    props.campeonatosUrls[0].nome
  );
  const [urlImagem, seturlImagem] = useState("");

  const zerarCamposFormulario = function () {
    setPais("");
    setQuantidade(20);
    setDivisao(divisoes[0]);
    setContinente(props.continentes[0]);
    setNomeCampeonato(props.campeonatosUrls[0].nome);
  };

  const buscaUrl = function (nomeCampeonato) {
    var camp = props.campeonatosUrls.filter(
      (camp) => camp.nome === nomeCampeonato
    );
    seturlImagem(camp[0].url);
  };

  useEffect(() => {
    buscaUrl(nomeCampeonato);
  }, [nomeCampeonato, pais]);

  const enviarFormulario = (evento) => {
    evento.preventDefault();

    console.log(
      "Formulario -> ",
      nomeCampeonato,
      buscaUrl(nomeCampeonato),
      continente,
      pais,
      quantidade,
      divisao
    );

    const campeonatoSalvo = {
      nomeCampeonato,
      continente,
      pais,
      urlImagem,
      quantidade,
      divisao,
    };
    console.log(campeonatoSalvo);
    props.salvarFormulario(campeonatoSalvo);
    zerarCamposFormulario();
  };

  return (
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
        <h1>{props.titulo}</h1>
        <ListaSuspensa
          label="Campeonatos"
          itens={props.campeonatosUrls.map((comp) => comp.nome)}
          $obrigatorio={true}
          valor={nomeCampeonato}
          alterouCampo={(valor) => setNomeCampeonato(valor)}
        />
        <ListaSuspensa
          label="Continente"
          itens={props.continentes}
          $obrigatorio={true}
          valor={continente}
          alterouCampo={(valor) => setContinente(valor)}
        />
        <CampoFormulario
          classname="campo-texto"
          type="text"
          label="País"
          placeholder="De qual país é este campeonato"
          obrigatorio={true}
          valor={pais}
          alterouCampo={(valor) => setPais(valor)}
        />
        <CampoFormulario
          classname="campo-numerico"
          type="number"
          label="Quantidade de Equipes"
          placeholder=""
          $obrigatorio={true}
          valor={quantidade}
          alterouCampo={(valor) => setQuantidade(valor)}
        />
        <ListaSuspensa
          label="Divisão"
          itens={divisoes}
          $obrigatorio={true}
          valor={divisao}
          alterouCampo={(valor) => setDivisao(valor)}
        />
        <Botao cor={"#008000"}>Criar Campeonato</Botao>
      </form>
    </section>
  );
}
