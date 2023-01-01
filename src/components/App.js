import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { async_getData } from "../actions/shared";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { Routes, Route } from "react-router";
import LoadingBar from "react-redux-loading-bar";
import ErrorPage from "./ErrorPage";

const App = (props) => {
  useEffect(() => {
    props.dispatch(async_getData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/add" element={<NewPoll />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route
            path="/questions/:question_id"
            exact
            element={<PollPage />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Fragment>
  );
};

// const mapStateToProps = ({ authedUser }) => {
//   return {
//     loading: authedUser === null,
//   };
// };

export default connect(null)(App);
