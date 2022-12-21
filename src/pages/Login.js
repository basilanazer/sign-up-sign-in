import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/login2");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/login2");
  }, [navigate]);

  const onSIGNUPHEREClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle1@2x.png" />
      <div className={styles.rectangleDiv} />
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButtonClick}
      />
      <button className={styles.rectangleButton1} />
      <input className={styles.rectangleInput} type="text" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.lOGIN} onClick={onLOGINTextClick}>
        <p className={styles.lOGIN1}>LOGIN</p>
      </div>
      <div className={styles.username}>username</div>
      <div className={styles.password}>password</div>
      <img className={styles.iconLock} alt="" src="../-icon-lock1.svg" />
      <img className={styles.iconUser} alt="" src="../-icon-user1.svg" />
      <div className={styles.welcome}>{`Welcome `}</div>
      <div className={styles.forgotPassword}>forgot password?</div>
      <img className={styles.lineIcon} alt="" src="../line-2.svg" />
      <div className={styles.newUser}>new user |</div>
      <div className={styles.sIGNUPHERE} onClick={onSIGNUPHEREClick}>
        SIGN UP HERE
      </div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default Login;
