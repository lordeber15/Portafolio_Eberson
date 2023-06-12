import style from "./cardTechSkills.module.css";

export default function cardSkills({ imagen, nametech }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img className={style.img} src={imagen} />
        <p className={style.nametech}>{nametech}</p>
      </div>
    </div>
  );
}
