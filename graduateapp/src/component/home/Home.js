import React from "react";
import styles from "../css/Home.module.css";
import About from "../img/About.png";
import Cap from "../img/Cap.png";
import Clicking from "../img/Clicking.png";
import Clicks from "../img/Clicks.png";
import Google from "../img/Google.png";
import Gradcap from "../img/Gradcap.png";
import logoz from "../img/logoz.png";
import SymbolN from "../img/SymbolN.gif";
import White_logo from "../img/White_logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <img className={styles.grad} src={Cap} alt="Cap" />
        <button className={styles.circleButton}>졸업 진행중</button>
        <h2 className={styles.gradually}>마침내..</h2>
      </div>
      <div>
        <h1 className={styles.decision}>졸업할 결심</h1>
        <hr className={styles.horizontalLine}></hr>
        <h1 className={styles.decision}>졸업할 결심</h1>
        <hr className={styles.horizontalLine}></hr>
      </div>
      <div>
        <Link to="/Login"><button className={styles.biggerButton}>졸업 요건 확인하기</button></Link>
        <img className={styles.click} src={Clicks} alt="Clicks" />
      </div>
      <div className={styles.buttonWrapper}>
        <div>
          <button className={styles.firstButton}>
            <button className={styles.recButton}>
              <img className={styles.check} src={Clicking} alt="Checks" />
            </button>
            <span className={styles.text}>학점관리가 어려우신 분</span>
          </button>
        </div>
        <div>
          <button className={styles.firstButton}>
            <button className={styles.recButton}>
              <img className={styles.check} src={Clicking} alt="Checks" />
            </button>
            <span className={styles.text}>졸업이 막막하신 분</span>
          </button>
        </div>
        <div>
          <button className={styles.firstButton}>
            <button className={styles.recButton}>
              <img className={styles.check} src={Clicking} alt="Checks" />
            </button>
            <span className={styles.text}>졸업요건이 궁금하신 분</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
