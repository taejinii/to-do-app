import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-wrapper">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/login")}>Log in</li>
          <li onClick={() => navigate("/signup")}>Sign up</li>
          <li onClick={() => navigate("/mypage")}>My page</li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
