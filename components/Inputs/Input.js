import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderRadius: 50,
    border: 0
  }
});
