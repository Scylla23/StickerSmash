import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View style={styles.container}>
        <Link href="/tabs/about" style={styles.button}>
          Go to about screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "#ffffff",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "black",
  },
});
