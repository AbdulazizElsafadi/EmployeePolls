import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Nav = ({ authedUser, dispatch }) => {
  const navigate = useNavigate();

  const handLogout = () => {
    dispatch(setAuthedUser(null));
    navigate("/login");
  };

  return (
    <>
      {authedUser ? (
        <>
          <header className="header">
            <nav className="nav">
              <Link
                className="hover-underline-animation"
                data-testid="home"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover-underline-animation"
                data-testid="leaderboard"
                to="/Leaderboard"
              >
                Leaderboard
              </Link>
              <Link
                className="hover-underline-animation"
                data-testid="add"
                to="/add"
              >
                New
              </Link>
            </nav>
            <nav>
              <img src={authedUser.avatarURL} alt="authedUser" />
              <span>{authedUser.id}</span>
              <Link
                className="logout hover-underline-animation"
                onClick={handLogout}
                data-testid="logout"
              >
                Logout
              </Link>
            </nav>
          </header>
          <hr />
        </>
      ) : null}
    </>
  );
};

const mapStateToProp = ({ users, authedUser }) => {
  return {
    authedUser: users[authedUser],
  };
};

export default connect(mapStateToProp)(Nav);
