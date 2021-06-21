import React from "react";
import "./Instagram.css";

function Instagram(props) {
  const { instagram, vector2, className } = props;

  return (
    <div className={`instagram ${className || ""}`} style={{ backgroundImage: `url(${instagram})` }}>
      <div className="overlap-group">
        <img
          className="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-48@2x.svg"
        />
        <img className="vector-4" src={vector2} />
      </div>
    </div>
  );
}

export default Instagram;
