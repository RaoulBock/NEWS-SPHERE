import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextareaInput = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.outline}>
      <TextInput
        multiline={true}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default TextareaInput;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 4,
    height: 300
  }
});
