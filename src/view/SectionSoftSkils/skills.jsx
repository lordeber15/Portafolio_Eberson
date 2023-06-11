import style from "./skills.module.css";
import CardSkills from "../../components/cardsTechSkills/cardTechSkills";
export default function skills() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Tech Skills</h1>
      <CardSkills />
    </div>
  );
}
