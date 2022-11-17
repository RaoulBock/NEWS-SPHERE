import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [userCategory, setUserCategory] = React.useState("");

  const [content, setContent] = React.useState([]);

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "af913674e8mshd049bcd448bbeabp18f138jsn2ddff479839c",
        "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
      },
    };

    fetch(
      `https://jokeapi-v2.p.rapidapi.com/joke/${userCategory}?format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // if (response.type === "joke") {
        //   setContent(response);
        // } else {
        //   console.log("Sorry next");
        // }
        setContent(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        setUserCategory,
        userCategory,
        content,
        setContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
