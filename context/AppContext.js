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
  const [mainInfo, setMainInfo] = React.useState();
  const [tab, setTab] = React.useState(0);
  const [specInfo, setSpecInfo] = React.useState();

  React.useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.articles);
        setMainInfo(result.articles);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        fontsLoaded,
        mainInfo,
        setMainInfo,
        tab,
        setTab,
        specInfo,
        setSpecInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
