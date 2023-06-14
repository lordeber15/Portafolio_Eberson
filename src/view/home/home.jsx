import style from "./home.module.css";
import imagen from "../../assets/react.svg";
import { Link } from "react-scroll";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function home() {
  return (
    <section id="home" className={style.container}>
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
      <Link to="about" spy={true} smooth={true} offset={-10} duration={500}>
        <div className={style.arrow}>
          <KeyboardDoubleArrowDownIcon />
        </div>
      </Link>
    </section>
  );
}
