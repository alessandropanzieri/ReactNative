import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default class MyButton extends React.Component {
  textPress = () => {
    console.log("text pressed");
  }

  render() {
    return (
      <View style = {styles.view}>
        <Text onPress = {this.textPress}>PRESS ME</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});