import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/sign-in-2");
  }, [navigate]);

  const onCREATEACCOUNTTextClick = useCallback(() => {
    navigate("/sign-in-2");
  }, [navigate]);

  const onLOGINHERETextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signIn}>
      <div className={styles.rectangleDiv} />
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButtonClick}
      />
      <input className={styles.rectangleInput} type="password" />
      <input className={styles.rectangleInput1} type="email" />
      <input className={styles.rectangleInput2} type="text" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.cREATEACCOUNT} onClick={onCREATEACCOUNTTextClick}>
        CREATE ACCOUNT
      </div>
      <div className={styles.welcomeToTheWorldOf}>
        <p className={styles.welcome}>Welcome</p>
        <p className={styles.welcome}>To The</p>
        <p className={styles.welcome}>World Of</p>
      </div>
      <div className={styles.alreadyHaveAnAccount}>Already Have An Account</div>
      <div className={styles.lOGINHERE} onClick={onLOGINHERETextClick}>
        | LOGIN HERE
      </div>
      <img className={styles.lineIcon} alt="" src="../line-1.svg" />
      <div className={styles.programing}>Programing</div>
      <div className={styles.username}>username</div>
      <div className={styles.password}>password</div>
      <div className={styles.email}>email</div>
      <img className={styles.rectangleIcon} alt="" src="../rectangle@2x.png" />
      <img className={styles.iconLock} alt="" src="../-icon-lock.svg" />
      <img className={styles.iconUser} alt="" src="../-icon-user.svg" />
      <img className={styles.iconEmail} alt="" src="../-icon-email.svg" />
    </div>
  );
};

export default SignIn;
