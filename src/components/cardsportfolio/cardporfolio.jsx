import style from "./cardporfolio.module.css";
import imagen from "../../assets/beautify.png";
export default function cardporfolio() {
  return (
    <div className={style.container}>
      <img className={style.img} src={imagen} />
      <div className={style.title}>Rick and Morty</div>
      <p>
        Lorem ipsosLorem ipsos Lorem ipsosLorem ipsos Lorem ipsos Lorem
        ipsosLorem ipsosLorem ipsos Lorem ipsosLorem ipsos
      </p>
      <div className={style.containerlenguaje}>
        <div className={style.lg}>React</div>
        <div className={style.lg}>Redux</div>
        <div className={style.lg}>Express</div>
      </div>
    </div>
  );
}
