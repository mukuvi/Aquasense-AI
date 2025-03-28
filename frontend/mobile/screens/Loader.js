import React, { useEffect, useState } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import Welcome from "./Welcome"; // Importez le composant Welcome

const random = () => parseInt(Math.random() * 255);
const randomColor = () =>
  "rgb(" + random() + "," + random() + "," + random() + ")";

const Dim = 50;
export default function Loader5() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, transition to the Welcome page
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return isLoading ? (
    <View style={styles.container}>
      {/* Add your loader, for example, an ActivityIndicator */}
    </View>
  ) : (
    <Welcome /> // Transition to the Welcome page once loading is complete
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: Dim,
    height: Dim,
    borderWidth: 0,
    backgroundColor: "transparent",
    position: "absolute",
    justifyContent: "center",
  },
  innerItem: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
});
