import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const Auth = ({ children, isAuth }) => {
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  } else return children;
};

const mapStateToProp = ({ authedUser }) => {
  return {
    isAuth: !(authedUser === null),
  };
};

export default connect(mapStateToProp)(Auth);
