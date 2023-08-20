import "./CampoFormulario.css";

const CampoFormulario = (props) => {
  const aoDigitar = (evento) => {
    props.alterouCampo(evento.target.value);
  };

  return (
    <div className="campo-formulario">
      <label> {props.label} </label>
      <input
        required={props.obrigatorio}
        value={props.valor}
        onChange={aoDigitar}
        className={props.classname}
        type={props.type}
        placeholder={props.placeholder}
        min={1}
        max={40}
      />
    </div>
  );
};

export default CampoFormulario;
