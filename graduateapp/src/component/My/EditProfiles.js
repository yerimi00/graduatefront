import React, { useEffect, useState } from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import MajorDropdown from "./MajorDropdown";
import { Link } from "react-router-dom";
import EditNav from "../Header/EditNav";
import axiosInstance from "../../api/axiosInstance";

export default function EditInfo() {
  const [studentNo, setStudentNo] = useState("");
  const [selectedMajorType, setSelectedMajorType] = useState(1);
  const [mainMajor, setMainMajor] = useState("");
  const [doubleMajor, setDoubleMajor] = useState("");
  const [minorMajor, setMinorMajor] = useState("");
  const [transfer, setTransfer] = useState("");
  const [foreign, setForeign] = useState("");

  useEffect(() => {
    const editValues = async () => {
      try {
        const response = await axiosInstance.get(
          "/api/v1/users/profiles/basics/"
        );
        setStudentNo(response.data.student_no);
        setSelectedMajorType(response.data.major_type);
        setMainMajor(response.data.main_major);
        setDoubleMajor(response.data.double_major);
        setMinorMajor(response.data.minor_major);
        setTransfer(response.data.transfer);
        setForeign(response.data.foreign);
      } catch (error) {
        console.error("Error fetching values:", error);
      }
    };
    editValues();
  }, []);

  const editSubmit = async () => {
    try {
      await axiosInstance.put("/api/v1/users/profiles/basics/", {
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

  const editValue = [
    { name: 1, value: "전공심화", setValue: setMainMajor },
    { name: 2, value: "이중전공", setValue: setDoubleMajor },
    { name: 3, value: "부전공", setValue: setMinorMajor },
    { name: 4, value: "전공심화 + 부전공", setValue: setMinorMajor },
  ];

  return (
    <>
      <div className={styles.page}>
        <EditNav />
        <div className={styles.pageSub}>
          <EditMenu />
          <div className={styles.infoUpdateContainer}>
            <div className={styles.updateContainer}>
              <div className={styles.inputInfo}>
                학번 <br />
                <label>
                  <input
                    className={styles.studentId}
                    type="number"
                    onChange={(e) => setStudentNo(e.target.value)}
                  />
                </label>
              </div>
              <div className={styles.inputInfo}>
                전공 유형 <br />
                {editValue.map((major) => (
                  <label>
                    <input
                      type="radio"
                      name="major"
                      value={major.name}
                      checked={selectedMajorType === major.name}
                      onChange={() => setSelectedMajorType(major.name)}
                    />
                    {major.value}
                  </label>
                ))}
              </div>
              <div>
                <div className={styles.inputInfo}>
                  전공
                  <div className={styles.inputInfo3}>
                    <MajorDropdown handleMajor={setMainMajor} />
                  </div>
                </div>
                {selectedMajorType != 1 && (
                  <>
                    <div className={styles.inputInfo}>
                      {editValue[selectedMajorType - 1].value}
                      <div className={styles.inputInfo3}>
                        <MajorDropdown
                          handleMajor={
                            editValue[selectedMajorType - 1].setValue
                          }
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className={styles.inputInfo}>
                기타 사항 <br />
                <input type="radio" name="entrance" value="Transfer" />
                편입생
                <input type="radio" name="entrance" value="foreignerType" />
                외국인 전형 입학자
                <input
                  type="radio"
                  name="entrance"
                  value="none"
                  defaultChecked
                />
                해당 없음
              </div>
              <br />
              <Link to="/MY">
                <button className={styles.Completed} onClick={editSubmit}>
                  수정 완료하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
