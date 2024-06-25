import React, { useState } from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import { Link } from "react-router-dom";
import ForeignLanguageTestRadio from "./ForeignLanguageTestRadio";
import EditNav from "../Header/EditNav";

export default function EditInfo() {
  return (
    <div className={styles.page}>
      <EditNav />
      <div className={styles.infoUpdateContainer}>
        <EditMenu />
        <div className={styles.updateContainer}>
          <div className={styles.majorTest}>
            졸업 시험/ 논문 통과 여부 <br />
            <div className={styles.checkList1}>
              <input type="checkbox" name="testPass" value="main_test_pass" />
              본전공 통과 <br />
              <input type="checkbox" name="testPass" value="double_test_pass" />
              이중전공 통과
            </div>
          </div>
          <div className={styles.EnglishPass}>
            외국어 인증 점수 보유 및 제출 여부
            <ForeignLanguageTestRadio />
          </div>

          <br />
          <br />
          <br />
          <Link to="/MY">
            <button className={styles.Completed}>수정 완료하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
