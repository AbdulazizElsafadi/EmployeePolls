import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/_DATA";

const Poll = ({ question }) => {
  return (
    <div className="poll">
      <h3>{question.author}</h3>
      <p>{formatDate(question.timestamp)}</p>
      <hr style={{ width: "100%" }} />
      <Link to={`/questions/${question.id}`}>Show</Link>
    </div>
  );
};

const mapStateToProp = ({ questions }, { id }) => {
  return {
    question: questions[id],
  };
};

export default connect(mapStateToProp)(Poll);
