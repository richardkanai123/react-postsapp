import React from "react";
import { Link } from "react-router-dom";

const NotFoundelement = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-4 text-sky-800">
        4📀4
      </h1>
      <p className="text-2xl font-bold text-center mt-4 text-sky-600">
        Sorry😔, We couldn't find the page you are looking for...
        <br />
        <span className="text-2xl font-bold text-center text-sky-600">
          Go back{" "}
          <Link to="/posts" className="text-sky-900 underline ">
            Home
          </Link>
        </span>
      </p>
    </>
  );
};

export default NotFoundelement;
