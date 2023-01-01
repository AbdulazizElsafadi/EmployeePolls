import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";

const Poll = ({ question }) => {
  return (
    <div className="poll">
      <h3>{question.author}</h3>
      <p>{formatDate(question.timestamp)}</p>
      <hr />
      <a href="/PollPage">show</a>
    </div>
  );
};

const mapStateToProp = ({ questions }, { id }) => {
  return {
    question: questions[id],
  };
};

export default connect(mapStateToProp)(Poll);
