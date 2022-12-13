import Button from "../components/Button";

const gogoleSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png";
const githubSrc = "https://cdn-icons-png.flaticon.com/512/5968/5968866.png";
const facebookSrc =
  "https://seeklogo.com/images/F/facebook-logo-C64946D6D2-seeklogo.com.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-logo-wrapper">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1024px-Stack_Overflow_icon.svg.png?20190716190036" />
      </div>

      <div className="login-auth-wrapper">
        <Button
          text={"Log in with Google"}
          className={"google"}
          src={gogoleSrc}
        />
        <Button
          text={"Log in with Github"}
          className={"github"}
          src={githubSrc}
        />
        <Button
          text={"Log in with Facebook"}
          className={"facebook"}
          src={facebookSrc}
        />
      </div>

      <div className="login-input-wrapper">
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email"></input>
          </div>

          <div className="login-input-passwrod-box">
            <div className="login-input-passwrod-recovery">
              <label htmlFor="password">Password</label>
              <a href="/account-recovery">Forgot password?</a>
            </div>
            <input id="password"></input>
          </div>
          <div>
            <Button text={"Login"} />
          </div>
        </form>
      </div>
      <div className="login-footer">
        Don’t have an account?
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
};
export default Login;
