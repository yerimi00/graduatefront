import React from "react";
import styles from "../css/LoginPage.module.css";
import Google from "../img/Google.png";
import slogo from "../img/slogo.jpg";

function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.HugeButton}>
          <img src={slogo} alt="Logo" className={styles.loginLogo} />
          <h1 className={styles.LoginText}>LOGIN</h1>
          <button className={styles.Signing}>
            <img className={styles.google} src={Google} alt="SignIn" />
            <span className={styles.signText}>Sign in with Google</span>
          </button>
          <div className={styles.checkList1}>
            <input type="checkbox"
              name="testPass" value="main_test_pass" />저는 한국외국어대학교 학생입니다. <br />
            <input type="checkbox"
              name="testPass" value="double_test_pass" />개인정보 수집 및 이용 동의합니다.
          </div>
        </div>
      </div>
      
      <div className={styles.footer}>
        <h2 className={styles.Follow}>
          *한국외국어대학교 이메일로 로그인 해주세요!*
        </h2>
      </div>
    </>
  );
}
export default LoginPage;