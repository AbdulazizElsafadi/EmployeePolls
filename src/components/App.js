import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { async_getData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(async_getData());
  }, []);

  return <Login />;
};

export default connect(null)(App);
