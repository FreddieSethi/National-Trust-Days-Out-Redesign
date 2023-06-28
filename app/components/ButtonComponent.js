import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import colours from "../config/colours";

export default function ButtonComponent(props) {
  const { onPress, text } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    allignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  buttonText: {
    color: colours.text,
    fontSize: 20,
  },
});
