import React, { Fragment } from "react";
import "../../assets/styles/SpeechBubble/speech-bubble.scss";

const SpeechBubble = () => {
  return (
    <Fragment>
      <div className="speech-bubble__content">
        <div className="speech-bubble speech-bubble--1"></div>
        <div className="speech-bubble speech-bubble--2"></div>
      </div>
    </Fragment>
  );
};

export default SpeechBubble;
