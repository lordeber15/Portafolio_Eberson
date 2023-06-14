import style from "./skills.module.css";
import CardSkills from "../../components/cardsTechSkills/cardTechSkills";
import react from "../../assets/Lreact2.png";
import css from "../../assets/Lcss.png";
import hmtl from "../../assets/Lhtml.png";
import java from "../../assets/Ljava.png";
import jquery from "../../assets/Ljquery.png";
import nodejs from "../../assets/nodejs.png";
import postgres from "../../assets/postgres.png";
import javaScript from "../../assets/Ljavascript.png";
import redux from "../../assets/Lredux.png";
import sequelize from "../../assets/sequelize-logo.png";

export default function skills() {
  return (
    <div id="skills" className={style.container}>
      <h1 className={style.title}>Tech Skills</h1>
      <div className={style.cardContainer}>
        <CardSkills imagen={react} />
        <CardSkills imagen={css} />
        <CardSkills imagen={hmtl} />
        <CardSkills imagen={java} />
        <CardSkills imagen={jquery} />
        <CardSkills imagen={nodejs} />
        <CardSkills imagen={postgres} />
        <CardSkills imagen={javaScript} />
        <CardSkills imagen={redux} />
        <CardSkills imagen={sequelize} />
      </div>
    </div>
  );
}
