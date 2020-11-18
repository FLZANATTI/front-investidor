import React from "react";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import LoadingWrapper from "./style";

const Loading = () => {
  return (
    <LoadingWrapper>
        <Animated
          animationIn="bounce"
          animationInDuration={900}
          className="animation"
        >
          <FontAwesomeIcon icon={faDumbbell} />
        </Animated>
    </LoadingWrapper>
  );
};

export default Loading;
