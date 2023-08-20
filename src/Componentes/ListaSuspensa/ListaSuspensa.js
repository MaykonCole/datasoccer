import "./ListaSuspensa.css";

export default function ListaSuspensa(props) {
  const alterouCampo = (evento) => {
    props.alterouCampo(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.required}
        onChange={alterouCampo}
        value={props.valor}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
