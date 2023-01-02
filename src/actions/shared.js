import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../utils/_DATA";
import { getUsers, saveUserAnswer } from "./users";
import { getQuestions, saveQuestionAnswer } from "./questions";
import { addQuestion } from "./questions";
import { addUserQuestion } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const async_getData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
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

export const async_addQuestion = (question) => {
  return (dispatch) => {
    _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      })
      .catch((err) => console.log("err, failed to add a new question", err));
  };
};
