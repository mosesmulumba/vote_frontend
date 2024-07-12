import React from "react";
import styles from "./header.module.css";
// import { useNavigate } from "react-router-dom";
import Login from "../Login";
import { Link } from "react-router-dom";

function Header({ logoUrl, siteName, login }) {
  // const navigate = useNavigate();

  // const [username , setUsername] = useState('');

  // useEffect(() => {
  //     const fetchUserInfo = async () => {
  //       const user = { name: 'John Doe' };
  //       setUsername(user.name);
  //     };
  //     fetchUserInfo();
  //   }, []);

  //   const handleLogout = () => {
  //     console.log('User logged out');
  //   };

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.logoContainer}`}>
        <img src={logoUrl} alt="site logo" className={`${styles.logo}`} />
        <span className={`${styles.siteName}`}>{siteName}</span>
      </div>
      <div className={`${styles.userinfo}`}>
        <div>
          <div className={`${styles.headerLink}`}>
            <Link to="/" className="HeaderLinkDocs">
              <button className={`${styles.logoutButton}`}>Dashboard</button>
            </Link>
          </div>
          <div className={`${styles.headerLink}`}>
            <Link to="/" className="HeaderLinkDocs">
              <button className={`${styles.logoutButton}`}>Register</button>
            </Link>
          </div>
          <div className={`${styles.headerLink}`}>
            <Link to="/login" element={<Login />}>
              <button className={`${styles.logoutButton}`}>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
