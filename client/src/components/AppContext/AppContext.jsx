import React, { createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {
  return (
    <AppContext.Provider value={"hello"}>{props.children}</AppContext.Provider>
  );
};
