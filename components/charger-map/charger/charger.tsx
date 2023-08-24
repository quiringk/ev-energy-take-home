import { View, Text, TouchableOpacity } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { ChargingStation } from "../../../types";
import { styles } from "./styles";

const CHARGING_API_URL = "https://example.ev.energy/chargingsession";

interface Props {
  station: ChargingStation;
}

export default function Charger({ station }: Props) {
  const startCharging = async (id: number) => {
    try {
      const response = await fetch(CHARGING_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: 1, // Hardcoded
          car_id: 1, // Hardcoded
          charger_id: id,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error starting charging:", error);
    }
  };

  return (
    <Marker coordinate={station.coordinate}>
      <Callout>
        <View style={styles.bubbleContainer}>
          <Text>{station.name}</Text>
          <TouchableOpacity
            style={styles.chargeBtn}
            onPress={() => startCharging(station.id)}
          >
            <Text style={styles.btnText}>Start Charging</Text>
          </TouchableOpacity>
        </View>
      </Callout>
    </Marker>
  );
}
