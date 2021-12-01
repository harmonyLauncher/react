import React from "react";

const RefCont = (props) => {
  return (
    <div className="container p-5">
      <div className="row g-0 text-white">
        <h1 className="fs-3">{props.title}</h1>
        <img src="images/banner02.jpg" alt="" className="img-fluid mb-5" />
        <h1 className="fs-3">{props.desc}</h1>
        <p className="text-justify mb-5">{props.p}</p>
      </div>
    </div>
  );
};

export default RefCont;
