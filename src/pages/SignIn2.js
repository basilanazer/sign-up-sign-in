import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn2.module.css";

const SignIn2 = () => {
  const navigate = useNavigate();

  const onLogOutTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signIn2}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle3@2x.png" />
      <div className={styles.thankYouFor}>{`Thank you for `}</div>
      <div className={styles.signingUp}>Signing Up</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.logOut} onClick={onLogOutTextClick}>
        log out
      </div>
    </div>
  );
};

export default SignIn2;
