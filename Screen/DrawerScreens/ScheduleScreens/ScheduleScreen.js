import React from "react";
import { useSelector } from "react-redux";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const ScheduleScreen = ({ navigation }) => {
  const user = useSelector((state) => state.setUser);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{fontSize: 36, color: '#004A8F', marginTop: 84, paddingLeft: 16}}>Danas</Text>
      <View style={stylesPresencee.profileHeaderLine} />
      <View style={{ flex: 1, padding: 16 }}>
      {user.type === "Student" ?
        <View
          style={stylesPresencee.msgHolder}
        >
          <Text
            style={{color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 5}}
          >
            Medicinski uređaji
          </Text>
          { }
          <Text onPress={() => navigation.navigate("Popis studenata")} style={{color: 'white', fontSize: 15}}>
            14:15 - 16:00, predavanje          
          </Text>
        </View>
        : null}
        <View
          style={stylesPresencee.msgHolder}
        >
          <Text
            style={{color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 5}}
          >
            Poslovni informacijski sustavi
          </Text>
          { }
          <Text style={{color: 'white', fontSize: 15}}>
            16:15 - 18:00, predavanje          
          </Text>
          {user.type === "Profesor" 
            ? 
            <Text onPress={() => navigation.navigate("Popis studenata")} style={stylesPresencee.btn}>Popis Studenata</Text> 
            :
            null
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const stylesPresencee = StyleSheet.create({
  profileHeaderLine: {
    height: 1,
    backgroundColor: "#004A8F",
    marginTop: 5,
  },
  msgHolder: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#005CB2',
    borderRadius: 20
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20, 
    padding: 12,
    paddingLeft: 10,
    paddingRight: 10,
    width: '40%',
  }
});
