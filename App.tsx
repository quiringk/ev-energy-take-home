import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";
import axios from "axios";
import { ChargingStation } from "./types";

export default function App() {
  const [stations, setStations] = useState<ChargingStation[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await axios.get("https://api.openchargemap.io/v3/poi/", {
        params: {
          countrycode: "US",
          maxresults: 10,
          key: "f3b3dcb6-9716-4317-a89e-4608cdfa30c1",
        },
      });
      console.log(response.data[0].AddressInfo);
      setStations(
        response.data.map((station: any) => {
          return {
            id: station.ID,
            coordinate: {
              latitude: station.AddressInfo.Latitude,
              longitude: station.AddressInfo.Longitude,
            } as LatLng,
          };
        })
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {stations.map((station) => {
          return (
            <Marker
              key={station.id}
              coordinate={station.coordinate}
              title={"test"}
              description={"test2"}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
