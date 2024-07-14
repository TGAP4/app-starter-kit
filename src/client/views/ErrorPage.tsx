import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? error.data.message || error.statusText
            : "Unknown error message"}
        </i>
      </p>
      <button type="button" onClick={() => navigate(-1)}>
        GO BACK
      </button>
    </div>
  );
};

export default ErrorPage;
