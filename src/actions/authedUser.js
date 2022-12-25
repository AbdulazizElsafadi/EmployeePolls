export const SET_AUTHEDUSER = "SET_AUTHEDUSER";

export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHEDUSER,
    id,
  };
};
