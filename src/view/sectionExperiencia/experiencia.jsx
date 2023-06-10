import style from "./experiencia.module.css";
import CardExperiencia from "../../components/cardsExperiencia/cards";

export default function experiencia() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Experiencia</h1>
      <div className={style.contaierCards}>
        <CardExperiencia
          nameProject="API Rick and Morty"
          location="Henry Bootcamp / 2023"
          description="Proyecto Realizado con React, Javascript, Express, Sequelize, PostgrestSQL con busquedas por concidencia parcial, vista de favorios un login"
        />
        <CardExperiencia
          nameProject="API Dog's"
          location="Henry Bootcamp / 2023"
          description="Proyecto Realizado con React, Javascript, Express, Sequelize, PostgrestSQL con busquedas por concidencia parcial, vista de favorios un login"
        />
        <CardExperiencia
          nameProject="Beatify"
          location="Henry Bootcamp / 2023"
          description="Proyecto Realizado con React, Javascript, Express, Sequelize, PostgrestSQL con busquedas por concidencia parcial, vista de favorios un login"
        />
      </div>
    </div>
  );
}
