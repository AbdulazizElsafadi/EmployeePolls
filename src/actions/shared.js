import { _getUsers, _getQuestions, _saveQuestionAnswer } from "../utils/_DATA";
import { getUsers, saveUserAnswer } from "./users";
import { getQuestions, saveQuestionAnswer } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const async_getData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        // dispatch(setAuthedUser("sarahedo"));
        dispatch(hideLoading());
      })
      .catch((err) => console.log("error occurred in getting the data:", err));
  };
};

export const async_saveQuestionAnswer = (authedUser, qid, answer) => {
  return (dispatch) => {
    _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(showLoading());
        dispatch(saveUserAnswer(authedUser, qid, answer));
        dispatch(saveQuestionAnswer(authedUser, qid, answer));
        dispatch(hideLoading());
      })
      .catch((err) =>
        console.log("Error occurred in saving a question answer:", err)
      );
  };
};
