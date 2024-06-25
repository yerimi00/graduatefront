import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/StepInsert.module.css";
import InsertNav from "../Header/InserNav";
import axiosInstance from "../../api/axiosInstance";

function StepInsert() {
  const [majorValue, setMajorValue] = useState([]);
  const [refinementValue, setRefinementValue] = useState([]);
  const [flex, setFlex] = useState("");
  const [flexSpeaking, setFlexSpeaking] = useState("");
  const [toeic, setToeic] = useState("");
  const [toeicSpeaking, setToeicSpeaking] = useState("");

  const [mainMajor, setMainMajor] = useState("");
  const [doubleMajor, setDoubleMajor] = useState("");
  const [secondMajor, setSecondMajor] = useState("");
  const [outside, setOutside] = useState("");
  const [liberal, setLiberal] = useState("");
  const [minorMajor, setMinorMajor] = useState("");
  const [teaching, setTeaching] = useState("");
  const [selfSelection, setSelfSelection] = useState("");
  const [totalCredit, setTotalCredit] = useState("");
  const [totalScore, setTotalScore] = useState("");

  const [majorSubject, setMajorSubject] = useState([]);
  const [liberalSubject, setLiberalSubject] = useState([]);

  const [mainTestPass, setMainTestPass] = useState("");
  const [doubleTestPass, setDoubleTestPass] = useState("");
  const [foreignCertification, setForeignCertification] = useState("");

  useEffect(() => {
    // 서버에서 값을 받아오는 함수
    const fetchValues = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/users/requirements");
        setMajorValue(response.data.major_compulosry);
        setRefinementValue(response.data.liberal_compulsory);
        setFlex(response.data.flex);
        setFlexSpeaking(response.data.flex_speaking);
        setToeic(response.data.toeic);
        setToeicSpeaking(response.data.toeic_speaking);
      } catch (error) {
        console.error("Error fetching values:", error);
      }
    };

    fetchValues();
  }, []);

  const handleSubmit = async () => {
    try {
      await axiosInstance.post("/api/v1/users/profiles/completions/", {
        credit: {
          main_major: mainMajor,
          double_major: doubleMajor,
          second_major: secondMajor,
          outside: outside,
          liberal: liberal,
          minor_major: minorMajor,
          teaching: teaching,
          self_selction: selfSelection,
          total_credit: totalCredit,
          total_score: totalScore,
        },
        major_subject: majorSubject,
        liberal_subject: liberalSubject,
        extra: {
          main_test_pass: mainTestPass,
          double_test_pass: doubleTestPass,
          foreign_certification: foreignCertification,
        },
      });
      alert("등록되었습니다!");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const inputValues = [
    { name: "1전공", value: mainMajor, setValue: setMainMajor },
    { name: "이중전공", value: doubleMajor, setValue: setDoubleMajor },
    { name: "2전공", value: secondMajor, setValue: setSecondMajor },
    { name: "실외", value: outside, setValue: setOutside },
    { name: "교양", value: liberal, setValue: setLiberal },
    { name: "부전공", value: minorMajor, setValue: setMinorMajor },
    { name: "교직", value: teaching, setValue: setTeaching },
    { name: "자선", value: selfSelection, setValue: setSelfSelection },
    { name: "총취득", value: totalCredit, setValue: setTotalCredit },
    { name: "총평점", value: totalScore, setValue: setTotalScore },
  ];

  return (
    <>
      <div className={styles.page}>
        <InsertNav />
        <div className={styles.Container}>
          <div className={styles.updateContainer}>
            <p className={styles.hello}>사용자 이수 정보를 알려주세요</p>
            {/* step1 */}
            <div className={styles.Div}>
              <span className={styles.backColor}>STEP. 1</span>
              <div className={styles.step}>취득학점 및 성적을 입력해주세요</div>
            </div>

            <div className={styles.stepContainer}>
              ➀ 종합정보시스템에 접속해주세요
              <a href="https://wis.hufs.ac.kr/src08/jsp/index.jsp">
                &gt;&gt; 한국외국어대학교 종합정보시스템 바로가기
              </a>
              <span>➁ 종합정보시스템에 로그인하기</span>
              <span>➂ 성적/학점/졸업관리 &gt; 성적 취득 현황에 접속</span>
              {/* <img src={creditImg} alt="Credit Info" /> */}
              <span>➃ 위 화면에 표시되는 값 입력하기</span>
              <div className={styles.BoxContainer}>
                {inputValues.map((value) => {
                  return (
                    <div className={styles.Box}>
                      <div className={styles.contentTitle}>{value.name}</div>
                      <input
                        type="number"
                        className={styles.content}
                        value={value.value}
                        onChange={(e) => value.setValue(e.target.value)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* step2 */}
            {/* <div className={styles.step}>
             수강한 전공필수 과목/교양 필수 과목을 체크해주세요
          </div> */}
            <div className={styles.Div}>
              <span className={styles.backColor}>STEP. 2</span>
              <div className={styles.step}>
                수강한 전공필수 과목/교양 필수 과목을 체크해주세요
              </div>
            </div>
            <div className={styles.stepContainer2}>
              <div className={styles.Choice}>
                <span>➀ 전공필수과목</span>
                {/* <div>
                  <input type="radio" name="Major" value="전공" checked />
                  <span>{majorValue}</span>
                </div> */}
                {majorValue.map((subject) => (
                  <div key={subject}>
                    <input
                      type="radio"
                      name="major"
                      value={"전공"}
                      onChange={(e) => setMajorValue(e.target.value)}
                    />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
              <div className={styles.Choice}>
                <span>➁ 교양필수과목</span>
                {/* <div>
                  <input type="radio" name="refinement" value="교양" checked />
                  <span>{refinementValue}</span>
                </div> */}
                {refinementValue.map((subject) => (
                  <div key={subject}>
                    <input
                      type="radio"
                      name="refinement"
                      value={"교양"}
                      onChange={(e) => setRefinementValue(e.target.value)}
                    />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* step3 */}
            {/* <div className={styles.step}>
            Step.3 전공 졸업시험/졸업논문에 통과하셨나요?
          </div> */}
            <div className={styles.Div}>
              <span className={styles.backColor}>STEP. 3</span>
              <div className={styles.step}>
                전공 졸업시험/졸업논문에 통과하셨나요?
              </div>
            </div>
            <div className={styles.stepContainer}>
              <div className={styles.Choice}>
                <div className={styles.center}>
                  <input
                    type="radio"
                    name="pass"
                    value="통과여부"
                    checked
                    onChange={(e) => setMainTestPass(e.target.value)}
                  />
                  <span>본전공통과</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="pass"
                    value="통과여부"
                    checked
                    onChange={(e) => setDoubleTestPass(e.target.value)}
                  />
                  <span>이중전공통과</span>
                </div>
                <div>
                  <input type="radio" name="pass" value="통과여부" checked />
                  <span>해당없음</span>
                </div>
              </div>
            </div>

            {/* step4 */}
            {/* <div className={styles.step}>
            Step.4 외국어 인증 완료했나요?
            <br />
            <span>
              *성적을 인증할 수 있는 ‘인증서 원본’을 최종학기 말까지 학사
              종합지원센터에 제출해야 합니다
            </span>
          </div> */}
            <div className={styles.Div}>
              <span className={styles.backColor}>STEP. 4</span>
              <div className={styles.step}>외국어 인증 완료했나요?</div>
            </div>
            <span className={styles.stepMessage}>
              *성적을 인증할 수 있는 ‘인증서 원본’을 최종학기 말까지 학사
              종합지원센터에 제출해야 합니다
            </span>
            <div className={styles.stepContainer}>
              <div className={styles.Choice}>
                <div>
                  <input
                    type="radio"
                    name="done"
                    value="통과여부"
                    checked
                    onChange={(e) => setForeignCertification(e.target.value)}
                  />
                  <span>Flex {flex} 이상</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="done"
                    value="통과여부"
                    checked
                    onChange={(e) => setForeignCertification(e.target.value)}
                  />
                  <span>Flex speaking {flexSpeaking} 이상</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="done"
                    value="통과여부"
                    checked
                    onChange={(e) => setForeignCertification(e.target.value)}
                  />
                  <span>TOEIC {toeic} 이상</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="done"
                    value="통과여부"
                    checked
                    onChange={(e) => setForeignCertification(e.target.value)}
                  />
                  <span>TOEIC speaking {toeicSpeaking} 이상</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="done"
                    value="통과여부"
                    checked
                    onChange={(e) => setForeignCertification(e.target.value)}
                  />
                  <span>장애학생 외국어 인증 면제</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="done"
                    value="통과여부"
                    checked
                    onChange={(e) => setForeignCertification(e.target.value)}
                  />
                  <span>외국어 인증 대체 관점 통과</span>
                </div>
              </div>
            </div>
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
    </>
  );
}
export default StepInsert;
