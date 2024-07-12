import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.linksContainer}`}>
          <Link to="/team" className={`${styles.link}`}>
            Team Members
          </Link>
          <Link to="/dashboard" className={`${styles.link}`}>
            Dashboard
          </Link>
          <Link to="/login" className={`${styles.link}`}>
            Login
          </Link>
          <Link to="/get-started" className={`${styles.link}`}>
            Get Started
          </Link>
        </div>
        <div className={`${styles.copyright}`}>
          &copy; {new Date().getFullYear()} Uganda Martyrs University. All
          rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
