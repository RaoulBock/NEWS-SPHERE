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

  const [hisName, setHisName] = React.useState("");
  const [herName, setHerName] = React.useState("");

  const [results, setResults] = React.useState();

  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "X-RapidAPI-Key",
      "af913674e8mshd049bcd448bbeabp18f138jsn2ddff479839c"
    );
    myHeaders.append("X-RapidAPI-Host", "love-calculator.p.rapidapi.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${hisName}&fname=${herName}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setResults(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        fontsLoaded,
        hisName,
        setHisName,
        herName,
        setHerName,
        results,
        setResults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
