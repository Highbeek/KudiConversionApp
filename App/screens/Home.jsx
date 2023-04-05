import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import {format} from 'date-fns'

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GDP";
  const conversionRate = 0.8345;
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.textHeader}>Currency Converter</Text>
      <ConversionInput
        text={baseCurrency}
        value="123"
        onButtonPress={() => alert("todo")}
        onChangeText={(text) => console.log("text", text)}
        keybardType="numeric"
      />
      <ConversionInput
        text={quoteCurrency}
        value="123"
        onButtonPress={() => alert("todo")}
        editable={false}
      />

      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of April 3 2023`}
      </Text>
    </View>
  );
};
