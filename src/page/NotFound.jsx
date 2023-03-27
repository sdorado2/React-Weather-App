import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Error 404 : Not Found</h2>
      <p>
        It looks like the location you are searching does not exist or could not
        be found.
      </p>

      <p>
        Click here to got back <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
