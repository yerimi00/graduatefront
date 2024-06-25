import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <div>졸업할 결심</div>
        </Link>
        <div className={styles.menuDiv}>
          <div className={styles.menu}>
            <img></img>
            <span className={styles.menu}>Link</span>
          </div>
          <Link to="/About" className={styles.menu}>
            <span className={styles.menu}>About</span>
          </Link>

          <Link to="/MY" className={styles.menu}>
            <span> MY</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
