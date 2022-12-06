import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";
import { Ionicons } from "react-native-vector-icons";
import { AppContext } from "../../context/AppContext";

const BottomNav = () => {
  const { tab, setTab } = React.useContext(AppContext);
  const menu = [
    {
      id: 0,
      name: "Discover",
      icon: (
        <Ionicons
          name="ios-compass-outline"
          style={
            tab === 0
              ? { color: "#0077fe", fontSize: 27 }
              : { color: "gray", fontSize: 27 }
          }
        />
      )
    },
    {
      id: 1,
      name: "Categories",
      icon: (
        <Ionicons
          name="ios-albums-outline"
          style={
            tab === 1
              ? { color: "#0077fe", fontSize: 27 }
              : { color: "gray", fontSize: 27 }
          }
        />
      )
    },
    {
      id: 2,
      name: "Search",
      icon: (
        <Ionicons
          name="ios-search-outline"
          style={
            tab === 2
              ? { color: "#0077fe", fontSize: 27 }
              : { color: "gray", fontSize: 27 }
          }
        />
      )
    },
    {
      id: 3,
      name: "Saved",
      icon: (
        <Ionicons
          name="ios-bookmark-outline"
          style={
            tab === 3
              ? { color: "#0077fe", fontSize: 27 }
              : { color: "gray", fontSize: 27 }
          }
        />
      )
    }
  ];
  return (
    <View style={styles.outline}>
      {menu.map((e, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => setTab(e.id)}>
            <Text style={styles.icon}>{e.icon}</Text>
            <Text style={styles.name}>{e.name}</Text>
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
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
  icon: {
    textAlign: "center"
  },
  name: {
    textAlign: "center",
    fontWeight: "500",
    color: "#404040",
    fontSize: 11
  }
});
