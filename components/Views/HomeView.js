import { StyleSheet, ScrollView, View, Text } from "react-native";
import React from "react";
import { AppContext } from "../../context/AppContext";
import Card from "../Card/Card";

const HomeView = () => {
  const { mainInfo } = React.useContext(AppContext);
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mainInfo.map((e, i) => {
          return <Card key={i} item={e} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({});
