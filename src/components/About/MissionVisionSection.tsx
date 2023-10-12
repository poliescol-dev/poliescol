import React from "react";
import styles from "./missionVision.module.scss";
import Image from "next/image";

const MissionVisionSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionImgContainer}>
        <Image
          alt="missionVision.jpeg"
          className={styles.sectionImg}
          src="/missionVision.jpeg"
          width={597}
          height={414}
        />
      </div>
      <div className={styles.textContent}>
        <div className={styles.statement}>
          <h2>Visión</h2>
          <p>
            Confiamos en producir productos excelentes a través de la innovación
            y destacar en el mercado internacional, comenzando por ingresar al
            mercado latinoamericano y luego expandiéndonos a nivel global.
          </p>
        </div>
        <div className={styles.statement}>
          <h2>Misión</h2>
          <p>
            Satisfacemos ágilmente las necesidades del mercado nacional con
            productos de calidad y tiempos de entrega rápidos, siendo líderes en
            el sector automotriz y contribuyendo al crecimiento de nuestros
            clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
