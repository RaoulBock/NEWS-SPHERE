import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppContext";

const Nav = ({ onPress, title }) => {
  const { content } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text>{APP_ICONS.BACK}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        {content.category}
        <Text> • </Text>
        {title}
      </Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  title: {
    fontWeight: "600",
    color: "#404040",
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#eace2a",
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
  },
});
