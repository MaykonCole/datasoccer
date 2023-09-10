import "./Botao.css";

export default function Botao(props) {
  return (
  <div className="caixa-botoes">
    <button style={{backgroundColor: props.cor}} className="botao">{props.children}</button>
  </div>
)}
