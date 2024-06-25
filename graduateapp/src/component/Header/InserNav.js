import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/InsertNav.module.css";

export default function InsertNav() {
  return (
    <div className={styles.Container}>
      <div className={styles.InsertTitle}>정보 입력하기</div>
      <div className={styles.InsertSubTitleDiv}>
        <Link to="/NewInput" className={styles.subTitle}>
          기본 정보 입력
        </Link>
        &nbsp;&nbsp;
        <Link to="/StepInsert" className={styles.subTitle}>
          사용자 이수 정보 입력
        </Link>
      </div>
    </div>
  );
}
