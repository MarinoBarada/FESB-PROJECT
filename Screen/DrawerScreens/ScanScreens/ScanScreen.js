import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import PopUpComponent from '../../Components/PopUp';

const ScanScreen = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

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
            onPress={togglePopup}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../../Image/CircleNFC.png")}
                style={{
                  width: 240,
                  height: 300,
                  resizeMode: "contain",                  
                }}
              />
              <Text
              style={{
                fontSize: 24,
                textAlign: "center",
                marginBottom: 16,
                fontWeight: 700,
               }}
              >SKENIRAJ</Text>
              <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                marginBottom: 16,
                fontWeight: 400,
               }}
              >Pritisnite i približite svoj uređaj NFC-u</Text>
            </View>
            

          </Text>
          <PopUpComponent isVisible={isPopupVisible} onClose={togglePopup} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScanScreen;
