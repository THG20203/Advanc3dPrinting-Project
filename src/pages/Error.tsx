import { useRouteError } from "react-router-dom";

/* RoutError interface - typescript defines shape of an object */
interface RouteError {
  /* any object conforming to RouteError must have a status property (should be number). */
  status: number;
  /* the object must also have a data property, which itself is an object containing a
  message property of type string. This message is intended to provide a human-readable
  description or details about the error. */
  data: {
    message: string;
  };
}

const ErrorPage = () => {
  /* Type assertion in TypeScript allows you to tell the compiler
  about the type of an object more specifically than it can infer on its own. */

  /* useRouteError(): This is a custom hook from the 
  react-router-dom library, designed to retrieve error information from the 
  router. */

  /* as RouteError: This part of the syntax tells TypeScript that the object 
  returned from useRouteError() should be treated as conforming to the RouteError 
  interface. */

  /* I'm asserting that the return value of useRouteError() fits the
  shape of RouteError, which includes both a numeric status and a nested data 
  object with a message. */
  const error = useRouteError() as RouteError; // Type assertion

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
};

export default ErrorPage;
