import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PieChart from "react-native-pie-chart";

const PiCharContainer = ({ item }) => {
  const widthAndHeight = 250;
  const sliceColor = ["#004A8F", "#C4D5E5"];
  const userComes = item.arrivals;
  const userComesCalc = userComes / item.numberOf;
  const userComeReverse = -(userComesCalc * 100) + 100;
  const series = [userComesCalc * 100, userComeReverse];

  return (
    <View style={PiChar.containerHolder}>
      <View style={PiChar.container}>
        <Text style={PiChar.typeOf}>{item.name}</Text>
        <View style={PiChar.arrivals}>
          <Text style={PiChar.bold}>{userComes}</Text>
          <Text style={PiChar.const}> / {item.numberOf}</Text>
        </View>
        <Text style={PiChar.title}>{(userComesCalc * 100).toFixed()}%</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.65}
          coverFill={"#FFF"}
          padAngle={0.02}
        ></PieChart>
      </View>
    </View>
  );
};
export default PiCharContainer;

const PiChar = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
    paddingTop: 18,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
    marginBottom: 30,
  },
  containerHolder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
    position: "absolute",
    zIndex: 50,
    top: "60%",
    color: "#004A8F",
    fontWeight: "900",
    fontSize: 40,
  },
  typeOf: {
    fontSize: 20,
    marginBottom: 30,
  },
  arrivals: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  bold: {
    fontSize: 24,
    fontWeight: "bold",
  },
  const: {
    fontSize: 20,
  },
});
