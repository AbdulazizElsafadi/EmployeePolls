import { useRef } from "react";
import { connect } from "react-redux";
import { async_addQuestion } from "../actions/shared";
import { useNavigate } from "react-router";

const NewPoll = ({ authedUser, dispatch }) => {
  const navigate = useNavigate();

  const questionOne = useRef("");
  const questionTwo = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // add question
    dispatch(
      async_addQuestion({
        optionOneText: questionOne.current.value,
        optionTwoText: questionTwo.current.value,
        author: authedUser,
      })
    );

    navigate("/");
  };

  return (
    <form className="new-page center" onSubmit={handleSubmit}>
      <h1 className="center">Would You Rather</h1>

      <h4 className="center">Create Your Own Poll</h4>

      <p className="center">
        <label>First Option</label>
        <input
          ref={questionOne}
          type="text"
          required
          placeholder="option One"
          data-testid="optionOne"
        />
      </p>

      <p className="center">
        <label>Second Option</label>
        <input
          ref={questionTwo}
          type="text"
          required
          placeholder="option Two"
          data-testid="optionTwo"
        />
      </p>

      <input
        className="option-btn"
        type="submit"
        placeholder="Submit"
        data-testid="submit"
      />
    </form>
  );
};

const mapStateToProp = ({ authedUser }) => {
  return {
    authedUser: authedUser,
  };
};

export default connect(mapStateToProp)(NewPoll);
