import React from "react";
import styles from "../css/Result.module.css";
import deciduate from "./deciduate.png";

export default function resultPass() {

  return (
    <div className={styles.congrat}>
      <h1 className={styles.passTitle}>졸업 요건을 모두 충족했어요<img className={styles.congratPic} src={deciduate}/></h1>
      <h3 className={styles.passSubTitle}>
        졸업할 결심이 당신의 앞날을 응원합니다
      </h3>
    </div>
  );

}