import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/About.module.css";
import AboutImg from "../img/About.png";
import Clicks from "../img/Clicks.png";
import Gradcap from "../img/Gradcap.png";

function About() {
  return (
    <>
      <div className={styles.textContainer}>
        <span>
          ‘졸업할 결심’은 외대 학우 분들이 졸업 요건을 한눈에 쉽게 알아볼 수
          있도록 도와줍니다!
        </span>
      </div>

      <div className={styles.stextContainer}>
        <span>
          1. 학교 계정으로 로그인 하면 종합정보시스템과 연동됩니다.
        </span>

        <span>
          2. 자신의 과에 맞는 졸업학점부터 전공필수, 졸업시험 및 졸업논문
          합격 여부와 자격증 종류까지 한 페이지에서 다 볼 수 있습니다.
        </span>

        <span>
          3. 전공심화, 이중전공, 부전공도 포함하며 편입생들도 5월 이 후 부터 확인이 가능합니다. 
        </span>
      </div>

      <div className={styles.imageContainer}>
        <img src={AboutImg} alt="About" className={styles.image} />
        <img src={Gradcap} alt="Cap" className={styles.capImage} />
        <p className={styles.text}>!ABOUT!</p>
      </div>
      <div>
        <Link to="/Login"><button className={styles.biggerButton}>졸업 요건 확인하기</button></Link>
        <img className={styles.click} src={Clicks} alt="Clicks" />
      </div>
    </>
  );
}
export default About;