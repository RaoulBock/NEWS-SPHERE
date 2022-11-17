import React from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./components/Screens/HomeScreen";
import AppProvider, { AppContext } from "./context/AppContext";
import { APP_PAGES } from "./context/settings";
import JokeScreen from "./components/Screens/JokeScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="#fff"
        hidden={false}
        translucent={true}
      />
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.JOKE_SCREEN && <JokeScreen />}
    </>
  );
};

export default App;
