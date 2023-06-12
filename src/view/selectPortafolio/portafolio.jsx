import style from "./portafolio.module.css";
import Cardporfolio from "../../components/cardsportfolio/cardporfolio";
export default function portafolio() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Portafolio</h1>
      <div className={style.cards}>
        <Cardporfolio />
      </div>
    </div>
  );
}
