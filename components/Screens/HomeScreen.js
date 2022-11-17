import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import Nav from "../Nav/Nav";
import BottomNav from "../Nav/BottomNav";
import { AppContext } from "../../context/AppContext";
import { APP_PAGES } from "../../context/settings";

const HomeScreen = () => {
  const { userCategory, setUserCategory, setNavPage, category } =
    useContext(AppContext);

  return (
    <View style={styles.outline}>
      <Nav title={"Home"} />
      <View style={{ flex: 1, paddingLeft: 20 }}>
        <Text style={styles.title}>Categories</Text>
        {category.map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.textoutline}
              onPress={() => {
                setNavPage(APP_PAGES.APP.JOKE_SCREEN);
                setUserCategory(e.name);
                console.log(userCategory);
              }}
            >
              <Text style={styles.text}>{e.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <BottomNav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textoutline: {
    paddingBottom: 20,
  },
  text: {
    fontWeight: "600",
    color: "#404040",
    fontSize: 20,
  },
  title: {
    color: "#404040",
    marginBottom: 10,
    fontWeight: "500",
  },
});
