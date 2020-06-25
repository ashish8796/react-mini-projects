/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, createContext } from "react";



export const Mytheme = createContext();

export const MyThemeProvider = ({ children }) => {
  const state = useState(localStorage.hasOwnProperty("theme") ? JSON.parse(localStorage.getItem("theme")) : false);


  return (
    <Mytheme.Provider value={state}>{children}</Mytheme.Provider>
  )
}

const myThemeContext = () => useContext(Mytheme);

export default myThemeContext;


