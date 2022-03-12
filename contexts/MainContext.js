import React, { useState } from "react";

const MainContext = React.createContext({});

const MainProvider = (props) => {
  const [update, setUpdate] = useState(false);

  return (
    <MainContext.Provider
      value={{
        update,
        setUpdate,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
