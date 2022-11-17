import React from "react";
import { APP_PAGES } from "./settings";

let previousPage = 0;

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [userCategory, setUserCategory] = React.useState("");

  const [pageIndex, setPageIndex] = React.useState(0);

  const [content, setContent] = React.useState([]);

  const category = [
    {
      id: 1,
      name: "Any"
    },
    {
      id: 2,
      name: "Misc"
    },
    {
      id: 3,
      name: "Dark"
    },
    {
      id: 4,
      name: "Programming"
    }
  ];

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "af913674e8mshd049bcd448bbeabp18f138jsn2ddff479839c",
        "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com"
      }
    };

    const route =
      pageIndex !== previousPage ? category[pageIndex].name : userCategory;

    console.log(
      "######################################################",
      route
    );

    fetch(
      `https://jokeapi-v2.p.rapidapi.com/joke/${route}?format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        previousPage = pageIndex;
        setContent(response);
      })
      .catch((err) => console.error(err));
  }, [userCategory, pageIndex]);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        setUserCategory,
        userCategory,
        content,
        setContent,
        pageIndex,
        setPageIndex,
        category
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
