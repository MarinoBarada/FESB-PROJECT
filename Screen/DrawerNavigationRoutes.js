import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import { View } from "react-native";
import ScanScreen from "./DrawerScreens/ScanScreens/ScanScreen";
import PresenceScreen from "./DrawerScreens/PresenceScreens/PresenceScreen";
import PresenceBySubjectScreen from "./DrawerScreens/PresenceScreens/PresenceBySubjectScreen";
import ScheduleScreen from "./DrawerScreens/ScheduleScreens/ScheduleScreen";
import ListOfStudentsScreen from "./DrawerScreens/ScheduleScreens/ListOfStudents";
import CustomSidebarMenu from "./Components/CustomSidebarMenu";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScanScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ScanScreen">
      <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          title: "Skeniraj", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#004A8F", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const PresenceScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PresenceScreen">
      <Stack.Screen
        name="Prisutnost"
        component={PresenceScreen}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#004A8F", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
          title: "Prisutnost", //Set Header Title
        }}
      />

      <Stack.Screen
        name="Prisutnost po predmetu"
        component={PresenceBySubjectScreen}
        options={{
          headerStyle: {
            backgroundColor: "#004A8F", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
          title: "Prisutnost po predmetu", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const ScheduleScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ScheduleScreen">
      <Stack.Screen
        name="Raspored"
        component={ScheduleScreen}
        options={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#004A8F", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
          title: "Raspored", //Set Header Title
        }}
      />
      <Stack.Screen
        name="Popis studenata"
        component={ListOfStudentsScreen}
        options={{
          headerStyle: {
            backgroundColor: "#004A8F", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
          title: "Popis studenata", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 30,
          marginVertical: 2,
        },
      }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="ScanScreenStack"
        options={{ drawerLabel: "Skeniraj" }}
        component={ScanScreenStack}
      />
      <Drawer.Screen
        name="PresenceScreenStack"
        options={{ drawerLabel: "Prisutnost" }}
        component={PresenceScreenStack}
      />
      <Drawer.Screen
        name="ScheduleScreenStack"
        options={{ drawerLabel: "Raspored" }}
        component={ScheduleScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
