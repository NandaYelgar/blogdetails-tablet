import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button.css";

function Button(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27326733TimelineData);
  }, []);

  return (
    <div className="x27326733 component component-wrapper not-ready">
      <div className="master-button-ISwYQp">
        <div className="button-i2732673351-s1UvEd valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27326733TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x27326733",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button;
