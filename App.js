import React from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./components/Screens/HomeScreen";
import AppProvider, { AppContext } from "./context/AppContext";
import { APP_PAGES } from "./context/settings";
import { StyleSheet, View } from "react-native";
import SpecScreen from "./components/Screens/SpecScreen";
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
    <View style={styles.outline}>
      <StatusBar
        style="dark"
        backgroundColor="#fff"
        hidden={false}
        translucent={true}
      />
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.RESULT_SCREEN && <SpecScreen />}
    </View>
  );
};
const styles = StyleSheet.create({
  outline: {
    flex: 1
  }
});
export default App;
