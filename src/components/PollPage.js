import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const PollPage = ({ question, user, authedUser, dispatch }) => {
  let flag = false;
  return (
    <div>
      {Object.keys(authedUser.answers).map((answer) => {
        return answer === question.id ? (flag = true) : null;
      })}

      {flag ? (
        <AnsweredPoll
          data-testid={question.id}
          question={question}
          user={user}
          authedUser={authedUser}
        />
      ) : (
        <UnansweredPoll
          data-testid={question.id}
          question={question}
          user={user}
          authedUser={authedUser}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

const mapStateToProp = ({ questions, users, authedUser }, props) => {
  const id = props.router.params.question_id;
  return {
    question: questions[id],
    user: users[questions[id].author],
    authedUser: users[authedUser],
  };
};

export default withRouter(connect(mapStateToProp)(PollPage));
