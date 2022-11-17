import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS, APP_PAGES } from "../../context/settings";

const JokeScreen = () => {
  const { setNavPage, content, setUserCategory, setContent } =
    React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <Nav
        title={"Joke"}
        onPress={() => {
          setNavPage(APP_PAGES.APP.HOME);
        }}
      />
      <View style={{ flex: 1 }}>
        {content.setup && <Text style={styles.text}>{content.setup}</Text>}
        {content.delivery && (
          <Text style={[styles.text, {}]}>{content.delivery}</Text>
        )}

        {content.joke && <Text style={styles.text}>{content.joke}</Text>}
        {content.category && (
          <Text style={styles.category}>- {content.category}</Text>
        )}
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.btn}>
          <Text>{APP_ICONS.BACK}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{APP_ICONS.BOOKMARK}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>{APP_ICONS.RIGHT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JokeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "#404040",
    fontWeight: "600",
    paddingHorizontal: 20,
    fontSize: 28,
    paddingVertical: 10,
  },
  category: {
    fontSize: 12,
    paddingHorizontal: 20,
    color: "#404040",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#eace2a",
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
