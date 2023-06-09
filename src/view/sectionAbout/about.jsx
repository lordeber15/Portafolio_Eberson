import style from "./about.module.css";
import image from "../../assets/react.svg";
export default function about() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <p>About Me</p>
      </div>
      <div className={style.datos}>
        <div className={style.containerimage}>
          <div className={style.fotoImagen}>
            <img src={image}></img>
          </div>
          <div className={style.aboutme}>
            <p>
              Soy un Full Stack Developer con un sólido background en ingeniería
              de sistemas e información, lo cual ha fortalecido mis habilidades
              de análisis y trabajo en equipo. Me especializo en el desarrollo
              Front-End y poseo conocimientos en metodologías ágiles, GIT,
              estructura de datos, algoritmos y frameworks como CSS, Javascript,
              Express, React, Redux y NextJS, así como también en Sequelize para
              la gestión de bases de datos.
              <p>
                A lo largo de mi experiencia, he trabajado en el desarrollo de
                aplicaciones Front-End utilizando React, y en el Back-End con
                NodeJS. Esta combinación me ha permitido desarrollar habilidades
                clave como la versatilidad, empatía, trabajo en equipo y el
                aprendizaje constante e independiente.
              </p>
              <p>
                Además, aunque mi nivel de inglés es básico, estoy dispuesto/a a
                seguir mejorando mis habilidades en ese aspecto.
              </p>
              <p>
                Si necesitas un desarrollador Full Stack capaz de abordar
                desafíos tanto en el Front-End como en el Back-End, junto con
                una actitud de aprendizaje constante y habilidades de trabajo en
                equipo, estaré encantado/a de contribuir a tu equipo.
              </p>
              <p>
                ¡Estoy emocionado/a por las oportunidades que el desarrollo web
                tiene para ofrecer y estoy ansioso/a por seguir creciendo como
                profesional en este campo!
              </p>
            </p>
            <div className={style.detallePerfil}>
              <div>
                <p>Email:</p>
                <p>Ubication:</p>
                <p>Age:</p>
              </div>
              <div>
                <p>eberpalomino@hotmail.com</p>
                <p>Ayacucho</p>
                <p>32 años</p>
              </div>
              <div>
                <p>Nacionalidad:</p>
                <p>Educación:</p>
                <p>Grado:</p>
              </div>
              <div>
                <p>Peruano</p>
                <p>Full Stack Developer</p>
                <p>Junior</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.experiencia}>
          <div className={style.experienciadiv}>
            <strong>01+</strong>
            <p>Years of experience</p>
          </div>
          <div className={style.experienciadiv}>
            <strong>03+</strong>
            <p>Completed projects</p>
          </div>
          <div className={style.experienciadiv}>
            <strong>02+</strong>
            <p>Satisfied clientes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
