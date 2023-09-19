import React from "react";
import "./Description.css";

const Description = (props) => {
  return (
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: props.description }}
    />
  );
};

export default Description;
