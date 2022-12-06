import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import { APP_PAGES } from "../../context/settings";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = ({ item }) => {
  const { setNavPage, setSpecInfo } = React.useContext(AppContext);
  return (
    <TouchableOpacity
      style={styles.outline}
      onPress={() => {
        setSpecInfo(item);
        setNavPage(APP_PAGES.APP.RESULT_SCREEN);
      }}
    >
      {item.urlToImage ? (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      ) : (
        <Image
          source={{
            uri: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
          }}
          style={styles.image}
        />
      )}
      {item.author && <Text style={styles.author}>{item.author}</Text>}
      {item.publishedAt && <Text style={styles.date}>{item.publishedAt}</Text>}
      {item.title && <Text style={styles.title}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  outline: {
    width: windowWidth,
    marginBottom: 20
  },
  image: {
    height: 300,
    borderRadius: 20,
    marginHorizontal: 15
  },
  title: {
    paddingHorizontal: 15,
    color: "#404040",
    fontSize: 28,
    fontWeight: "500",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingBottom: 25
  },
  date: {
    paddingHorizontal: 15,
    color: "gray",
    paddingVertical: 4
  },
  author: {
    marginHorizontal: 15,
    marginTop: 20,
    fontWeight: "600",
    color: "gray",
    fontSize: 28
  }
});
