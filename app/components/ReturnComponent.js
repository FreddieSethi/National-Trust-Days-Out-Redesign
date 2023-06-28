import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Alert,
} from "react-native";
import React from "react";
import colours from "../config/colours";
import apiData from "../api/apiData.json";
import IconsComponent from "../components/IconsComponent";

export default function ReturnComponent(props) {
  const {
    imageUrl,
    subTitle,
    title,
    coordinate,
    description,
    openingTimeStatus,
    imageDescription,
  } = props;
  const { latitude, longitude } = coordinate;

  const data = Object.values(apiData);
  return (
    <View style={styles.flatList}>
      <Text style={styles.item}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        {"\n"}
        {"\n"}
        <IconsComponent name="location-outline" size={30} />
        <Text style={styles.subTitle}>{subTitle}</Text>
        {"\n"}
        {"\n"}
        <Text style={styles.body}>{description}</Text>
        {"\n"}
        {"\n"}
        <IconsComponent name="time-outline" size={30} />

        <Text style={styles.body}>{openingTimeStatus}</Text>
      </Text>
      <TouchableOpacity onPress={() => Alert.alert(imageDescription)}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={styles.userImage}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>
    </View>
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

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colours.white,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: colours.text,
    backgroundColor: colours.white,
    borderRadius: 200 / 3,
  },
  item: {
    padding: 50,
    fontSize: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  itemStyle: {
    padding: 10,
  },
  userImage: {
    width: 200,
    height: 150,
    borderWidth: 1,
    alignItems: "center",
    //width: Dimensions.get("window").width,
    justifyContent: "center",
    borderRadius: 200 / 3,
  },
  title: {
    fontSize: 24,
    color: colours.text,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: colours.text,
  },
  body: {
    fontSize: 14,
    color: colours.text,
    textAlign: "center",
  },
  flatList: {
    borderRadius: 200 / 3,
    backgroundColor: colours.background,
    marginVertical: 6,
    marginHorizontal: 10,
  },
});
