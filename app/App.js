import styles from "./styles/App";
import {StatusBar} from "expo-status-bar";
import {Button, View} from "react-native";

function ButtonPress(event) {
  console.log(event)
}

export default function App() {
  return (
    <View style = {styles.view}>
      <StatusBar style = "light"/>
      <Button onPress = {() => ButtonPress("button pressed")}>PRESS ME</Button>
    </View>
  );
}
