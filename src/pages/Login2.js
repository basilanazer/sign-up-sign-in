import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login2.module.css";

const Login2 = () => {
  const navigate = useNavigate();

  const onLogOutTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.login2}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle2@2x.png" />
      <div className={styles.welcomeBack}>Welcome Back</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.logOut} onClick={onLogOutTextClick}>
        log out
      </div>
    </div>
  );
};

export default Login2;
