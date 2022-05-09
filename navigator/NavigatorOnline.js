import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

const NavigatorOnline = () => {
  const { currentUser, offline } = useContext(MainContext);

  if (currentUser) {
    return <UserStack />;
  } else if (offline) {
    return <UserStack />;
  } else {
    return <AuthStack />;
  }
};

export default NavigatorOnline;
