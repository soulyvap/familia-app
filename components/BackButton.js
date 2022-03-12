import { ArrowBackIcon, ChevronLeftIcon, IconButton } from "native-base";
import React from "react";
import { constants } from "../variables/constants";

const BackButton = ({ top = 0, left = constants.stdMargin, onPress }) => {
  return (
    <IconButton
      zIndex={1000}
      top={top}
      left={left}
      position={"absolute"}
      icon={<ChevronLeftIcon />}
      onPress={onPress}
    />
  );
};

export default BackButton;
