import React, { useState } from "react";
import styles from "../css/InsertBasic.module.css";



function MajorDropdown() {

  const options = ['전공 선택', '방송.영상.뉴미디어 전공', '수학과', '전자공학과', '철학과', '컴퓨터공학부(컴퓨터전자시스템공학부)', '통계학과', 'AI 융합전공', 'Global Business and Technology'];

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("전공 선택");

  return (
    <div className={styles.dropdown2}>
      <div className={styles.dropdownButton2} onClick={(e) => setIsActive(!isActive)}>{selected}</div>
      {isActive && (
        <div className={styles.dropdownContents2}>
          {options.map(option => (
            <div className={styles.dropdownItems2} onClick={(e) => {
              setSelected(option)
              setIsActive(false)
            }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div >
  );
}

export default MajorDropdown;