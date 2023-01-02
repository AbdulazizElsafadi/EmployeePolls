import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
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

const PollPage = ({ id, questions, users, authedUser, dispatch }) => {
  if (!questions[id]) return <Navigate to="*" />;

  const question = questions[id];
  const user = users[questions[id].author];

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
    questions,
    users,
    authedUser: users[authedUser],
    id,
  };
};

export default withRouter(connect(mapStateToProp)(PollPage));
