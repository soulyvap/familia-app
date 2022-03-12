import { IconButton } from "native-base";
import React from "react";
import { colors } from "../utils/colors";
import { constants } from "../variables/constants";

const UtilButton = ({
  top = 1,
  right = constants.stdMargin,
  icon,
  onPress,
  bgColor,
}) => {
  return (
    <IconButton
      zIndex={1000}
      position={"absolute"}
      onPress={onPress}
      bgColor={bgColor}
      rounded="full"
      size={"10"}
      alignItems="center"
      justifyContent={"center"}
      icon={icon}
      top={top}
      right={right}
    />
  );
};

export default UtilButton;
