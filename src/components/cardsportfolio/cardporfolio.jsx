import style from "./cardporfolio.module.css";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
export default function cardporfolio({
  img,
  title,
  description,
  lenguajes,
  deploy,
}) {
  return (
    <div className={style.container}>
      <img className={style.img} src={img} />
      <Tooltip title="Ver Pagina Desplegada" placement="right-end">
        <Link to={deploy} target="_blank">
          <div className={style.title}>{title}</div>
        </Link>
      </Tooltip>
      <p className={style.description}>{description}</p>
      <div className={style.containerlenguaje}>
        {lenguajes.map((lg) => (
          <div className={style.lg} key={""}>
            {lg}
          </div>
        ))}
      </div>
    </div>
  );
}
