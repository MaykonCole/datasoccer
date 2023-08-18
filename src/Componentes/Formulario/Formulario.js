import "./Formulario.css";
import CampoFormulario from "../CampoFormulario/CampoFormulario";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";

export default function Formulario(props) {
  const divisoes = [1, 2, 3, 4, 5];
  const [nome, setNome] = useState("");
  const [urlImagem, seturlImagem] = useState("");
  const [pais, setPais] = useState("");
  const [quantidade, setQuantidade] = useState(20);
  const [divisao, setDivisao] = useState(divisoes[0]);
  const [continente, setContinente] = useState(props.continentes[0]);

  const zerarCamposFormulario = function () {
    setNome("");
    seturlImagem("");
    setPais("");
    setQuantidade(20);
    setDivisao(divisoes[0]);
    setContinente(props.continentes[0]);
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log(
      "Formulario -> ",
      nome,
      urlImagem,
      continente,
      pais,
      quantidade,
      divisao
    );

    const campeonato = {
      nome,
      urlImagem,
      continente,
      pais,
      quantidade,
      divisao,
    };
    props.salvarFormulario(campeonato);
    zerarCamposFormulario();
  };

  return (
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
        <h1>{props.titulo}</h1>
        <CampoFormulario
          classname="campo-texto"
          type="text"
          label="Nome"
          placeholder="Digite o nome do campeonato"
          obrigatorio={true}
          valor={nome}
          alterouCampo={(valor) => setNome(valor)}
        />
        <CampoFormulario
          classname="campo-texto"
          type="text"
          label="URL Imagem"
          placeholder="Digite a URL da imagem do Campeonato"
          obrigatorio={true}
          valor={urlImagem}
          alterouCampo={(valor) => seturlImagem(valor)}
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
        <Botao>Criar Campeonato</Botao>
      </form>
    </section>
  );
}
