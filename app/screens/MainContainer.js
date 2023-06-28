import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import LocationPage from "./LocationsPage";
import MapPage from "./MapPage";
import MorePage from "./MorePage";
import colours from "../config/colours";
import IconsComponent from "../components/IconsComponent";
import LogoComponent from "../components/LogoComponent";

//Screen names
const listPage = "Locations";
const mapPage = "Map";
const more = "More";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={styles.container}
        initialRouteName={listPage}
        screenOptions={({ route }) => ({
          //headerShown: false,
          // makes tab bar rounded
          tabBarStyle: [
            {
              tabBarActiveBackgroundColor: colours.black,
              display: "flex",
              borderWidth: 1,
              borderBottomWidth: 1,
              backgroundColor: colours.background,
              borderBottomLeftRadius: 45,
              borderBottomRightRadius: 45,
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,

              marginBottom: 10,
            },
            null,
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            // if statements to check if page is tapped, then fill the icon
            if (rn === listPage) {
              iconName = focused ? "pin" : "pin-outline";
            } else if (rn === mapPage) {
              iconName = focused ? "map" : "map-outline";
            } else if (rn === more) {
              iconName = focused
                ? "ellipsis-horizontal"
                : "ellipsis-horizontal-outline";
            } else if (rn === more) {
              iconName = focused
                ? "ellipsis-horizontal"
                : "ellipsis-horizontal-outline";
            }
            // returns how icons will look
            return <IconsComponent name={iconName} size={"36"} />;
          },

          headerRight: (props) => {
            return <LogoComponent />;
          },
          headerLeft: (props) => {
            return <LogoComponent />;
          },
        })}
      >
        {/* displays naviation bottom bar */}
        <Tab.Screen
          name={listPage}
          component={LocationPage}
          options={{
            title: "Locations",
            headerStyle: {
              backgroundColor: colours.background,
            },
          }}
        />
        <Tab.Screen
          name={mapPage}
          component={MapPage}
          options={{
            title: "Map",
            headerStyle: {
              backgroundColor: colours.background,
            },
          }}
        />
        <Tab.Screen
          name={more}
          component={MorePage}
          options={{
            title: "More",
            headerStyle: {
              backgroundColor: colours.background,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.background,
    borderRadius: 200 / 3,
  },
});
