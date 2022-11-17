import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const BottomNav = () => {
  const bottom_menu = [
    {
      id: 1,
      icon: APP_ICONS.HOME,
      name: "Home"
    },
    {
      id: 2,
      icon: APP_ICONS.BOOKMARK,
      name: "Bookmark"
    },
    {
      id: 3,
      icon: APP_ICONS.DISCOVER,
      name: "Discover"
    }
  ];

  return (
    <View style={styles.outline}>
      {bottom_menu.map((e, i) => {
        return (
          <TouchableOpacity key={i} style={styles.btn}>
            <Text>{e.icon}</Text>
            <Text>{e.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
  btn: {
    alignItems: "center"
  }
});
