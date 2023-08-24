import { View, ActivityIndicator, Platform } from "react-native";
import { styles } from "./styles";

export default function LoadingSpinner() {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.innerLoadingContainer}>
        <ActivityIndicator
          size="large"
          color={Platform.OS === "ios" ? "#000" : "#6200ee"}
        />
      </View>
    </View>
  );
}
