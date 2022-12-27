import { _getUsers, _getQuestions } from "../utils/_DATA";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
// import { showLoading, hideLoading } from "react-redux-loading-bar";

export const async_getData = () => {
  return (dispatch) => {
    // dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(setAuthedUser("sarahedo"));
        // dispatch(hideLoading());
      })
      .catch((err) => console.log("error occurred in getting the data:", err));
  };
};
