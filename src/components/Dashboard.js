import { connect } from "react-redux";
import Poll from "./Poll";

const Dashboard = (props) => {
  const { questions, users, authedUser } = props;
  const answers = Object.keys(users[authedUser].answers).map(
    (answer) => answer
  );

  return (
    <div className="polls-container">
      <div className="cont" data-testid="cont">
        <h2 className="center">New Questions</h2>
        <hr style={{ border: "2px solid #f1f1f1" }} />
        <div className="unanswered">
          {/* Mapping over all questions*/}
          {Object.keys(questions).map((question) => {
            let flag = false;
            answers.map((answer) => {
              return answer === question ? (flag = true) : null;
            });
            return !flag ? <Poll key={question} id={question} /> : null;
          })}
        </div>
      </div>
      {/* // User answer those questions */}
      <div className="cont">
        <h2 className="center">Done</h2>
        <hr style={{ border: "2px solid #f1f1f1" }} />
        <div className="answered">
          {answers.map((answer) => (
            <Poll key={answer} id={answer} />
          ))}
        </div>
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
