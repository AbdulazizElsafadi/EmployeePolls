import {
  ADD_QUESTION,
  GET_QUESTIONS,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";
const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_QUESTION_ANSWER:
      // console.log("authedUser in reducer:", state);
      // console.log("question in reducer:", action.qid);
      // console.log("vote in reducer:", state[action.qid][action.answer]);

      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid].answer,
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    default:
      return state;
  }
};

export default questions;
