import {
  StyleSheet,
  Image,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS, APP_PAGES } from "../../context/settings";
import SpecNav from "../Nav/SpecNav";

const SpecScreen = () => {
  const { specInfo, setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <SpecNav onPress={() => setNavPage(APP_PAGES.APP.HOME)} />
      <Text style={styles.title}>{specInfo.title}</Text>
      {specInfo.urlToImage ? (
        <Image source={{ uri: specInfo.urlToImage }} style={styles.image} />
      ) : (
        <Image
          source={{
            uri: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
          }}
          style={styles.image}
        />
      )}
      <Text style={styles.content}>{specInfo.content}</Text>
    </View>
  );
};

export default SpecScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  image: {
    height: 300,
    borderRadius: 20,
    marginHorizontal: 15
  },
  title: {
    paddingHorizontal: 15,
    color: "#404040",
    fontSize: 18,
    fontWeight: "500",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  content: {
    paddingHorizontal: 15,
    color: "#404040",
    fontSize: 28,
    fontWeight: "500",
    paddingTop: 15
  }
});
