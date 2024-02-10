import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import PiCharContainer from "../../Components/PiCharContainer";

const PresenceBySubjectScreen = ({ route }) => {
  const { subject } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            textAlign: "left",
            marginBottom: 10,
            marginTop: 40,
            fontWeight: "500",
            marginLeft: 20,
          }}
        >{`${subject.name}`}</Text>
        <View style={PresenceBySubject.profileHeaderLine} />
        {subject.lectures && <PiCharContainer item={subject.lectures} />}
        {subject.labs && <PiCharContainer item={subject.labs} />}
        {subject.auditory && <PiCharContainer item={subject.auditory} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresenceBySubjectScreen;

const PresenceBySubject = StyleSheet.create({
  profileHeaderLine: {
    height: 1,
    backgroundColor: "#004A8F",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
});
