import React, { useEffect, useState } from "react";
import Loadingbar from "./Loadingbar";
import styles from "../css/Loading.module.css";

export default function Loading() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className={styles.welcome}>
      <h1 className={styles.loadingTitle}>졸업이 가능한지 확인하고 있어요</h1>
      <h3 className={styles.loadingSubTitle}>
        졸업할 결심이 당신의 졸업을 도와드립니다
      </h3>
      <div className={styles.app}>
        <Loadingbar value={value} onComplete={() => setSuccess(true)} />
      </div>
    </div>
  );
}
