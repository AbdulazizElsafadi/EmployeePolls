import {
  GET_USERS,
  SAVE_USER_ANSWER,
  ADD_USER_QUESTION,
} from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    case ADD_USER_QUESTION:
      console.log(
        "state[action.question.author]:",
        state[action.question.author]
      );
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };

    default:
      return state;
  }
};

export default users;
