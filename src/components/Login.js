const Login = () => {
  const handleSubmit = () => {
    // handle submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="container">
        <label>
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" required />

        <label>
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
