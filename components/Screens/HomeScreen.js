import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";

import React, { useContext } from "react";
import Nav from "../Nav/Nav";
import { AppContext } from "../../context/AppContext";
import Card from "../Card/Card";
import BottomNav from "../Nav/BottomNav";
import HomeView from "../Views/HomeView";

const HomeScreen = () => {
  const { tab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Nav title={"Top News"} />
      <View style={{ flex: 1 }}>{tab === 0 && <HomeView />}</View>
      {/* <BottomNav /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
