import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.text}>{moment().format("dddd, MMMM DD")}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  title: {
    fontWeight: "700",
    color: "#404040",
    fontSize: 40
  },
  text: {
    color: "#a0a0a0",
    fontWeight: "500",
    fontSize: 14
  }
});
