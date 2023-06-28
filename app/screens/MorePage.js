import { View, StyleSheet, Alert } from "react-native";

import colours from "../config/colours";
import MenuItemComponent from "../components/MenuItemComponent";
import React from "react";

const MorePage = () => {
  return (
    // each component is a new button
    <View style={styles.container}>
      <MenuItemComponent
        text="About us"
        onPress={() =>
          Alert.alert(
            "About us",
            "We're a conservation charity that believes everyone should have access to beautiful places and enriching experiences. Thats's why we look after very special places in the UK."
          )
        }
        name="help-outline"
      />

      <MenuItemComponent
        text="Become a member"
        onPress={() =>
          Alert.alert(
            "Become a member",
            "Becoming a member means you can enjoy new discoveries, experiences and adventures more often."
          )
        }
        name="person-add-outline"
      />

      <MenuItemComponent
        text="Volunteer"
        onPress={() =>
          Alert.alert(
            "Volunteer",
            "Our volunteers are people just like you: individuals with a love for the special places we care for."
          )
        }
        name="hand-left-outline"
      />

      <MenuItemComponent
        text="Donate"
        onPress={() =>
          Alert.prompt("Donate", "Amount (£)", (text) => console.log(text))
        }
        name="airplane-outline"
      />

      <MenuItemComponent
        text="Hoildays"
        onPress={() =>
          Alert.alert(
            "Hoildays",
            "From craggy covers to sleep market towns, stay somewhere extraordinary."
          )
        }
        name="card-outline"
      />

      <MenuItemComponent
        color={colours.text}
        text="Shop"
        onPress={() =>
          Alert.alert(
            "Shop",
            "Gifts inspired by the special places we care for."
          )
        }
        name="wallet-outline"
      />

      <MenuItemComponent
        text="Help and Settings"
        onPress={() => Alert.alert("Help and Settings", "Help and Settings")}
        name="settings-outline"
      />
    </View>
  );
};

export default MorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    alignItems: "center",
    paddingTop: 10,
  },
});
