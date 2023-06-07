import { Link } from "react-router-dom";
import img from "../../assets/react.svg";
import style from "./navBar.module.css";

export default function navBar() {
  return (
    <div className={style.container}>
      <Link className={style.logo}>
        <img src={img} className={style.logoimg} />
      </Link>
      <div className={style.buttons}>
        <Link>Experiencia</Link>
        <Link>About</Link>
        <Link>Tech Skills</Link>
        <Link>Portafolio</Link>
        <Link>Contacto</Link>
        <Link className={style.resumen}>Resumen</Link>
      </div>
    </div>
  );
}
