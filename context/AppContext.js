import React from "react";
import { APP_PAGES } from "./settings";
import { useFonts } from "expo-font";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [fontsLoaded] = useFonts({
    Pacifico: require("../assets/Fonts/Pacifico-Regular.ttf")
  });

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        fontsLoaded
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
