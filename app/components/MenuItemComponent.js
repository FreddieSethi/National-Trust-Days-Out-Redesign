import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import colours from "../config/colours";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MenuItemComponent(props) {
  const { name, size, color, onPress, text } = props;

  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>

      <Ionicons
        style={styles.icons}
        name={name}
        size={20}
        color={colours.icons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    allignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 30,
  },
  buttonText: {
    color: colours.text,
    fontSize: 20,
  },
  icons: {
    justifyContent: "center",
    position: "absolute",
  },
});
