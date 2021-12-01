import React from "react";

const Card = (props) => {
  return (
    <div className=" container p-5">
      <div className="row neo p-5">{props.children}</div>
    </div>
  );
};

export default Card;
