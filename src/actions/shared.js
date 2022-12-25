import { _getUsers, _getQuestions } from "../utils/_DATA";
import { getUsers } from "./users";
import { getQuestions } from "./questions";

export const async_getData = () => {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
      })
      .catch((err) => console.log("error occurred in getting the data:", err));
  };
};
