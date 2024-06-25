import React, { useState } from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import { Link } from "react-router-dom";
import EditNav from "../Header/EditNav";

export default function EditInfo() {
  const [selectedSubjectType, setselectedSubjectType] = useState(null);

  return (
    <div className={styles.page}>
      <EditNav />
      <div className={styles.infoUpdateContainer}>
        <EditMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo6}>
            <label className={styles.labelStyle}>
              <input
                type="radio"
                name="compulsory"
                value="major_compulsory"
                checked={selectedSubjectType === "major_compulsory"}
                onChange={() => setselectedSubjectType("major_compulsory")}
              />
              전공 필수 과목
            </label>
            <label className={styles.labelStyle}>
              <input
                type="radio"
                name="compulsory"
                value="liberal_compulsory"
                checked={selectedSubjectType === "liberal_compulsory"}
                onChange={() => setselectedSubjectType("liberal_compulsory")}
              />
              교양 필수 과목
            </label>

            <div>
              {selectedSubjectType === "major_compulsory" && (
                <div className={styles.subjectContainer}>과목 리스트</div>
              )}
              {selectedSubjectType === "liberal_compulsory" && (
                <div className={styles.subjectContainer}>과목 리스트</div>
              )}
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
    </div>
  );
}
