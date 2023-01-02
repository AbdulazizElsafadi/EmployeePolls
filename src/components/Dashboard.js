import { useState } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";

const compareFn = (a, b) => {
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  if (a.timestamp < b.timestamp) {
    return 1;
  }
  return 0;
};

const Dashboard = (props) => {
  const { questions, answers } = props;

  const [showAnsweredPolls, setShowAnsweredPolls] = useState(false);

  console.log("questions:", questions);
  console.log("answers:", answers);

  return (
    <div className="polls-container">
      <button
        onClick={() =>
          setShowAnsweredPolls((showAnsweredPolls) => !showAnsweredPolls)
        }
        className="toggle center"
      >
        {showAnsweredPolls ? (
          <h2>Show unanswered Polls </h2>
        ) : (
          <h2>Show Answered Polls</h2>
        )}
      </button>
      <div
        className={
          showAnsweredPolls ? "cont-unanswered hidden" : "cont-unanswered"
        }
        data-testid="cont"
      >
        <h2 className="center">New Questions</h2>
        <hr style={{ border: "2px solid #f1f1f1" }} />
        <div className="unanswered">
          {/* Mapping over all questions*/}
          {questions.map((question) => {
            let flag = false;
            answers.map((answer) => {
              return answer === question ? (flag = true) : null;
            });
            return !flag ? <Poll key={question.id} id={question.id} /> : null;
          })}
        </div>
      </div>
      {/* // User answer those questions */}
      <div
        className={
          showAnsweredPolls ? "cont-answered " : "cont-answered hidden"
        }
      >
        <h2 className="center">Done</h2>
        <hr style={{ border: "2px solid #f1f1f1" }} />
        <div className="answered">
          {answers.map((answer) => (
            <Poll key={answer.id} id={answer.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = ({ questions, users, authedUser }) => {
  const answers = Object.keys(users[authedUser].answers)
    .map((answer) => answer)
    .map((answer) => questions[answer]);

  // console.log("answers in mapStateToProp:", answers);

  return {
    questions: Object.values(questions).sort(compareFn),
    answers: answers.sort(compareFn),
  };
};

export default connect(mapStateToProp)(Dashboard);
