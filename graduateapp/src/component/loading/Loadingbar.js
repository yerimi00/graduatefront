import React, { useState, useEffect } from "react";
import styles from "../css/Loadingbar.module.css";

export default function LoadingBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        const newValue = prevPercent + 1;
        if (newValue >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return newValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={styles.loading}>
      <div
        className={styles.progressBar}
        style={{
          width: `${percent}%`,
          backgroundColor: "#008194",
          position: "absolute",
          top: "0",
          left: "0",
          height: "10px",
          zIndex: 1,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
      ></div>
    </div>
  );
}
