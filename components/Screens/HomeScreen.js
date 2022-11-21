import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Input from "../Inputs/Input";
import Button from "../Button/Button";
import { APP_PAGES } from "../../context/settings";

const image = {
  uri: "https://images.desenio.com/zoom/12608_2.jpg"
};

const HomeScreen = () => {
  const { setHisName, setHerName, setNavPage } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Text style={[styles.text, { fontFamily: "Pacifico" }]}>
            The Love Calculator ❤️
          </Text>
          <Input placeholder={"His name"} onChangeText={(e) => setHisName(e)} />
          <Input placeholder={"Her name"} onChangeText={(e) => setHerName(e)} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 15,
            backgroundColor: "#fff1f4c0"
          }}
        >
          <Button
            title={"Calculate ❤️"}
            onPress={() => setNavPage(APP_PAGES.APP.RESULT_SCREEN)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    color: "#404040",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  },
  header: {
    backgroundColor: "#fff1f4c0",
    width: "100%",
    height: "100%",
    flex: 1
  },
  text: {
    fontSize: 50,
    paddingVertical: 20,
    textAlign: "center"
  }
});
