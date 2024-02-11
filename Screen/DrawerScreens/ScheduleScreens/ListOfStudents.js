import React, { useState } from "react";
import { Checkbox } from 'react-native-paper';
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const ListOfStudentsScreen = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const handleCheckboxToggle = () => {
    setChecked(!checked);
  };
  const handleCheckboxToggle1 = () => {
    setChecked1(!checked1);
  };

  const handleCheckboxToggle2 = () => {
    setChecked2(!checked2);
  };

  const handleCheckboxToggle3 = () => {
    setChecked3(!checked3);
  };

  const handleCheckboxToggle4 = () => {
    setChecked4(!checked4);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{fontSize: 36, color: '#004A8F', marginTop: 84, paddingLeft: 16}}>Popis studenata</Text>
        <View style={stylesPresenceee.line}></View>
        <View
          style={{padding: 16}}
        >
        <View style={stylesPresenceee.marga}>
          <Checkbox
            status={!checked ? 'checked' : 'unchecked'}
            onPress={handleCheckboxToggle}
          />
          <Text style={stylesPresenceee.names}>Ivo Ivic</Text>
        </View>
        <View style={stylesPresenceee.marga}>
          <Checkbox
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxToggle1}
          />
          <Text style={stylesPresenceee.names}>Mato Matic</Text>
        </View>
        <View style={stylesPresenceee.marga}>
          <Checkbox
            status={!checked2 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxToggle2}
          />
          <Text style={stylesPresenceee.names}>Jure Juric</Text>
        </View>
        <View style={stylesPresenceee.marga}>
          <Checkbox
            status={checked3 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxToggle3}
          />
          <Text style={stylesPresenceee.names}>Pero Peric</Text>
        </View>
        <View style={stylesPresenceee.marga}>
          <Checkbox
            status={checked4 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxToggle4}
          />
          <Text style={stylesPresenceee.names}>Ana Anic</Text>
        </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ListOfStudentsScreen;

const stylesPresenceee = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: "#004A8F",
    marginTop: 5,
  },
  names: {
    fontSize: 20,
    color: '#616161',
    marginBottom: 10,
    marginTop: 6
  },
  marga: {
    display: 'flex',
    flexDirection: 'row'
  }
});
