import React from "react";
import styles from "../css/My.module.css";

function Table() {
  return (
    <table className={styles.CreditTable}>
      <tbody>
        <tr style={{ fontFamily: "Pretendard-Regular", fontSize: "20px" }}>
          <th>1전공</th>
          <th>이중전공</th>
          <th>2전공</th>
          <th>실외</th>
          <th>교양</th>
          <th>부전공</th>
          <th>교직</th>
          <th>자선</th>
          <th>총취득</th>
          <th>총평점</th>
        </tr>
        <tr style={{ fontFamily: "Pretendard-Regular", fontSize: "20px" }}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
