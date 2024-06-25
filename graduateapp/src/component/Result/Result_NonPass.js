import React, { useState, useEffect } from "react";
import styles from "../css/Result.module.css";
import moreInfo from "./moreInfo.png";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

export default function Result_NonPass() {
  const [isOpen, setIsOpen] = useState(false);

  const [main_major, setMain_major] = useState("");
  const [double_major, setDouble_major] = useState("");
  const [liberal, setLiberal] = useState("");
  const [minor_major, setMinor_major] = useState("");
  const [total_score, setTotal_score] = useState(false);

  const [major_compulosry, setMajor_compulosry] = useState([]);
  const [liberal_compulsory, setLiberal_compulsory] = useState([]);

  const [main_test_pass, setMain_test_pass] = useState(false); //졸업 시험 통과 여부
  const [double_test_pass, setDouble_test_pass] = useState(false); //이중전공 통과 여부
  const [foreign_certification, setForiegn_certification] = useState(false); //외국어 인증 항목 구분

  useEffect(() => {
    // 서버에서 값을 받아오는 함수
    const fetchValues = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/users/results/");

        setMain_major(response.data.main_major);
        setDouble_major(response.data.double_major);
        setLiberal(response.data.liberal);
        setMinor_major(response.data.minor_major);
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
    <>
      <div className={styles.page}>
        <div className={styles.cheerUp}>졸업까지 얼마 안 남았아요💪🏻</div>
        <div className={styles.resultContainer}>
          {total_score ? (
            ""
          ) : (
            <div className={styles.specificResultContainer}>
              <div className={styles.needThisTitle}>
                학점을 <br /> 보충해야 해요
              </div>
              <div className={styles.needThisItemSubTitle}>
                보충해야 할 부분은
              </div>
              <div className={styles.needThisItem}>
                <ul className={styles.nonPassList}>
                  <li>{main_major}</li>
                  <li>{double_major}</li>
                  <li>{liberal}</li>
                  <li>{minor_major}</li>
                  <li>{total_score}</li>
                </ul>
              </div>
              <div className={styles.needThisItemSubTitle}>입니다</div>
            </div>
          )}

          {main_major ? (
            ""
          ) : (
            <div className={styles.specificResultContainer}>
              <div className={styles.needThisTitle}>
                전필 학점이 <br /> 부족해요
              </div>
              <div className={styles.needThisItemSubTitle}>
                해결 방법을 알려드릴게요
              </div>
              <div className={styles.needThisItem}>
                <ul className={styles.nonPassList}>
                  {major_compulosry.map((item, index) => {
                    <li key={index}>{item.name}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.needThisItemSubTitle}>을 수강해주세요</div>
            </div>
          )}

          {liberal ? (
            ""
          ) : (
            <div className={styles.specificResultContainer}>
              <div className={styles.needThisTitle}>
                교필 학점이 <br /> 부족해요
              </div>
              <div className={styles.needThisItemSubTitle}>
                해결 방법을 알려드릴게요
              </div>
              <div className={styles.needThisItem}>
                <ul className={styles.nonPassList}>
                  {liberal_compulsory.map((item, index) => {
                    <li key={index}>{item.name}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.needThisItemSubTitle}>을 수강해주세요</div>
            </div>
          )}

          {main_test_pass && double_test_pass ? (
            ""
          ) : (
            <div className={styles.specificResultContainer}>
              <div className={styles.needThisTitle}>
                졸시/졸논을 <br />
                통과해야 해요
              </div>
              <div className={styles.needThisItem}>
                <ul className={styles.nonPassList}>
                  <li className={styles.needThisItem}>
                    {main_test_pass ? "" : "본전공"}{" "}
                  </li>
                  <li className={styles.needThisItem}>
                    {double_test_pass ? "" : "이중전공"}{" "}
                  </li>
                </ul>
              </div>
              <div className={styles.needThisItemSubTitle}>
                졸시/졸논을 준비해주세요
              </div>
            </div>
          )}

          {foreign_certification ? (
            ""
          ) : (
            <div className={styles.specificResultContainer}>
              <div className={styles.needThisTitle}>
                외국어 인증이 <br /> 필요해요
              </div>
              <div className={styles.needThisItem}>
                <div className={styles.needThisItemMoreInfo}>
                  자세한 사항은
                  <br /> 하단 링크에서 <br />
                  확인할 수 있어요
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.moreInfoContainer}>
          <span
            className={styles.moreInfoButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={styles.moreInfo}>
              더 많은 정보가 필요하신가요?
              <span>
                <img
                  className={styles.moreInfoPic}
                  src={moreInfo}
                  alt="정보 바로가기"
                />
              </span>
            </span>
          </span>
          <span className={styles.ListContainer}>
            {isOpen && (
              <ul className={styles.moreInfoList}>
                <li className={styles.moreInfoListItem}>
                  <a
                    className={styles.linkStyle1}
                    href="http://localhost:3000/subjectConditionPaper.xls"
                  >
                    수강 유의 과목 확인하기
                  </a>
                </li>
                <li className={styles.moreInfoListItem}>
                  <a
                    className={styles.linkStyle2}
                    href="http://localhost:3000/foreignCertificationPaper.pdf"
                    download
                  >
                    외국어 인증 요건 확인하기
                  </a>
                </li>
              </ul>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
