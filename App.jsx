import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X09BlogsDetailsPageTablet from "./components/X09BlogsDetailsPageTablet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|09-blogs-details-page-tablet)">
          <X09BlogsDetailsPageTablet {...x09BlogsDetailsPageTabletData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-5@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-49@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-50@2x.svg",
};

const textInputsNormalData = {
    children: "Comment",
};

const textInputsNormal2Data = {
    children: "Name",
};

const textInputsNormal22Data = {
    children: "Email",
    className: "text-inputs-normal-2",
};

const frame1650Data = {
    textInputsNormal2Props: textInputsNormal2Data,
    textInputsNormal22Props: textInputsNormal22Data,
};

const textInputsNormal23Data = {
    children: "Phone Number",
    className: "text-inputs-normal-3",
};

const buttonData = {
    children: "POST COMMENT",
};

const facebookAppSymbol2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagram2Data = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-379@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    className: "instagram-1",
};

const twitter2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
    className: "twitter-1",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbol2Data,
    facebookAppSymbolProps2: instagram2Data,
    twitterProps: twitter2Data,
};

const footerData = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-25@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-49@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-21@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-212@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-231@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-232@2x.svg",
    text42: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text3: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group87Props: group87Data,
};

const x09BlogsDetailsPageTabletData = {
    text1: "Lorem Ipsum passages of Lorem Ipsum available",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-9@1x.png",
    address: "5 June 2021",
    text4: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo, ac tincidunt sem pharetra nec. Nunc faucibus ipsum vel metus aliquam, interdum feugiat massa viverra. Donec velit magna, sodales sed convallis eu, egestas vel nisl. Etiam fermentum felis ac risus scelerisque, ac euismod diam finibus. Suspendisse lacus sem, gravida vestibulum ligula et, pulvinar mattis purus.<br /><br />Etiam fermentum felis ac risus scelerisque, ac euismod diam finibus. Suspendisse lacus sem, gravida vestibulum ligula et, pulvinar mattis purus. Phasellus mollis molestie ante sed rhoncus.<br /><br />Sed eu faucibus libero. Nunc at libero eget massa lobortis consectetur vel eu ligula. Suspendisse est mauris, fermentum id pellentesque ut, pharetra quis risus. Aliquam placerat orci turpis, quis venenatis massa lobortis a. Integer nec magna erat. Nullam vel dui vel purus consequat fermentum. Donec rhoncus convallis erat sit amet vestibulum. Duis lacinia, purus eget fermentum volutpat, justo ipsum mattis risus, a efficitur sapien nisi nec augue.</>,
    rectangle97: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-97-2@2x.png",
    rectangle98: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-98-2@2x.png",
    followUs: "Share:",
    line56: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-56-2@1x.svg",
    ellipse105: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/ellipse-105@2x.png",
    spanText: "Written by:",
    spanText2: " Darlene Robertson",
    text6: "Donec vitae mi metus. Vestibulum ac aliquam ligula. Sed vestibulum eu mi in finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    line57: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-56-2@1x.svg",
    leaveAReply: "Leave a reply",
    frame144Props: frame144Data,
    facebookAppSymbolProps: facebookAppSymbolData,
    instagramProps: instagramData,
    twitterProps: twitterData,
    textInputsNormalProps: textInputsNormalData,
    frame1650Props: frame1650Data,
    textInputsNormal2Props: textInputsNormal23Data,
    buttonProps: buttonData,
    footerProps: footerData,
};

