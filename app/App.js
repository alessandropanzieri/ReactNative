import styles from "./styles/appStyles";
import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";

function textPress(event) {
  console.log(event);
}

export default function App() {
  return (
    <View style = {styles.view}>
      <StatusBar style = "light"/>
      <Text onPress = {() => textPress("text pressed")}>PRESS ME</Text>
    </View>
  );
}
