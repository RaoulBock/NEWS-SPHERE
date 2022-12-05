import { StyleSheet, Image, View, Platform, StatusBar } from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";

const SpecScreen = () => {
  const { specInfo } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
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
  }
});
