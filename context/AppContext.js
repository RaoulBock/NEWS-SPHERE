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

  const [quoteList, setQuoteList] = React.useState("");

  React.useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "X-RapidAPI-Key",
      "af913674e8mshd049bcd448bbeabp18f138jsn2ddff479839c"
    );
    myHeaders.append("X-RapidAPI-Host", "love-calculator.p.rapidapi.com");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${hisName}&fname=${herName}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResults(result);
      })
      .catch((error) => console.log("error", error));
  }, [hisName, herName]);

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "af913674e8mshd049bcd448bbeabp18f138jsn2ddff479839c",
        "X-RapidAPI-Host": "love-quote.p.rapidapi.com"
      }
    };

    fetch("https://love-quote.p.rapidapi.com/lovequote", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setQuoteList(response);
      })
      .catch((err) => console.error(err));
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
        setResults,
        quoteList,
        setQuoteList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
