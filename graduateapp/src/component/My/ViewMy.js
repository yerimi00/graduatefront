import React, { useState, useEffect } from "react";
import styles from "../css/My.module.css";
import CreditTable from "./CreditTable";
import { Link } from "react-router-dom";
import axios from "axios";
import EditNav from "../Header/EditNav";
import axiosInstance from "../../api/axiosInstance";

export default function ViewInfo() {
  //학번, 전공유형, 전공, 기타 사항, 취득학점, 수강과목, 졸논졸시, 외국어인증점수

  const [student_no, setStudent_no] = useState(""); //학번
  const [major_type, setMajor_type] = useState(""); //전공유형

  const [main_major, setMain_major] = useState(""); //본전공명
  const [double_major, setDouble_major] = useState(""); //이중전공명
  const [minor_major, setMinor_major] = useState(""); //부전공명

  const [transfer, setTransfer] = useState(false); //편입생 여부
  const [foreign, setForiegn] = useState(false); //외국인전형 여부

  const [main_major_credit, setMain_major_credit] = useState(""); //전공
  const [double_major_credit, setDouble_major_credit] = useState(""); //이중전공
  const [second_major_credit, setSecond_major_credit] = useState(""); //전공2
  const [outside_credit, setOutside_credit] = useState(""); //실외
  const [liberal_credit, setLiberal_credit] = useState(""); //교양
  const [minor_major_credit, setMinor_major_credit] = useState(""); //부전공
  const [teaching_credit, setTeaching_credit] = useState(""); //교직
  const [self_selction_credit, setSelf_selction_credit] = useState(""); //자선
  const [total_credit, setTotal_credit] = useState(""); //총취득
  const [total_score, setTotal_score] = useState(""); //총평점

  const [major_compulosry, setMajor_compulosry] = useState([]); //전필 리스트
  const [liberal_compulsory, setLiberal_compulsory] = useState([]); //교필 리스트

  const [main_test_pass, setMain_test_pass] = useState(false); //졸업 시험 통과 여부
  const [double_test_pass, setDouble_test_pass] = useState(false); //이중전공 통과 여부

  const [foreign_certification, setForiegn_certification] = useState(""); //외국어 인증 항목 구분

  useEffect(() => {
    // 서버에서 값을 받아오는 함수
    const fetchValues = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/users/profiles/");

        setStudent_no(response.data.student_no);
        setMajor_type(response.data.major_type);

        setMain_major(response.data.main_major);
        setDouble_major(response.data.double_major);
        setMinor_major(response.data.minor_major);

        setTransfer(response.data.transfer);
        setForiegn(response.data.foreign);

        setMain_major_credit(response.data.main_major_credit);
        setDouble_major_credit(response.data.double_major_credit);
        setSecond_major_credit(response.data.second_major_credit);
        setOutside_credit(response.data.outside_credit);
        setLiberal_credit(response.data.liberal_credit);
        setMinor_major_credit(response.data.minor_major_credit);
        setTeaching_credit(response.data.teaching_credit);
        setSelf_selction_credit(response.data.self_selction_credit);
        setTotal_credit(response.config.data.total_credit);
        setTotal_score(response.data.total_score);

        setMajor_compulosry(response.data.major_compulosry);
        setLiberal_compulsory(response.data.liberal_compulsory);

        setMain_test_pass(response.data.main_test_pass);
        setDouble_test_pass(response.data.double_test_pass);

        setForiegn_certification(response.data.foreign_certification);
      } catch (error) {
        console.error("Error fetching values:", error);
      }
    };

    fetchValues();
  }, []);

  return (
    <div className={styles.page}>
      <EditNav />
      {/* <div className={styles.cheerUp2}>등록한 정보를 확인해보세요</div> */}
      <div className={styles.infoUpdateContainer}>
        <div className={styles.updateContainer}>
          {/* Profiles */}
          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{ fontSize: "23px", fontWeight: "Bold" }}
            >
              기본정보
            </h3>
            <div className={styles.inputInfo8}>
              학번: <span className={styles.viewValue}> {student_no} </span>
            </div>
            <div className={styles.inputInfo8}>
              전공 유형:{" "}
              <span className={styles.viewValue}> {major_type} </span>
            </div>
            <div className={styles.inputInfo8}>
              전공:{" "}
              <span className={styles.viewValue}>
                {" "}
                {main_major} {double_major} {minor_major}{" "}
              </span>
            </div>
            <div className={styles.inputInfo8}>
              {" "}
              기타 사항:{" "}
              <span className={styles.viewValue}>
                {" "}
                {transfer} {foreign}{" "}
              </span>
            </div>
          </div>

          {/* Credits */}
          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{
                fontSize: "23px",
                fontWeight: "Bold",
                margin: "1rem 0 0 0",
              }}
            >
              취득학점{" "}
            </h3>
            <div className={styles.inputInfo}>
              <CreditTable />
            </div>
          </div>

          {/* Subjects */}

          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{
                fontSize: "23px",
                fontWeight: "Bold",
                margin: "1rem 0 0 0",
              }}
            >
              수강과목{" "}
            </h3>
            <div className={styles.inputInfo6} style={{ padding: "1rem 0" }}>
              <div></div>
              <label className={styles.labelIndex}>전공 필수 과목</label>
              <label className={styles.labelIndex2}>교양 필수 과목</label>
              <div>
                <div className={styles.subjectContainer2}>
                  {major_compulosry}
                </div>
                <div className={styles.subjectContainer3}>
                  {liberal_compulsory}
                </div>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <h3
              className={styles.inputInfo9}
              style={{
                fontSize: "23px",
                fontWeight: "Bold",
                margin: "1rem 0 0 0",
              }}
            >
              기타사항{" "}
            </h3>
            <div className={styles.inputInfo8}>
              {" "}
              졸업 시험/ 논문 통과 여부:{" "}
              <span className={styles.viewValue}>
                {main_test_pass ? "본전공 통과" : "본전공 미통과"} &nbsp;{" "}
                {double_test_pass ? "이중전공 통과" : "이중전공 미통과"}{" "}
              </span>
            </div>
            <div className={styles.inputInfo8}>
              {" "}
              보유 및 제출한 외국어 인증 점수 구분:{" "}
              <span className={styles.viewValue}>{foreign_certification}</span>
            </div>
            <br />
            <Link to="/MY">
              <button className={styles.Completed}>확인 완료</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
