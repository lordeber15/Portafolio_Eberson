import style from "./cardTechSkills.module.css";
import imagen from "../../assets/react.svg";
export default function cardSkills() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img className={style.img} src={imagen} />
        <div className={style.nametech}>CardSkills</div>
      </div>
    </div>
  );
}
