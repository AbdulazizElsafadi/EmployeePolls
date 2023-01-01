import { connect } from "react-redux";

const compareFn = (a, b) => {
  const aAnswersAndQuestions =
    a.questions.length + Object.keys(a.answers).length;
  const bAnswersAndQuestions =
    b.questions.length + Object.keys(b.answers).length;

  if (aAnswersAndQuestions > bAnswersAndQuestions) {
    return -1;
  }
  if (aAnswersAndQuestions < bAnswersAndQuestions) {
    return 1;
  }
  return 0;
};

const Leaderboard = ({ users }) => {
  return (
    <table className="leaderboard">
      <tbody>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </tbody>
      {/* the sort return to use a new array */}
      {[...Object.values(users)].sort(compareFn).map((user) => {
        return (
          <tbody key={user.id}>
            <tr>
              <td>
                <div className="user-details">
                  <img src={user.avatarURL} alt={"img"} />
                  <span className="user-name">
                    {user.name}
                    <p className="user-id">{user.id}</p>
                  </span>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

const mapStateToProp = ({ users }) => {
  return {
    users: users,
  };
};

export default connect(mapStateToProp)(Leaderboard);
