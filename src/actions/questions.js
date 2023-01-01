import { _saveQuestion } from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const saveQuestionAnswer = (authedUser, qid, answer) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
};

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const async_addQuestion = (question) => {
  return (dispatch) => {
    _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .catch((err) => console.log("err, failed to add a new question", err));
  };
};
