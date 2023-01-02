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
import Auth from "../utils/Auth";

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
          <Route
            path="/"
            exact
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/add"
            element={
              <Auth>
                <NewPoll />
              </Auth>
            }
          ></Route>
          <Route
            path="/leaderboard"
            element={
              <Auth>
                <Leaderboard />
              </Auth>
            }
          ></Route>
          <Route
            path="/questions/:question_id"
            exact
            element={
              <Auth>
                <PollPage />
              </Auth>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Auth>
                <ErrorPage />
              </Auth>
            }
          ></Route>
        </Routes>
      </div>
    </Fragment>
  );
};
export default connect(null)(App);
