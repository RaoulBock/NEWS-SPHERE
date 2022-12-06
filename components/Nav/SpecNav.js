import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const SpecNav = ({ onPress }) => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{APP_ICONS.BACK}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SpecNav;

const styles = StyleSheet.create({
  outline: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  btn: {
    backgroundColor: "#0077fe",

    flexDirection: "row",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  btnText: {
    textAlign: "center"
  }
});
