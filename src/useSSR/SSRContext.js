import React, { createContext, useContext } from 'react';

export const SSRContext = createContext(null);

// custom hook to ger server callback
export const useSSR = () => {
  const context = useContext(SSRContext);
  if (context) {
    return context;
  }
  return () => {

  }
};

// provider method
export const SSRProvider = ({ registerCallback, children }) => (
  <SSRContext.Provider value={registerCallback}>{children}</SSRContext.Provider>
);
