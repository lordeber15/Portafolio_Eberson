import style from "./about.module.css";
import image from "../../assets/react.svg";
export default function about() {
  return (
    <div className={style.container}>
      <div className={style.title}>About Me</div>
      <div className={style.datos}>
        <div className={style.fotoImagen}>
          <img src={image}></img>
        </div>
        <div>
          <p>
            Full Stack Developer con background en ingeniería de sistemas e
            información que me ayudaron a fortalecer mis habilidades de análisis
            y trabajo en equipo especializado en Front-End. Conocimientos en
            metodologías ágiles, GIT, estructura de datos, algoritmos,
            frameworks CSS, Javascript, Express, React, Redux, NextJS,
            Sequelize, Tengo experiencia en desarrollo de Front-End con React,
            en el Back-End con NodeJS me permitieron desarrollar habilidades
            como Versatilidad, Empatía, Trabajo en Equipo y Aprendizaje
            constante e independiente. Nivel de Inglés: Básico.
          </p>
          <div>
            <div>
              <p>Email:</p>
              <p>Location:</p>
              <p>Age:</p>
            </div>
            <div>
              <p>Nacionalidad:</p>
              <p>Educación:</p>
              <p>Grado:</p>
            </div>
          </div>
          <div>
            <div>
              <strong>01+</strong>
              <p>Years of experience</p>
            </div>
            <div>
              <strong>03+</strong>
              <p>Completed projects</p>
            </div>
            <div>
              <strong>02+</strong>
              <p>Satisfied clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
