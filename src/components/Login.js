import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  //change to useRef
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errMess, setErrMess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { users, dispatch } = props;
    if (users[username] && users[username].password == password) {
      setErrMess(null);
      dispatch(setAuthedUser(users[username].id));
      // navigate to home page
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
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
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
