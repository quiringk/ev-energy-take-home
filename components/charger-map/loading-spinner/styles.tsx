import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  shadowContainer: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  innerLoadingContainer: {
    padding: 10,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
});
