import style from "./home.module.css";
import imagen from "../../assets/react.svg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function home() {
  return (
    <div className={style.container}>
      <div className={style.containerdev}>
        <div className={style.imagenlogo}>
          <img src={imagen} />
        </div>
        <div className={style.containerDatos}>
          <div className={style.nombre}>
            Eberson <strong className={style.apellido}>Palomino</strong>
          </div>
          <div className={style.descripcion}>Full Stack Developer</div>
        </div>
      </div>
      <div className={style.arrow}>
        <KeyboardDoubleArrowDownIcon />
      </div>
    </div>
  );
}
