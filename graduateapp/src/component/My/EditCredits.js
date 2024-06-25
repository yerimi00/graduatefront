import React, { useEffect, useState } from "react";
import styles from "../css/My.module.css";
import EditMenu from "./EditMenu";
import { Link } from "react-router-dom";
import EditNav from "../Header/EditNav";
import axiosInstance from "../../api/axiosInstance";

export default function EditInfo() {
  const [mainMajor, setMainMajor] = useState("");
  const [doubleMajor, setDoubleMajor] = useState("");
  const [secondMajor, setSecondMajor] = useState("");
  const [outside, setOutside] = useState("");
  const [liberal, setLiberal] = useState("");
  const [minorMajor, setMinorMajor] = useState("");
  const [teaching, setTeaching] = useState("");
  const [selfSelection, setSelfSelection] = useState("");
  const [totalCredits, setTotalCredits] = useState("");
  const [totalScore, setTotalScore] = useState("");

  useEffect(() => {
    const editValues = async () => {
      try {
        const response = await axiosInstance.put("/api/v1/users/credits/");
        setMainMajor(response.data.main_major);
        setDoubleMajor(response.data.double_major);
        setSecondMajor(response.data.second_major);
        setOutside(response.data.outside);
        setLiberal(response.data.liberal);
        setMinorMajor(response.data.minor_major);
        setTeaching(response.data.teaching);
        setSelfSelection(response.data.self_selection);
        setTotalCredits(response.data.total_credits);
        setTotalScore(response.data.total_score);
      } catch (error) {
        console.error("Error fetching values:", error);
      }
    };
    editValues();
  }, []);

  const editSubmit = async () => {
    try {
      await axiosInstance.put("/api/v1/users/credits/", {
        main_major: mainMajor, //1전공
        double_major: doubleMajor, //이중전공
        second_major: secondMajor, //2전공
        outside: outside, //실외
        liberal: liberal, //교양
        minor_major: minorMajor, //부전공
        teaching: teaching, //교직
        self_selction: selfSelection, //자선
        total_credit: totalCredits, //총취득
        total_score: totalScore, //총평점
      });
      alert("등록되었습니다!");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const scoreText = [
    { name: 1, value: "1전공" },
    { name: 2, value: "이중전공" },
    { name: 3, value: "2전공" },
    { name: 4, value: "실외" },
    { name: 5, value: "교양" },
    { name: 6, value: "부전공" },
    { name: 7, value: "교직" },
    { name: 8, value: "자선" },
    { name: 9, value: "총취득" },
    { name: 10, value: "총평점" },
  ];

  return (
    <div className={styles.page}>
      <EditNav />
      <div className={styles.infoUpdateContainer}>
        <EditMenu />

        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            구분 및 이수 학점
            <div className={styles.container}>
              <div className={styles.inputInfoContainer1}>
                {scoreText.map((text) => {
                  return (
                    <div className={styles.inputInfo2}>
                      <div className={styles.inputInfo4}>{text.value}</div>{" "}
                      &nbsp;
                      <label>
                        <input
                          className={styles.inputInfo5}
                          type="number"
                          min="0"
                        />
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className={styles.inputInfoContainer2}></div>
            </div>
            <br />
            <Link to="/MY">
              <button className={styles.Completed} onClick={() => editSubmit()}>
                수정 완료하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
