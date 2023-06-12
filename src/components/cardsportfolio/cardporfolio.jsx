import style from "./cardporfolio.module.css";
export default function cardporfolio({ img, title, description, lenguajes }) {
  return (
    <div className={style.container}>
      <img className={style.img} src={img} />
      <div className={style.title}>{title}</div>
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
