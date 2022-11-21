import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  StatusBar
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import Button from "../Button/Button";
import { APP_PAGES } from "../../context/settings";

const image = {
  uri: "https://images.desenio.com/zoom/12608_2.jpg"
};

const CalculatedScreen = () => {
  const { results, setNavPage, quoteList } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Text style={[styles.text, { fontFamily: "Pacifico" }]}>
            Results are out ❤️
          </Text>
          <View style={{}}>
            <Text style={[styles.perc, { fontFamily: "Pacifico" }]}>
              {results.percentage}% {results.percentage < 45 ? "😔" : "😊"}
            </Text>

            <Text style={[styles.quote, { fontFamily: "Pacifico" }]}>
              {quoteList.quote}
            </Text>
            <Text style={[styles.res, { fontFamily: "Pacifico" }]}>
              {results.result}
            </Text>
          </View>
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
            title={"Try again ❤️"}
            onPress={() => setNavPage(APP_PAGES.APP.HOME)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CalculatedScreen;

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
  },
  perc: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 50,
    color: "#404040"
  },
  res: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18
  },
  quote: {
    fontWeight: "500",
    color: "500",
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 18
  }
});
