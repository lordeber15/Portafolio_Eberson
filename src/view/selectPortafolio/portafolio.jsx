import style from "./portafolio.module.css";
import Cardporfolio from "../../components/cardsportfolio/cardporfolio";
import imagen from "../../assets/beautify.png";
import rickamorty from "../../assets/images.jpeg";
import dogs from "../../assets/dogss.jpg";
export default function portafolio() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Portafolio</h1>
      <div className={style.cards}>
        <Cardporfolio
          img={imagen}
          title={"Beautify"}
          description={
            "Plataforma de E-commerce con filtros combinados, mercado pago, reserva de turnos, dashboard de administrador, agregar producto, agregar servicios"
          }
          lenguajes={[
            "React",
            "Redux",
            "Node.js",
            "Sequelize",
            "Express",
            "Html",
            "CSS",
            "PostgrestSQL",
            "Firebase",
            "Cloudinary",
          ]}
        />
        <Cardporfolio
          img={rickamorty}
          title={"Rick an Morty"}
          description={
            "Pagina que consume la API de Rick and Morty con filtros combinados, busqueda por coincidencia, vista de favoritos, y un login"
          }
          lenguajes={[
            "React",
            "Redux",
            "Node.js",
            "Sequelize",
            "Express",
            "Html",
            "CSS",
            "PostgrestSQL",
          ]}
        />
        <Cardporfolio
          img={dogs}
          title={"API Dog's"}
          description={
            "Pagina que consume la API Dog's con filtros combinados, busqueda por coincidencia, vista de favoritos"
          }
          lenguajes={[
            "React",
            "Redux",
            "Node.js",
            "Sequelize",
            "Express",
            "Html",
            "CSS",
            "PostgrestSQL",
          ]}
        />
      </div>
    </div>
  );
}
