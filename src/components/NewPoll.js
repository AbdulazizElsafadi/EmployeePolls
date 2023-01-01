import { useState } from "react";
import { connect } from "react-redux";
import { async_addQuestion } from "../actions/questions";

const NewPoll = ({ authedUser, dispatch }) => {
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // add question
    dispatch(
      async_addQuestion({
        optionOneText: questionOne,
        optionTwoText: questionTwo,
        author: authedUser,
      })
    );
  };

  return (
    <form className="new-page center" onSubmit={handleSubmit}>
      <h1 className="center">Would You Rather</h1>

      <h4 className="center">Create Your Own Poll</h4>

      <p className="center">
        <label>First Option</label>
        <input
          onChange={(e) => setQuestionOne(e.target.value)}
          type="text"
          required
          placeholder="option One"
        />
      </p>

      <p className="center">
        <label>Second Option</label>
        <input
          onChange={(e) => setQuestionTwo(e.target.value)}
          type="text"
          required
          placeholder="option Two"
        />
      </p>

      <input className="option-btn" type="submit" placeholder="Submit" />
    </form>
  );
};

const mapStateToProp = ({ authedUser }) => {
  return {
    authedUser: authedUser,
  };
};

export default connect(mapStateToProp)(NewPoll);
