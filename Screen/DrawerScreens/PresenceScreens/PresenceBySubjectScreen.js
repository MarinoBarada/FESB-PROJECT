import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const PresenceBySubjectScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Ovo je Presence By Subject Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PresenceBySubjectScreen;