import React, { useState, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "../redux/userId";
import Loader from "./Components/Loader";
import { useDispatch } from "react-redux";

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const dispatch = useDispatch();

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Molimo unesite Korisnučku oznaku");
      return;
    }
    if (!userPassword) {
      alert("Molimo unesite Zaporku");
      return;
    }
    setLoading(true);

    const localData = require("../data/users.json");

    setTimeout(() => {
      setLoading(false);

      const foundUser = localData.find(
        (user) => user.email === userEmail && user.password === userPassword
      );

      if (foundUser) {
        AsyncStorage.setItem("user_id", foundUser.email);
        console.log(foundUser.email);
        dispatch(set(foundUser));
        navigation.replace("DrawerNavigationRoutes");
      } else {
        setErrortext("Nevažeća korisnička oznaka ili zaporka");
        console.log("Provjerite svoju e-poštu ili lozinku");
      }
    }, 1000);
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{position: 'relative', top: -120}}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../Image/fesb-logo.png")}
                style={{
                  width: "100%",
                  height: 130,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
              <Text style={styles.aaiTextStyle}>AAI@EduHr PRIJAVA</Text>
            </View>
            <View style={styles.SectionStyle}>
              <Image source={require("../Image/person.png")} />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Korisnička oznaka"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Image source={require("../Image/shield-slash.png")} />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Zaporka"
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>PRIJAVA</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignContent: "center",
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 45,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(128, 152, 249, 0.50)",
    backgroundColor: "rgba(128, 152, 249, 0.10)",
  },
  buttonStyle: {
    backgroundColor: "#004A8F",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#004A8F",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 10,
    fontSize: 18,
    color: "#8b9cb5",
  },
  aaiTextStyle: {
    color: "#004A8F",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    alignSelf: "center",
    paddingBottom: 15,
    maxWidth: 200,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
