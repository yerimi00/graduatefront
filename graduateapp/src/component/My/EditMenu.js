import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/My.module.css";
import EditNav from "../Header/EditNav";

export default function UpdateInfo() {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <>
      {/* <div className={styles.cheerUp2}>
        수정을 완료하면 정확한 결과를 알 수 있어요
      </div> */}
      <div className={styles.updateInfoMenu}>
        <div className={styles.indexContainer}>
          <Link to="/MY/EditProfiles">
            <button
              className={`${styles.editInfo} ${
                activePath === "/MY/EditProfiles" ? styles.active : ""
              }`}
            >
              기본 정보
            </button>
          </Link>
          <Link to="/MY/EditCredits">
            <button
              className={`${styles.editInfo} ${
                activePath === "/MY/EditCredits" ? styles.active : ""
              }`}
            >
              취득 학점
            </button>
          </Link>
          <Link to="/MY/EditSubjects">
            <button
              className={`${styles.editInfo} ${
                activePath === "/MY/EditSubjects" ? styles.active : ""
              }`}
            >
              수강 과목
            </button>
          </Link>
          <Link to="/MY/EditExtras">
            <button
              className={`${styles.editInfo} ${
                activePath === "/MY/EditExtras" ? styles.active : ""
              }`}
            >
              기타 정보
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
