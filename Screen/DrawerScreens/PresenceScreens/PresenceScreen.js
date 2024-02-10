import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import DropdownButton from "../../Components/DropdownButton";

const PresenceScreen = ({ navigation }) => {
  const user = useSelector((state) => state.setUser);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, marginTop: 80 }}>
        <View>
          <Text
            style={{
              fontSize: 36,
              color: "#004A8F",
            }}
          >
            <Text>{user.type == "Student" ? "Predmeti" : "Smjerovi"}</Text>
          </Text>
          <View style={stylesPresence.profileHeaderLine} />
          <View>
            {user.type === "Student"
              ? user.subjects.map((subject, index) => (
                  <View key={index}>
                    <Text
                      style={stylesPresence.secondaryFont}
                      onPress={() =>
                        navigation.navigate("Prisutnost po predmetu", {
                          subject,
                        })
                      }
                    >
                      {subject.name}
                    </Text>
                    <View style={stylesPresence.profileHeaderLine} />
                  </View>
                ))
              : // Do something else here if user type is not "Student"
                user.courses.map((course, index) => (
                  <DropdownButton
                    key={index}
                    course={course}
                    navigation={navigation}
                  />
                ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PresenceScreen;

const stylesPresence = StyleSheet.create({
  secondaryFont: {
    fontSize: 24,
    marginBottom: 17,
    marginTop: 17,
  },
  profileHeaderLine: {
    height: 1,
    backgroundColor: "#004A8F",
    marginTop: 5,
  },
});
