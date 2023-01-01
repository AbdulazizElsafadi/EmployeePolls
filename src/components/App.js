import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { async_getData } from "../actions/shared";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
// import LoadingBar from "react-redux-loading-bar";

const App = (props) => {
  useEffect(() => {
    props.dispatch(async_getData());
  }, []);

  return props.loading ? null : <Leaderboard />;
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
