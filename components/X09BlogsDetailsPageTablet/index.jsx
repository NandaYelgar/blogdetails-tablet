import React from "react";
import Frame144 from "../Frame144";
import FacebookAppSymbol from "../FacebookAppSymbol";
import Instagram from "../Instagram";
import Twitter from "../Twitter";
import TextInputsNormal from "../TextInputsNormal";
import Frame1650 from "../Frame1650";
import TextInputsNormal2 from "../TextInputsNormal2";
import Button from "../Button";
import Footer from "../Footer";
import "./X09BlogsDetailsPageTablet.css";

function X09BlogsDetailsPageTablet(props) {
  const {
    text1,
    rectangle76,
    address,
    text4,
    rectangle97,
    rectangle98,
    followUs,
    line56,
    ellipse105,
    spanText,
    spanText2,
    text6,
    line57,
    leaveAReply,
    frame144Props,
    facebookAppSymbolProps,
    instagramProps,
    twitterProps,
    textInputsNormalProps,
    frame1650Props,
    textInputsNormal2Props,
    buttonProps,
    footerProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x09-blogs-details-page-tablet screen">
        <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
        <h1 className="text-1 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</h1>
        <img className="rectangle-76" src={rectangle76} />
        <div className="group-196">
          <div className="address valign-text-middle typography-body-smalltext-14-regular">{address}</div>
          <p className="text-4 typography-body-smalltext-14-regular">{text4}</p>
        </div>
        <div className="frame-1636">
          <div className="frame-1644">
            <img className="rectangle-97" src={rectangle97} />
            <img className="rectangle-98" src={rectangle98} />
          </div>
          <div className="frame-1645">
            <div className="follow-us valign-text-middle typographybody16-regular">{followUs}</div>
            <div className="frame-1561">
              <FacebookAppSymbol src={facebookAppSymbolProps.src} />
              <Instagram instagram={instagramProps.instagram} vector2={instagramProps.vector2} />
              <Twitter src={twitterProps.src} />
            </div>
          </div>
        </div>
        <div className="frame-200">
          <img className="line-56" src={line56} />
          <div className="frame-1646">
            <img className="ellipse-105" src={ellipse105} />
            <div className="frame-199">
              <div className="text-5 valign-text-middle typographyheadlineh5-extrabold-20">
                <span>
                  <span className="span0 typographyheadlineh5-extrabold-20">{spanText}</span>
                  <span className="span1 typographyheadlineh5-extrabold-20">{spanText2}</span>
                </span>
              </div>
              <p className="text-6 typographybodysmall-12-regular">{text6}</p>
            </div>
          </div>
          <img className="line-57" src={line57} />
        </div>
        <div className="frame-1649">
          <div className="leave-a-reply valign-text-middle typographyheadlineh4-extrabold-24">{leaveAReply}</div>
          <div className="frame-1648">
            <TextInputsNormal>{textInputsNormalProps.children}</TextInputsNormal>
            <div className="frame-1647">
              <Frame1650
                textInputsNormal2Props={frame1650Props.textInputsNormal2Props}
                textInputsNormal22Props={frame1650Props.textInputsNormal22Props}
              />
              <TextInputsNormal2 className={textInputsNormal2Props.className}>
                {textInputsNormal2Props.children}
              </TextInputsNormal2>
            </div>
          </div>
          <Button>{buttonProps.children}</Button>
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default X09BlogsDetailsPageTablet;
