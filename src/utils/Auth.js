import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const Auth = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  } else return children;
};

const mapStateToProp = ({ authedUser }) => {
  return {
    isAuth: !(authedUser === null),
  };
};

export default connect(mapStateToProp)(Auth);
