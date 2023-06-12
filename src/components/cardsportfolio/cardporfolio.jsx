import style from "./cardporfolio.module.css";
import imagen from "../../assets/beautify.png";
export default function cardporfolio() {
  return (
    <div className={style.container}>
      <img className={style.img} src={imagen} />
      <div className={style.title}>Beautify</div>
      <p className={style.description}>
        Plataforma de E-commerce con filtros combinados, mercado pago, reserva
        de turnos, dashboard de administrador, agregar producto, agregar
        servicios
      </p>
      <div className={style.containerlenguaje}>
        <div className={style.lg}>React</div>
        <div className={style.lg}>Redux</div>
        <div className={style.lg}>Express</div>
      </div>
    </div>
  );
}
