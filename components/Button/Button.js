import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: "#eace2a",
    padding: 8,
    borderRadius: 4,
    width: 100
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
    color: "#eace2a",
    marginTop: 10,
    alignItems: "flex-end"
  }
});
