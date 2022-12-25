import { SET_AUTHEDUSER } from "../actions/authedUser";
const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHEDUSER:
      return action.id;
    default:
      return state;
  }
};

export default authedUser;
