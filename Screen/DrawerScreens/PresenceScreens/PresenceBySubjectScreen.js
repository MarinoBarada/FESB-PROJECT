import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import PiCharContainer from "../../Components/PiCharContainer";

const PresenceBySubjectScreen = ({ route }) => {
  const { subject } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <Text
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            marginTop: 90,
            marginBottom: 5
          }}
        >{`${subject.name}`}</Text>
        <View style={PresenceBySubject.profileHeaderLine} />
        {subject.lectures && <PiCharContainer item={subject.lectures} />}
        {subject.labs && <PiCharContainer item={subject.labs} />}
        {subject.auditory && <PiCharContainer item={subject.auditory} />}
        <View>
        {subject.participants ? 
          <View style={PresenceBySubject.mapara}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 170 }}>
            <Text>Pre.</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10 }}>
            <Text>Lab. vj.</Text>
          </View>
        </View>
          :  
          '' 
        }
        </View>
        <View style={PresenceBySubject.madp}>
          {subject.participants ? (
            subject.participants.map((participant, index) => (
              <View style={PresenceBySubject.rowContainer} key={index}>
                <Text style={PresenceBySubject.participantName}>{participant}</Text>
                <View style={PresenceBySubject.centerContainer}>
                  <Text style={{fontSize: 18, fontWeight: 700}}>{subject.participantsPred[index]}</Text><Text style={{fontSize: 16}}> / 13</Text>
                </View>
                <Text style={PresenceBySubject.participantLab}>{subject.participantsLab[index]}</Text><Text style={{fontSize: 16}}> / 12</Text>
              </View>
            ))
          ) : null}
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresenceBySubjectScreen;

const PresenceBySubject = StyleSheet.create({
  mapara: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  mnk: {
    paddingLeft: 20,
    marginRight: 10,
    fontSize: 24 
  },
  madp: {
    padding: 16
  },
  font: {
    fontSize: 20
  },
  profileHeaderLine: {
    height: 1,
    backgroundColor: "#004A8F",
    marginTop: 5,
    marginBottom: 30
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  participantName: {
    flex: 2,
    marginRight: 60,
    fontSize: 18
  },
  participantLab: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 700
  },
});

