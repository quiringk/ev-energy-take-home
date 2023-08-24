import { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Region } from "react-native-maps";
import axios from "axios";
import { ChargingStation, POI, POIResponse } from "../../types";
import { styles } from "./styles";
import Charger from "./charger/charger";
import LoadingSpinner from "./loading-spinner/loading-spinner";

const API_KEY = "f3b3dcb6-9716-4317-a89e-4608cdfa30c1";
const API_URL = "https://api.openchargemap.io/v3/poi/";
const PORTLAND_DEFAULT_STARTING_LOCATION: Region = {
  latitude: 45.547079,
  longitude: -122.656841,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};

export default function ChargerMap() {
  const [chargers, setChargers] = useState<ChargingStation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadChargers(
      PORTLAND_DEFAULT_STARTING_LOCATION.latitude,
      PORTLAND_DEFAULT_STARTING_LOCATION.longitude
    );
  }, []);

  const loadChargers = async (latitude: number, longitude: number) => {
    setLoading(true);

    const params = {
      maxresults: 10,
      key: API_KEY,
      latitude,
      longitude,
    };

    try {
      const response: POIResponse = await axios.get(API_URL, { params });
      const mappedStations = response.data.map((station: POI) => ({
        id: station.ID,
        coordinate: {
          latitude: station.AddressInfo.Latitude,
          longitude: station.AddressInfo.Longitude,
        },
        name: station.AddressInfo.Title,
      }));

      setChargers(mappedStations);
    } catch (error) {
      console.error("Failed to load chargers:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={PORTLAND_DEFAULT_STARTING_LOCATION}
        style={styles.map}
        onRegionChangeComplete={(updatedRegion) => {
          loadChargers(updatedRegion.latitude, updatedRegion.longitude);
        }}
      >
        {chargers.map((station) => {
          return <Charger key={station.id} station={station} />;
        })}
      </MapView>
      {loading && <LoadingSpinner />}
    </View>
  );
}
