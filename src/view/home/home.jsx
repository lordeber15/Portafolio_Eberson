import style from "./home.module.css";
import imagen from "../../assets/react.svg";

export default function home() {
  return (
    <div className={style.container}>
      <div className={style.containerdev}>
        <div>
          <img src={imagen} />
        </div>
        <div className={style.containerDatos}>
          <div className={style.nombre}>Eberson Palomino</div>
          <div className={style.descripcion}>Full Stack Developer</div>
        </div>
      </div>
    </div>
  );
}
