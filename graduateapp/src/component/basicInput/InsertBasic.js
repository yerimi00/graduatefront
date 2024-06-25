import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/InsertBasic.module.css";
import MajorDropdown2 from "./MajorDropdown2";
import InsertNav from "../Header/InserNav";

export default function InsertBasic() {
  const [selectedMajorType, setSelectedMajorType] = useState(null);

  return (
    <>
      <div className={styles.page}>
        <InsertNav />
        <div className={styles.InsertContainer}>
          {/* <div className={styles.InsertTitle}>정보를 입력해주세요</div> */}

          <div className={styles.InsertSubContainer}>
            <div className={styles.inputInfo}>
              학번 <br />
              <label>
                <input className={styles.studentId} type="number" />
              </label>
            </div>
            <div className={styles.inputInfo}>
              전공 유형 <br />
              <label>
                <input
                  type="radio"
                  name="major"
                  value={1}
                  checked={selectedMajorType === 1}
                  onChange={() => setSelectedMajorType(1)}
                />
                전공심화
              </label>
              <label>
                <input
                  type="radio"
                  name="major"
                  value={2}
                  checked={selectedMajorType === 2}
                  onChange={() => setSelectedMajorType(2)}
                />
                이중전공
              </label>
              <label>
                <input
                  type="radio"
                  name="major"
                  value={3}
                  checked={selectedMajorType === 3}
                  onChange={() => setSelectedMajorType(3)}
                />
                부전공
              </label>
              <label>
                <input
                  type="radio"
                  name="major"
                  value={4}
                  checked={selectedMajorType === 4}
                  onChange={() => setSelectedMajorType(4)}
                />
                전공심화+부전공
              </label>
            </div>
            <div className={styles.inputInfo}>
              {selectedMajorType === 1 && (
                <div>
                  전공
                  <div className={styles.inputInfo3}>
                    <MajorDropdown2 />
                  </div>
                </div>
              )}
              {selectedMajorType === 2 && (
                <>
                  <div>
                    전공
                    <div className={styles.inputInfo3}>
                      <MajorDropdown2 />
                    </div>
                  </div>
                  <br />
                  <div>
                    전공2
                    <div className={styles.inputInfo3}>
                      <MajorDropdown2 />
                    </div>
                  </div>
                </>
              )}
              {selectedMajorType === 3 && (
                <>
                  <div>
                    전공
                    <div className={styles.inputInfo3}>
                      <MajorDropdown2 />
                    </div>
                  </div>
                  <br />
                  <div>
                    전공2
                    <div className={styles.inputInfo3}>
                      <MajorDropdown2 />
                    </div>
                  </div>
                </>
              )}
              {selectedMajorType === 4 && (
                <>
                  <div>
                    전공
                    <div className={styles.inputInfo3}>
                      <MajorDropdown2 />
                    </div>
                  </div>
                  <br />
                  <div>
                    전공2
                    <div className={styles.inputInfo3}>
                      <MajorDropdown2 />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className={styles.inputInfo}>
              {" "}
              기타 사항 <br />
              <input type="radio" name="entrance" value="Transfer" />
              편입생
              <input type="radio" name="entrance" value="foreignerType" />
              외국인 전형 입학자
              <input type="radio" name="entrance" value="none" defaultChecked />
              해당 없음
            </div>{" "}
            <br />
          </div>
          <Link to="/MY">
            <button className={styles.Completed}>수정 완료하기</button>
          </Link>
        </div>
      </div>
    </>
  );
}
