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
    </SafeAreaView>
  );
};

export default PresenceBySubjectScreen;

const stylesSubject = StyleSheet.create({
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