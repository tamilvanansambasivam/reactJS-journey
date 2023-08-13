import React from "react";
import { useRouteError , Link} from "react-router-dom";


const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
     
      <h1 className="message">
        
        <span className="oops">Oops!!! 🙀</span>
        <br />
        something went wrong !
        <br/>
        <Link to="/">Back Home</Link>
      </h1>
     
    </>
  );
};

export default ErrorElement;
