import React, { createContext } from 'react';
import tw, { useDeviceContext, useAppColorScheme } from 'twrnc';

const Context = createContext();

/* ================================ READ THIS ! =======================================
Why TWProvider : https://github.com/jaredh159/tailwind-react-native-classnames/issues/112
===================================================================================== */

const TWProvider = ({children}) => {

  // 1️⃣  opt OUT of listening to DEVICE color scheme events
  useDeviceContext(tw, { withDeviceColorScheme: false });

  // 2️⃣  use the `useAppColorScheme` hook to get a reference to the current color
  // scheme, with some functions to modify it (triggering re-renders) when you need to
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  
  // 3️⃣ use one of the setter functions, like `toggleColorScheme` in your app */
  return (
    <Context.Provider value={{colorScheme, toggleColorScheme}}>
      {children}
    </Context.Provider>
  );
}
export default TWProvider;

// to call on respective page
export const TWContext = Context

// to consume on
export const TWConsumer = TWContext.Consumer



