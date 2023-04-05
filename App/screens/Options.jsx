import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeperator } from "../components/RowItem";

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  seperator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry , something went wrong", "Please try again");
  });
};
export default function Options() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />
        <RowSeperator />
        <RowItem
          text="React Native Basics"
          onPress={() => openUrl('https://google.com')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeperator />
        <RowItem
          text="React Native by example"
          onPress={() => alert("todo!")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
