import { createContext, useState, useContext } from "react";

const XpContext = createContext();

export function XpProvider({ children }) {
  const [xp, setXp] = useState(0); 

  return (
    <XpContext.Provider value={{ xp, setXp }}>
      {children}
    </XpContext.Provider>
  );
}

export function useXp() {
  return useContext(XpContext); }