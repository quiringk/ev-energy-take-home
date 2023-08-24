import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  calloutContainer: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  startChargingButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50", // Green
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  startChargingText: {
    color: "white",
    fontWeight: "bold",
  },
});
