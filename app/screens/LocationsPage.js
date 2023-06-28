import React, { useState, useEffect } from "react";
import colours from "../config/colours"; // used so can import colours, which is more maintainable -- better not to hard code colours

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Dimensions,
  StatusBar,
} from "react-native";
import apiData from "../api/apiData.json";
import ReturnComponent from "../components/ReturnComponent";
import WeatherComponent from "../components/WeatherComponent";

export default function LocationsPage() {
  const allData = Object.values(apiData);
  const [dataToShow, setDataToShow] = useState(allData);

  // if list is empty, then return text
  const myListEmpty = () => {
    return (
      <View>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  const onSearch = (text) => {
    if (text.length < 2) return setDataToShow(allData);
    setDataToShow(dataToShow.filter((item) => item.title.includes(text)));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      ></View>
      {/* views to make components go onto one line */}
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TextInput
            onChangeText={onSearch}
            style={styles.textInputStyle}
            underlineColorAndroid="transparent"
            placeholder="Search locations..."
          />
          <WeatherComponent />
        </View>
        <FlatList
          data={dataToShow}
          // return component
          renderItem={({ item }) => (
            <ReturnComponent
              key={item.id}
              imageUrl={item.imageUrl}
              description={item.description}
              subTitle={item.subTitle}
              title={item.title}
              imageDescription={item.imageDescription}
              openingTimeStatus={item.openingTimeStatus}
              coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude,
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={myListEmpty}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colours.white,
    // fills entire screen
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: colours.text,
    backgroundColor: colours.white,
    borderRadius: 200 / 3,
    width: 200,
    marginTop: 15,
  },
  item: {
    padding: 50,
    fontSize: 20,
  },
  itemStyle: {
    padding: 10,
  },
  userImage: {
    width: 200,
    height: 150,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200 / 3,
  },
  title: {
    fontSize: 24,
    color: colours.text,
    textAlign: "left-allign",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: colours.text,
  },
  body: {
    fontSize: 14,
    color: colours.text,
  },
  flatList: {
    borderRadius: 200 / 3,
    backgroundColor: colours.background,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: colours.background,
    color: colours.text,
    borderRadius: 200 / 3,
  },
});
