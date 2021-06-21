import React from "react";
import FacebookAppSymbol from "../FacebookAppSymbol";
import Instagram from "../Instagram";
import Twitter from "../Twitter";
import "./Group87.css";

function Group87(props) {
  const { facebookAppSymbolProps, facebookAppSymbolProps2, twitterProps } = props;

  return (
    <div className="group-87">
      <FacebookAppSymbol src={facebookAppSymbolProps.src} />
      <Instagram
        instagram={facebookAppSymbolProps2.instagram}
        vector2={facebookAppSymbolProps2.vector2}
        className={facebookAppSymbolProps2.className}
      />
      <Twitter src={twitterProps.src} className={twitterProps.className} />
    </div>
  );
}

export default Group87;
