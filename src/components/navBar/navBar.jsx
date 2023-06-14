import { Link } from "react-scroll";
import img from "../../assets/react.svg";
import style from "./navBar.module.css";

export default function navBar() {
  return (
    <div className={style.container}>
      <Link className={style.logo}>
        <img src={img} className={style.logoimg} />
      </Link>
      <div className={style.buttons}>
        <Link to="about" spy={true} smooth={true} offset={-10} duration={500}>
          About
        </Link>
        <Link
          to="experiencia"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Experiencia
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-140} duration={500}>
          Tech Skills
        </Link>
        <Link
          to="portafolio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Portafolio
        </Link>
        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Contacto
        </Link>
        <Link className={style.resumen} to={"resumen"}>
          Resumen
        </Link>
      </div>
    </div>
  );
}
