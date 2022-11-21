import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={[styles.text, { fontFamily: "Pacifico" }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    backgroundColor: "#e81224",
    padding: 15,
    width: 150,
    marginHorizontal: 15
  },
  text: {
    color: "white",
    fontWeight: "500",
    textAlign: "center"
  }
});
