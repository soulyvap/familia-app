import React, { useState } from "react";

const MainContext = React.createContext({});

const MainProvider = (props) => {
  const [update, setUpdate] = useState(false);
  const [showPop, setShowPop] = useState(true);

  return (
    <MainContext.Provider
      value={{
        update,
        setUpdate,
        showPop,
        setShowPop,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
