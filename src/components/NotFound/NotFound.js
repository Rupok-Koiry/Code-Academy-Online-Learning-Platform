import React from "react";
import notFoundImg from "../../images/404.png";
import { useHistory } from "react-router-dom";

const imgStyle = {
  filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.3))",
  marginBottom: "2rem",
};
const NotFound = () => {
  const history = useHistory();
  return (
    <div className="text-center my-5">
      <div>
        <img style={imgStyle} src={notFoundImg} alt="Page not found" />
        <h2>OPPS! PAGE NOT FOUND</h2>
        <button className="btn my-3" onClick={() => history.push("/")}>
          GO TO HOME PAGE
        </button>
      </div>
    </div>
  );
};

export default NotFound;
