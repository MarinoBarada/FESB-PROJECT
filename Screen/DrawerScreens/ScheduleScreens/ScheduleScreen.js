import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const ScheduleScreen = ({ navigation }) => {
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
            Ovo je Schedule Screen
          </Text>
          <Text onPress={() => navigation.navigate("Popis studenata")}>
            Idi na Popis studenata
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
