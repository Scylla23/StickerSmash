import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Landing Screen</Text>
      <Link href="/tabs/about" style={styles.button}>
        Go to about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#ffffff",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "black",
  },
});
