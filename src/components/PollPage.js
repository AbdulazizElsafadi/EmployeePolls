import { connect } from "react-redux";
import { async_saveQuestionAnswer } from "../actions/shared";

const PollPage = ({ id, answered, question, user, authedUser, dispatch }) => {
  console.log("answer:", answered);
  const handleAnswer = (answer) =>
    dispatch(async_saveQuestionAnswer(authedUser, id, answer));

  // Don't forget to make sure that the authedUser didn't answer this question

  let flag = false;
  return answered ? (
    <div className="poll-page">
      <h1 className="center">Poll by {user.id}</h1>
      <img className="avatar" src={user.avatarURL} alt={user.id} />
      {question.optionOne.votes.map((user) => {
        return user === authedUser ? (flag = true) : (flag = false);
      })}
      {flag ? (
        <h2 className="center">Your answer was: {question.optionOne.text}</h2>
      ) : (
        <h2 className="center">Your answer was: {question.optionTwo.text}</h2>
      )}

      <h2 className="center">
        People who voted to your answer: {question.optionOne.votes.length}
      </h2>

      <h2 className="center">
        Percentage of people who voted like you:{" "}
        {(question.optionOne.votes.length /
          (question.optionOne.votes.length + question.optionTwo.votes.length)) *
          100 +
          "%"}
      </h2>
    </div>
  ) : (
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

const mapStateToProp = ({ questions, users, authedUser }, { id }) => {
  return {
    question: questions[id],
    user: users[questions[id].author],
    authedUser,
  };
};

export default connect(mapStateToProp)(PollPage);
