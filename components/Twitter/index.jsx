import React from "react";
import "./Twitter.css";

function Twitter(props) {
  const { src, className } = props;

  return (
    <div className={`twitter ${className || ""}`}>
      <img className="vector-5" src={src} />
    </div>
  );
}

export default Twitter;
