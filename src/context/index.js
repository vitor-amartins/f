import React from "react";

import { QuestionContextProvider } from "./questionContext";

const GlobalContext = ({ children }) => {
  return (
    <div style={{display: 'flex'}}>
      <QuestionContextProvider>{children}</QuestionContextProvider>
    </div>
  );
};

export default GlobalContext;
