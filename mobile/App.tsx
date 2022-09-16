import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Hello World! ;D</Text>
      <Button title="Click Here" />
      <StatusBar style="auto" />
    </View>
  );

  interface ButtonProps {
    title: String;
  }

  function Button(props: ButtonProps) {
    return (
      <TouchableOpacity style={estilos.btnContainer}>
        <Text style={estilos.btnName}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
  },
  btnName: {
    color: "black",
    fontSize: 25,
  },
  btnContainer: {
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
