import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const PresenceScreen = ({ navigation }) => {
  const user = useSelector((state) => state.setUser);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, marginTop: 80 }}>
        <View>
          <Text
            style={{
              fontSize: 36,
              color: '#004A8F',
            }}
          >
          <Text>{user.type}</Text>
          </Text>
          <View style={stylesPresence.profileHeaderLine} />
          <View>
          {user.predmeti.map((subject, index) => (
            <View key={index}>
              <Text style={stylesPresence.secondaryFont} onPress={() => navigation.navigate("Prisutnost po predmetu", {subject, index})}>
              {subject}
              </Text>
              <View style={stylesPresence.profileHeaderLine} />
            </View>
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