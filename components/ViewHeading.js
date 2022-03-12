import { Heading } from "native-base";
import React from "react";

const ViewHeading = ({ text }) => {
  return (
    <Heading my={2} textAlign={"center"}>
      {text}
    </Heading>
  );
};

export default ViewHeading;
