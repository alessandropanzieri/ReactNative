import {View, Text, StyleSheet} from "react-native";

function textPress(event) {
  console.log(event);
}

export default function App() {
  return (
    <View style = {styles.view}>
      <Text onPress = {() => textPress("text pressed")}>PRESS ME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})