import styles from "./styles/App";
import StatusBar from "expo-status-bar";
import {View, Text} from "react-native";

function textPress(event) {
  console.log(event);
};

export default function App() {
  return (
    <View style = { styles.view }>
      <StatusBar style = "auto"/>
      <Text onPress = {() => textPress("text pressed")}>PRESS ME</Text>
    </View>
  );
};
