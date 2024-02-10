import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const DropdownButton = ({ course, navigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <TouchableOpacity style={stylesDropdownButton.button} onPress={open}>
        <Image
          source={require("../../Image/arrow-up.png")}
          style={[
            stylesDropdownButton.image,
            isOpen && stylesDropdownButton.rotateImage,
          ]}
        />
        <Text style={stylesDropdownButton.buttonText}>Smjer {course.id}</Text>
      </TouchableOpacity>
      <View style={stylesDropdownButton.profileHeaderLine} />
      {isOpen && (
        <View style={stylesDropdownButton.dropdownContent}>
          {course.subjects.map((subject, index) => (
            <Text
              key={index}
              style={stylesDropdownButton.dropdownItem}
              onPress={() =>
                navigation.navigate("Prisutnost po predmetu", {
                  subject,
                })
              }
            >
              {subject.name}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};
export default DropdownButton;

const stylesDropdownButton = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 11,
    paddingBottom: 11,
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  rotateImage: {
    transform: [{ rotate: "180deg" }], // Rotate image 90 degrees
  },
  buttonText: {
    fontSize: 24,
  },
  dropdownContent: {
    display: "flex",
    flexDirection: "column",
  },
  dropdownItem: {
    fontSize: 20,
    padding: 10,
  },
});
