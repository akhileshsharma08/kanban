import React, { createContext, useEffect, useState } from "react";
import cardDetails from "./cardData";

export const data = createContext();

const Context = ({ children }) => {

  const [task, settask] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [progresstask, setProgresstask] = useState([]);

//   useEffect(() => {
//     settask(cardDetails);
//   }, []);
  return (
    <data.Provider
      value={{
        task,
        settask,
        completed,
        setCompleted,
        progresstask,
        setProgresstask,
      }}
    >
      {children}
    </data.Provider>
  );
};

export default Context;
