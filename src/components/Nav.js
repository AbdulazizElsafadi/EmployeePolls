import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ authedUser }) => {
  return (
    <>
      {authedUser ? (
        <>
          <header className="header">
            <nav className="nav">
              <Link className="hover-underline-animation" to="/Dashboard">
                Home
              </Link>
              <Link className="hover-underline-animation" to="/Leaderboard">
                Leaderboard
              </Link>
              <Link className="hover-underline-animation" to="/add">
                New
              </Link>
            </nav>
            <nav>
              <img src={authedUser.avatarURL} alt="authedUser" />
              <span>{authedUser.id}</span>
              <Link
                className="logout hover-underline-animation"
                href="./logout"
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
