const AnsweredPoll = ({ question, user, authedUser }) => {
  let flag = false;
  return (
    <div className="poll-page" data-testid="clickedPoll">
      <h1 className="center">Poll by {user.id}</h1>
      <img className="avatar" src={user.avatarURL} alt={user.id} />
      {question.optionOne.votes.map((question) => {
        return question === authedUser.id ? (flag = true) : (flag = false);
      })}
      {flag ? (
        <div>
          <h2 className="center">Your answer was: {question.optionOne.text}</h2>
          <h2 className="center">
            People who voted to your answer: {question.optionOne.votes.length}
          </h2>
          <h2 className="center">
            Percentage of people who voted like you:{" "}
            {(
              question.optionOne.votes.length /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)
            ).toFixed(2) *
              100 +
              "%"}
          </h2>
        </div>
      ) : (
        <div>
          <h2 className="center">Your answer was: {question.optionTwo.text}</h2>
          <h2 className="center">
            People who voted to your answer: {question.optionTwo.votes.length}
          </h2>
          <h2 className="center">
            Percentage of people who voted like you:{" "}
            {(
              question.optionTwo.votes.length /
              (question.optionOne.votes.length +
                question.optionTwo.votes.length)
            ).toFixed(2) *
              100 +
              "%"}
          </h2>
        </div>
      )}
    </div>
  );
};

export default AnsweredPoll;
