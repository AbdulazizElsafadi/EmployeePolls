import { connect } from "react-redux";
import Poll from "./Poll";

const Dashboard = (props) => {
  const answers = Object.keys(props.users[props.authedUser].answers).map(
    (answer) => answer
  );

  let flag = false;
  console.log(answers);

  return (
    <div className="polls-container">
      <h2>New Questions</h2>
      <div className="unanswered">
        {/* Mapping over all questions*/}
        {Object.keys(props.questions).map((question) => {
          flag = false;
          answers.map((answer) => {
            return answer === question ? (flag = true) : null;
          });
          return !flag ? <Poll id={question} key={question} /> : null;
        })}
      </div>
      {/* // User answer those questions */}
      <h2>Done</h2>
      <div className="answered">
        {Object.keys(props.users[props.authedUser].answers).map((answer) => (
          <Poll key={answer} id={answer} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProp = ({ questions, users, authedUser }) => {
  return {
    questions,
    users,
    authedUser,
  };
};

export default connect(mapStateToProp)(Dashboard);
