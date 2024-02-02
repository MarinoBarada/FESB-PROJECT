import React from "react";
import { useSelector } from "react-redux";
import { View, Text, Alert, StyleSheet } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomSidebarMenu = (props) => {
  const user = useSelector((state) => state.setUser);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <Text style={{ fontSize: 12, color: "#FFFFFF" }}>{user.type}</Text>
        <Text style={{ fontSize: 36, color: "#FFFFFF", padding: 0 }}>
          {user.name}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) => (
            <Text style={{ color: "#FFFFFF", fontSize: 30 }}>ODJAVA</Text>
          )}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              "ODJAVA",
              "Jesi li siguran? Želite se odjaviti?",
              [
                {
                  text: "Otkaži",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Potvrdi",
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace("Auth");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#004A8F",
    paddingTop: 40,
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  profileHeader: {
    flexDirection: "colomn",
    backgroundColor: "#004A8F",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 15,
    backgroundColor: "#e2e2e2",
    marginTop: 5,
  },
});
