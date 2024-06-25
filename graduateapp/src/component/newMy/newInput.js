import React, { useState } from "react";
import styles from "../css/newInput.module.css";
import MajorDropdown from "./MajorDropdown";
import InsertNav from "../Header/InserNav";
import axiosInstance from "../../api/axiosInstance";

export default function NewInput() {
  const [user, setUser] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [selectedMajorType, setSelectedMajorType] = useState(1);
  const [mainMajor, setMainMajor] = useState("");
  const [doubleMajor, setDoubleMajor] = useState("");
  const [minorMajor, setMinorMajor] = useState("");
  const [transfer, setTransfer] = useState("");
  const [foreign, setForeign] = useState("");

  const handleSubmit = async () => {
    try {
      await axiosInstance.post("/api/v1/users/profiles/basics/", {
        user: user,
        student_no: studentNo, //학번
        major_type: selectedMajorType, //전공유형 | 1:전공심화, 2:이중전공, 3:부전공, 4:전공심화+부전공
        main_major: mainMajor, //본전공
        double_major: doubleMajor, //이중전공
        minor_major: minorMajor, //부전공
        transfer: transfer, //편입생
        foreign: foreign, //외국인전형
      });
      alert("등록되었습니다!");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const majorName = [
    { name: 1, value: "전공심화", setValue: setMainMajor },
    { name: 2, value: "이중전공", setValue: setDoubleMajor },
    { name: 3, value: "부전공", setValue: setMinorMajor },
    { name: 4, value: "전공심화 + 부전공", setValue: setMinorMajor },
  ];

  return (
    <div className={styles.container}>
      <InsertNav />
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>
          <div className={styles.inputContainer}>
            <p className={styles.hello}>기본 정보를 알려주세요</p>

            <div className={styles.student_no}>
              학번 (*ex. 24학번: 24 입력)
              <br />
              <label>
                <input
                  onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength
                      );
                  }}
                  type="number"
                  maxlength={2}
                  className={styles.inputStudent_no}
                  onChange={(e) => setStudentNo(e.target.value)}
                />
              </label>
            </div>
            <br />

            <div className={styles.major_type}>
              <span className={styles.indexMajor_type}> 전공유형 </span> <br />
              <ul>
                {majorName.map((major) => (
                  <li key={major.name}>
                    <input
                      type="radio"
                      className={styles.selectMajor_type}
                      value={major.name}
                      checked={selectedMajorType === major.name}
                      onChange={() => setSelectedMajorType(major.name)}
                    />{" "}
                    <span className={styles.selectMajor_type}>
                      {major.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <br />

            <div>
              <div className={styles.student_no}>
                전공
                <div className={styles.inputInfo3}>
                  <MajorDropdown handleMajor={setMainMajor} />
                </div>
              </div>
              {selectedMajorType != 1 && (
                <div className={styles.student_no}>
                  {majorName[selectedMajorType - 1].value}
                  <div className={styles.inputInfo3}>
                    <MajorDropdown
                      handleMajor={majorName[selectedMajorType - 1].setValue}
                    />
                  </div>
                  <br />
                </div>
              )}
            </div>

            <div className={styles.etcInfo}>
              기타사항 <br />
              <ul>
                <li>
                  <input
                    type="radio"
                    className={styles.etcInfo_type}
                    name="entrance"
                    value="Transfer"
                  />
                  <span className={styles.etcInfo_type}>편입생</span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.etcInfo_type}
                    name="entrance"
                    value="foreignerType"
                  />
                  <span className={styles.etcInfo_type}>
                    외국인 입학 전형자
                  </span>
                </li>
                <li>
                  <input
                    type="radio"
                    className={styles.etcInfo_type}
                    name="entrance"
                    value="none"
                    defaultChecked
                  />
                  <span className={styles.etcInfo_type}>해당 없음</span>
                </li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className={styles.submitContainer}>
            <button
              className={styles.submitButton}
              onClick={() => handleSubmit()}
            >
              등록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
