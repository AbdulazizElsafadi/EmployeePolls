import { useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const username = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const [errMess, setErrMess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { users, dispatch } = props;
    if (
      users[username.current.value] &&
      users[username.current.value].password === password.current.value
    ) {
      setErrMess(null);
      dispatch(setAuthedUser(users[username.current.value].id));
      // navigate to home page
      navigate("/Dashboard");
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

      {errMess && <h1>{errMess}</h1>}

      <div className="container">
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          ref={username}
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          ref={password}
          required
        />

        <button className="login-btn" type="submit">
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
