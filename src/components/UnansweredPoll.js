import { async_saveQuestionAnswer } from "../actions/shared";

const UnansweredPoll = ({ question, user, authedUser, dispatch }) => {
  const handleAnswer = (answer) => {
    dispatch(async_saveQuestionAnswer(authedUser.id, question.id, answer));
  };

  return (
    <div className="poll-page">
      <h1 className="center">Poll by {user.id}</h1>
      <img className="avatar" src={user.avatarURL} alt={user.id} />
      <h2 className="center">Would You Rather</h2>

      <div className="options">
        <div>
          <p>{question.optionOne.text}</p>
          <button
            className="option-btn"
            onClick={() => handleAnswer("optionOne")}
          >
            click
          </button>
        </div>
        <div>
          <p>{question.optionTwo.text}</p>
          <button
            className="option-btn"
            onClick={() => handleAnswer("optionTwo")}
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnansweredPoll;
