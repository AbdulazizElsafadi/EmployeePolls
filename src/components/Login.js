import { useRef, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Login = ({ users, dispatch }) => {
  const username = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const [errMess, setErrMess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      users[username.current.value] &&
      users[username.current.value].password === password.current.value
    ) {
      setErrMess(null);
      dispatch(setAuthedUser(users[username.current.value].id));
      // navigate to home page

      navigate(redirectPath, { replace: true });
    } else setErrMess("username or password is incorrect");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <h2 className="center">You Need To Login</h2>

      {errMess && <h1 data-testid="error-message">{errMess}</h1>}
      <div className="container">
        <label>
          <b>Username</b>
        </label>
        <input
          data-testid="username"
          type="text"
          placeholder="Enter Username"
          ref={username}
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          data-testid="password"
          type="password"
          placeholder="Enter Password"
          ref={password}
          required
        />

        <button className="login-btn" type="submit" data-testid="submit-button">
          Login
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: users,
  };
};

export default connect(mapStateToProps)(Login);
