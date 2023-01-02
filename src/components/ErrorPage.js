import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="center">
      <h1>404 Error: Page Doesn't exist</h1>
      <Link to="/">Back To Hom</Link>
    </div>
  );
};

export default ErrorPage;
