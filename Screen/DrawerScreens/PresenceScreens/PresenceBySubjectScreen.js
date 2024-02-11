import React from "react";
import { View, Text, SafeAreaView, StyleSheet,  ScrollView } from "react-native";
import { useSelector } from "react-redux";
import PieChart from 'react-native-pie-chart'

const PresenceBySubjectScreen = ({route}) => {
  const user = useSelector((state) => state.setUser);
  const { subject, index } = route.params;

  const widthAndHeight = 250
  const userComes = (user.dolasci[index])
  const userComesCalc = userComes/13
  const userComeReverse = -(userComesCalc*100)+100
  const series = [userComesCalc*100, userComeReverse]
  const sliceColor = ['#004A8F', '#C4D5E5']
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{userComesCalc*100}</Text>
      <Text>{userComeReverse}</Text>
      <Text style={{
        fontSize: 24,
        textAlign: "center",
        marginBottom: 16,
        marginTop: 90,
      }}>{`${subject}`}</Text>
      <View style={stylesSubject.profileHeaderLine} />
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
<<<<<<< Updated upstream
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            <Text>{`Dolasci: ${user.dolasci[index]}`}</Text>
          </Text>
        </View>
      </View>
      <View style={stylesSubject.containerHolder}>
        <ScrollView >
        <View style={stylesSubject.container}>
          <Text style={stylesSubject.title}>Doughnut</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.65}
            coverFill={'#FFF'}
            padAngle={0.02}
          />
        </View>
        </ScrollView>
      </View>
=======
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

      </ScrollView>
>>>>>>> Stashed changes
    </SafeAreaView>
  );
};

export default PresenceBySubjectScreen;

<<<<<<< Updated upstream
const stylesSubject = StyleSheet.create({
  secondaryFont: {
    fontSize: 24,
    marginBottom: 17,
    marginTop: 17,
=======
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
>>>>>>> Stashed changes
  },
  profileHeaderLine: {
    height: 1,
    backgroundColor: "#004A8F",
    marginTop: 5,
  },
<<<<<<< Updated upstream
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
=======
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
>>>>>>> Stashed changes
