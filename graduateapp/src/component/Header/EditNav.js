import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/EditNav.module.css";

export default function EditNav() {
  return (
    <div className={styles.Container}>
      <div className={styles.InsertTitle}>나의 정보</div>
      <div className={styles.InsertSubTitleDiv}>
        <Link to="/MY" className={styles.subTitle}>
          한눈에 보기
        </Link>
        <Link to="/MY/EditProfiles" className={styles.subTitle}>
          수정하기
        </Link>
      </div>
    </div>
  );
}
